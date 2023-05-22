"use client";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import Login from "../moleculs/Items/Login";
import { fetcher } from "@/app/hooks/useItems";
import { useRouter } from "next/navigation";
import ConfirmModal from "../moleculs/ConfirmModal";
import GlobalContext from "../../context/GlobalContext";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
  TrafficLayer,
} from "@react-google-maps/api";
import Link from "next/link";
import Loading from "../atoms/Loading";
function OrderDetails({ lng, id }) {
  const { t } = useTranslation(lng, "client");
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const router = useRouter();
  const {
    user,
    token,
    setAlerts,
    setGlobalLoader,
    district,
    googleMapsApiKey,
    mediaDomain,
  } = useContext(GlobalContext);

  const [order, setOrder] = useState(false);
  const [showMarker, setShowMarker] = useState(false);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: googleMapsApiKey,
  });
  const [main, setMain] = useState({ lat: 47.920934, lng: 106.917695 });
  const [center, setCenter] = useState({ lat: 47.920934, lng: 106.917695 });

  const [map, setMap] = useState(false);
  const [zoom, setZoom] = useState(14);
  const [grinders, setGrinders] = useState({});
  const [directionResponse, setDirectionResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const calculateDirection = async (l_lng) => {
    if (l_lng) {
      const directionsService = new google.maps.DirectionsService();
      const directionResult = await directionsService.route({
        origin: { lat: main.lat, lng: main.lng },
        destination: l_lng,
        travelMode: google.maps.TravelMode.DRIVING,
        drivingOptions: {
          departureTime: new Date(),
          trafficModel: "bestguess", // Include traffic information
        },
      });

      setDirectionResponse(directionResult);
      setDistance(directionResult.routes[0].legs[0].distance.text);
      setDuration(directionResult.routes[0].legs[0].duration.text);
    }
  };
  const checkOrder = async (e) => {
    setGlobalLoader(true);
    if (token) {
      const grinder_response = await fetcher(
        "client/grinder/list",
        {
          select: "*",
          id: id,
          relations: ["category:id,name"],
        },
        token
      );
      grinder_response;

      if (grinder_response.status === 200) {
        const grinder_result = await grinder_response.json();
        let current_grinders = {};
        grinder_result.record.map((item) => {
          current_grinders[item.id] = item;
        });

        setGrinders(current_grinders);
      }
      // url: `${apiDomain}client/grinder/list`,
      // data: {
      //   select: "*",
      //   id: id,
      //   relations: ["category:id,name"],
      // }
      const response = await fetcher(
        "client/profile/showMyOrder",
        { id },
        token
      );
      if (response.status === 200) {
        const result = await response.json();
        if (result?.record) {
          setOrder(result.record);
          if (result?.record?.profile_address) {
            setCurrentAddress(result?.record?.profile_address);
            if (result?.record?.profile_address?.lat_lng) {
              let l_lng = JSON.parse(result?.record?.profile_address?.lat_lng);
              if (l_lng.lat && l_lng.lng) {
                setCenter(l_lng);
                await calculateDirection(l_lng);
                setShowMarker(true);
              }
            }
          }
        }
      } else {
        setAlerts((val) => {
          return [
            ...val,
            {
              title: "Warning",
              description: t("not found"),
            },
          ];
        });
      }
    }
    setGlobalLoader(false);
  };
  useEffect(() => {
    checkOrder();
  }, [token]);
  const [isRegisterOn, setIsRegisterOn] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(false);

  const onOrderSubmit = async () => {
    if (!currentAddress) {
      setAlerts((val) => {
        return [
          ...val,
          {
            title: "Warning",
            description: t("choose address"),
          },
        ];
      });
      return false;
    }
    if (isRegisterOn && (!user.company_name || !user.company_register)) {
      setAlerts((val) => {
        return [
          ...val,
          {
            title: "Warning",
            description: t(
              "Please add your company information on your profile"
            ),
          },
        ];
      });
      return false;
    }
    const localCard = localStorage.getItem("card");
    let helper = localCard ? JSON.parse(localCard) : {};

    let products = Object.keys(helper).map((key) => {
      return {
        grinders: helper[key].grinders,
        id: helper[key].id,
        quantity: helper[key].quantity,
      };
    });

    setGlobalLoader(true);
    const response = await fetcher(
      "client/order/create",
      {
        address_id: currentAddress.id,
        is_company: isRegisterOn,
        products,
      },
      token
    );
    if (response.status == 200) {
      const result = await response.json();
      setAlerts((val) => {
        setGlobalLoader(false);
        return [
          ...val,
          {
            title: "Success",
            description: t(
              "Your order submited successfuly, Please check invoice on order detail page"
            ),
          },
        ];
      });
      router.push(
        `/${lng}/order/${result?.record?.order?.id}`,
        { query: { id: result?.record?.order?.id } },
        { shallow: true }
      );
      localStorage.setItem("card", "{}");
      // result.record.order
    } else {
      setGlobalLoader(false);
      setAlerts((val) => {
        return [
          ...val,
          {
            title: "Warning",
            description: t("some error"),
          },
        ];
      });
    }
  };

  const ProductItem = ({ product, grinder }) => {
    const { t } = useTranslation(lng, "header");
    return (
      <>
        <li key={"basket-product-item-" + product.id} className="flex py-6">
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img
              src={mediaDomain + product.good.image_path}
              alt={product.good.name}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col">
            <div>
              <div className="flex justify-between text-base font-medium text-black-800">
                <h3>
                  <Link href={`/${lng}/shop/product/${product.good.type_id}`}>
                    {product.good.name}
                  </Link>
                </h3>
              </div>
              {/* <p className="mt-1 text-sm text-gray-500">
      {product.color}
    </p> */}
            </div>
            <p className="text-black-600 min-h-[12px]">
              {product.grinder_id &&
                grinders[product.grinder_id] &&
                (lng == "en"
                  ? grinders[product.grinder_id].name
                  : grinders[product.grinder_id].mn_name)}
            </p>
            <div className="flex    text-base font-light text-black-700 ">
              <div className="text-lg flex w-full flex-row justify-between text-[#F0B450] items-center">
                <div className=" text-base font-normal text-black bg-transparent flex content-center">
                  <span className="min-w-[35px] text-left">
                    {product.unit_price?.toLocaleString("en-US", {
                      style: "decimal",
                    })}
                    {"₮ x "}
                    <span className="text-lg font-normal">
                      {!grinder ? product.quantity : grinder.quantity}
                    </span>
                  </span>
                </div>
                <span className="text-lg">
                  {product.total_price?.toLocaleString("en-US", {
                    style: "decimal",
                  })}
                  {"₮"}
                </span>
              </div>
            </div>
          </div>
        </li>
      </>
    );
  };

  return (
    <>
      <div className="container  items-start space-x-4 py-10 ">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 order-1 lg:order-1 sm:items-end lg:col-span-7">
            {user && (
              <>
                <h2 className="text-2xl text-gray-900 uppercase font-normal">
                  {t("order_information")}
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-6 bg-white p-10">
                  <div className="md:col-span-3 col-span-1">
                    <label
                      htmlFor="order_number"
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      {t("order_number")}:{" "}
                      <span className="text-black font-normal">
                        {order.number || "-"}
                      </span>
                    </label>
                  </div>
                  <div className="md:col-span-3 col-span-1">
                    <label
                      htmlFor="last_name"
                      className="block text-base  font-light leading-6 text-gray-900"
                    >
                      {t("created_at")}:{" "}
                      <span className="text-black font-normal">
                        {order?.created_at
                          ?.replace("T", " ")
                          .replace(".000000Z", "") || "-"}
                      </span>
                    </label>
                  </div>
                  <div className="md:col-span-3 col-span-1">
                    <label
                      htmlFor="first-name"
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      {t("first_name")}:{" "}
                      <span className="text-black font-normal">
                        {user.first_name || "-"}
                      </span>
                    </label>
                  </div>
                  <div className="md:col-span-3 col-span-1">
                    <label
                      htmlFor="last_name"
                      className="block text-base  font-light leading-6 text-gray-900"
                    >
                      {t("last_name")}:{" "}
                      <span className="text-black font-normal">
                        {user.last_name || "-"}
                      </span>
                    </label>
                  </div>

                  <div className="md:col-span-3 col-span-1">
                    <label
                      htmlFor="phone"
                      className="block text-base  font-light leading-6 text-gray-900"
                    >
                      {t("phone")}:{" "}
                      <span className="text-black font-normal">
                        {user.phone || "-"}
                      </span>
                    </label>
                  </div>
                  <div className="md:col-span-3 col-span-1">
                    <label
                      htmlFor="email"
                      className="block text-base  font-light  leading-6 text-gray-900"
                    >
                      {t("email")}:{" "}
                      <span className="text-black font-normal">
                        {user.emails || "-"}
                      </span>
                    </label>
                    <div className="mt-2"></div>
                  </div>

                  {order.company_register && (
                    <div className="md:col-span-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 bg-gray-200 p-5">
                      <div className="flex justify-between items-center col-span-6 text-gray-900">
                        <h1>{t("get_ebarimt")}</h1>
                      </div>
                      <div className="grid grid-cols-6 col-span-6 gap-4">
                        <div className="col-span-6 md:col-span-3">
                          <label
                            htmlFor="company_register"
                            className="block text-base font-light leading-6 text-gray-900"
                          >
                            {t("company_register")}:
                          </label>
                          <div className="mt-2">
                            <input
                              disabled
                              placeholder="text"
                              value={order.company_register}
                              type="text"
                              name="first-name"
                              id="first-name"
                              className="block w-full  border border-[#707070]  text-black font-normal py-1.5  sm:text-sm px-3 bg-gray-300 "
                            />
                          </div>
                        </div>

                        <div className="col-span-6 md:col-span-3">
                          <label
                            htmlFor="company_name"
                            className="block text-base font-light leading-6 text-gray-900"
                          >
                            {t("company_name")}:
                          </label>
                          <div className="mt-2">
                            <input
                              placeholder="text"
                              disabled
                              value={order.company_name}
                              type="text"
                              name="first-name"
                              id="first-name"
                              className="block w-full  border border-[#707070]  text-black font-normal py-1.5  sm:text-sm px-3 bg-gray-300 "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="md:col-span-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6 bg-gray-100 p-5">
                    <h3 className="uppercase text-lg">
                      {t("order_status_history")}
                    </h3>
                    <div className="md:col-span-6 col-span-1">
                      <table>
                        <tbody>
                          {order?.status_history?.map((item) => (
                            <tr
                              key={`order-status-history-tr-index-${item.id}`}
                            >
                              <td>
                                {" "}
                                {lng == "en"
                                  ? item?.status?.slug
                                  : item?.status?.name}
                                {":"}
                              </td>
                              <td className="pl-3">
                                {" "}
                                {item?.created_at
                                  ?.replace("T", " ")
                                  .replace(".000000Z", "") || "-"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {currentAddress && (
                    <div className="md:col-span-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6 bg-gray-100 p-5">
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-base font-light leading-6 text-gray-900"
                        >
                          {t("receiver_name")}:{" "}
                          <span className="text-black font-normal">
                            {currentAddress.receiver_name || "-"}
                          </span>
                        </label>
                      </div>
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="receiver_phone"
                          className="block text-base font-light leading-6 text-gray-900"
                        >
                          {t("receiver_phone")}:{" "}
                          <span className="text-black font-normal">
                            {currentAddress.receiver_phone || "-"}
                          </span>
                        </label>
                      </div>
                      <div className="sm:col-span-6">
                        <label
                          htmlFor="district"
                          className="block text-base font-light leading-6 text-gray-900"
                        >
                          {t("district")}:{" "}
                          <span className="text-black font-normal">
                            {district[currentAddress.district] || "-"}
                          </span>
                        </label>
                      </div>
                      <div className="sm:col-span-6">
                        <label
                          htmlFor="first-name"
                          className="block text-base font-light leading-6 text-gray-900"
                        >
                          {t("full_address")}:{" "}
                          <span className="text-black font-normal">
                            {currentAddress.receiver_name || "-"}
                          </span>
                        </label>
                      </div>
                      {distance && (
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="district"
                            className="block text-base font-light leading-6 text-gray-900"
                          >
                            {t("distance")}:{" "}
                            <span className="text-black font-normal">
                              {distance}
                            </span>
                          </label>
                        </div>
                      )}
                      {duration && (
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="district"
                            className="block text-base font-light leading-6 text-gray-900"
                          >
                            {t("duration")}:{" "}
                            <span className="text-black font-normal">
                              {duration}
                            </span>
                          </label>
                        </div>
                      )}

                      {showMarker && (
                        <div className="sm:col-span-6">
                          <div className="mt-2">
                            {!isLoaded && <Loading />}
                            {isLoaded && (
                              <div className="block w-full  px-2  aspect-video py-1.5  sm:text-sm ">
                                <GoogleMap
                                  center={main}
                                  zoom={zoom}
                                  mapContainerStyle={{
                                    width: "100%",
                                    height: "100%",
                                  }}
                                  options={{
                                    streetViewControl: false,
                                    fullscreenControl: false,
                                  }}
                                  onLoad={(map) => setMap(map)}
                                  onClick={(event) => {
                                    if (!showMarker) {
                                      setCenter({
                                        lat: event.latLng.lat(),
                                        lng: event.latLng.lng(),
                                      });
                                      setShowMarker(true);
                                    }
                                  }}
                                >
                                  {showMarker && (
                                    <>
                                      <Marker position={main} />
                                    </>
                                  )}
                                  {showMarker && directionResponse && (
                                    <>
                                      <DirectionsRenderer
                                        directions={directionResponse}
                                      />
                                      <TrafficLayer />
                                    </>
                                  )}
                                </GoogleMap>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </>
            )}
            {!user && !token && (
              <>
                <h2 className="text-2xl text-gray-900 uppercase font-normal">
                  {"\u00A0"}
                </h2>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8  bg-white p-10">
                  <Login isDialog={false} />
                </div>
              </>
            )}
          </div>
          <div className="col-span-12 order-2 lg:oder-2 lg:col-span-5 pb-10">
            {user && token && order && (
              <>
                <div className="max-w-full pt-10 md:pt-0">
                  <h2 className="text-2xl text-gray-900 uppercase font-normal ">
                    <br />
                  </h2>
                  <div className="pointer-events-auto mt-10">
                    <div className="flex flex-col bg-white ">
                      <div className="flex-1 overflow-y-auto  py-6 ">
                        <div className="flex items-start justify-between">
                          <h2
                            className="text-lg font-medium text-gray-900 px-3 sm:px-6"
                            id="slide-over-title"
                          >
                            {t("products")}
                          </h2>
                        </div>
                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200  px-3 sm:px-6"
                            >
                              {order.items
                                .filter((item) => item?.good?.id != 57)
                                .map((product) => {
                                  return (
                                    <ProductItem
                                      key={"basktet-product-real-" + product.id}
                                      product={product}
                                    />
                                  );
                                })}
                            </ul>
                            {(!order.items ||
                              Object.keys(order.items).length === 0) && (
                              <p className="text-center  text-lg mt-2">
                                {t("empty_cart")}
                              </p>
                            )}
                          </div>

                          <hr className="my-3" />
                          {order?.items.find((item) => item.good_id === 57) && (
                            <div className="flex justify-between text-base  text-black-800  py-3  px-3 sm:px-6">
                              <p className="text-base font-normal">
                                {t("delivery")}
                              </p>
                              <p className="text-lg  text-[#F0B450] ">
                                {parseInt(5000)?.toLocaleString("en-US", {
                                  style: "decimal",
                                })}
                                {"₮"}
                              </p>
                            </div>
                          )}
                          <div className="flex justify-between text-base  text-black-800  py-3  px-3 sm:px-6">
                            <p className="text-base font-normal">
                              {t("subtotal")}
                            </p>
                            <p className="text-lg font-normal  text-[#F0B450] ">
                              {parseInt(
                                order.total_price + 5000
                              )?.toLocaleString("en-US", {
                                style: "decimal",
                              })}
                              {"₮"}
                            </p>
                          </div>
                        </div>

                        {/* <BasketItem lng={lng} hideTitle={true} /> */}
                      </div>
                    </div>
                  </div>
                </div>
                {!order?.ispayed && (
                  <button
                    onClick={() => setOpenConfirmModal(!openConfirmModal)}
                    className="w-full bg-[#F0B450] py-2 mt-4   "
                  >
                    {t("pay")}
                  </button>
                )}
                <button
                  onClick={() => setOpenConfirmModal(!openConfirmModal)}
                  className="w-full bg-black text-white py-2 mt-4   "
                >
                  {t("check_payment")}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {order?.invoice?.qpay_json && (
        <ConfirmModal
          invoice={order.invoice}
          qpay={JSON.parse(order?.invoice?.qpay_json)}
          openConfirmModal={openConfirmModal}
          setOpenConfirmModal={setOpenConfirmModal}
          lng={lng}
        />
      )}
    </>
  );
}

export default OrderDetails;
