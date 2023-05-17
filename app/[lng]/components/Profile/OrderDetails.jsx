"use client";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import Login from "../moleculs/Items/Login";
import { fetcher } from "@/app/hooks/useItems";
import { useRouter } from "next/navigation";
import ConfirmModal from "../moleculs/ConfirmModal";
import GlobalContext from "../../context/GlobalContext";

import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import Link from "next/link";
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
  const checkOrder = async (e) => {
    setGlobalLoader(true);
    if (token) {
      const response = await fetcher(
        "client/profile/showMyOrder",
        { id },
        token
      );
      if (response.status === 200) {
        const result = await response.json();
        console.log(result);
        if (result?.record) {
          setOrder(result.record);
          if (result?.record?.profile_address) {
            setCurrentAddress(result?.record?.profile_address);
            if (result?.record?.profile_address?.lat_lng) {
              setShowMarker(true);
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
      console.log(result);
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

    console.log({
      address_id: currentAddress.id,
      is_company: isRegisterOn,
      products,
    });
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
              {/* {product.grinder_id && (lng == "en" ? grinder.name : grinder.mn_name)} */}
            </p>
            <div className="flex   justify-between text-base font-light text-black-700">
              <p className="text-lg">
                {product.unit_price?.toLocaleString("en-US", {
                  style: "decimal",
                })}
                {"₮"}
              </p>
              <div className="font-thin text-lg text-white bg-black flex content-center items-center py-1">
                <span className=" px-2 min-w-[35px] text-center">
                  {!grinder ? product.quantity : grinder.quantity}
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
                  {t("information")}
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-6 bg-white p-10">
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
                  <div className="md:col-span-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 bg-gray-200 p-5">
                    {order.company_register && (
                      <>
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
                      </>
                    )}
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
                      {showMarker && (
                        <div className="sm:col-span-6">
                          <label
                            htmlFor="map"
                            className="block text-base  leading-6 text-gray-900 font-normal"
                          >
                            {t("map")}
                          </label>
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
                                  {showMarker && <Marker position={center} />}
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
                    {t("basket_information")}
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
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {order.items
                                .filter((item) => item?.good?.id != 56)
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
                        </div>
                        {/* <BasketItem lng={lng} hideTitle={true} /> */}
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setOpenConfirmModal(!openConfirmModal)}
                  className="w-full bg-[#F0B450] py-2 mt-4   "
                >
                  {t("checkout")}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <ConfirmModal
        openConfirmModal={openConfirmModal}
        setOpenConfirmModal={setOpenConfirmModal}
        lng={lng}
      />
    </>
  );
}

export default OrderDetails;
