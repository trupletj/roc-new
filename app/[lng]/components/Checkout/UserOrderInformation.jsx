"use client";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "@/app/i18n/client";
import GlobalContext from "../../context/GlobalContext";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import Loading from "../atoms/Loading";
import { fetcher } from "@/app/hooks/useItems";

function UserOrderInformation({
  lng,
  currentAddress,
  setCurrentAddress,
  isRegisterOn,
  setIsRegisterOn,
}) {
  const { user, setUser, token, googleMapsApiKey, district } =
    useContext(GlobalContext);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: googleMapsApiKey,
  });

  const [main, setMain] = useState({ lat: 47.920934, lng: 106.917695 });
  const [center, setCenter] = useState({ lat: 47.920934, lng: 106.917695 });

  const [map, setMap] = useState(false);
  const [zoom, setZoom] = useState(14);
  const { t } = useTranslation(lng, "client");

  const [showMarker, setShowMarker] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      phone: user.phone,
      email: user.email,
      company_register: user.company_register,
      company_name: user.company_name,
      addressType: null,
    },
  });

  const [addresses, setAddresses] = useState(
    user?.addresses
      ? [
          ...user.addresses,
          {
            id: 0,
            name: "",
            receiver_name: "",
            receiver_phone: "",
            district: "",
            address_information: "",
            lat_lng: "",
          },
        ]
      : [
          {
            id: 0,
            name: "",
            receiver_name: "",
            receiver_phone: "",
            district: "",
            address_information: "",
            lat_lng: "",
          },
        ]
  );
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setCenter((val) => {
            return { lat: latitude, lng: longitude };
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
    }
  }, [isLoaded]);
  //End form confirm nemev
  const onSubmit = (data) => console.log(data);
  const handleDragEnd = (e) => {
    setZoom(14);
    setCenter({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };
  return (
    <>
      <form
        className="w-full"
        onSubmit={handleSubmit(onSubmit)}
        onChange={(data) => {}}
      >
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
          <div className="md:col-span-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-gray-200 p-5">
            <div
              onClick={() => setIsRegisterOn(!isRegisterOn)}
              className="flex justify-between items-center col-span-6 text-gray-900 cursor-pointer"
            >
              <h1>И-Баримт албан байгууллагаар авах</h1>
              {!isRegisterOn ? (
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                  >
                    <g
                      id="Group_682"
                      data-name="Group 682"
                      transform="translate(-760.5 -627.5)"
                    >
                      <path
                        id="Path_148"
                        data-name="Path 148"
                        d="M0,0V18"
                        transform="translate(778.5 636.5) rotate(90)"
                        fill="none"
                        stroke="#201d1d"
                        strokeWidth="1.5"
                      />
                      <path
                        id="Path_149"
                        data-name="Path 149"
                        d="M0,0V18"
                        transform="translate(769.5 645.5) rotate(180)"
                        fill="none"
                        stroke="#201d1d"
                        strokeWidth="1.5"
                      />
                    </g>
                  </svg>
                </div>
              ) : (
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height="1.5"
                    viewBox="0 0 18 1.5"
                  >
                    <g
                      id="Group_683"
                      data-name="Group 683"
                      transform="translate(-760.5 -635.75)"
                    >
                      <path
                        id="Path_148"
                        data-name="Path 148"
                        d="M0,0V18"
                        transform="translate(778.5 636.5) rotate(90)"
                        fill="none"
                        stroke="#201d1d"
                        strokeWidth="1.5"
                      />
                    </g>
                  </svg>
                </div>
              )}
            </div>
            {isRegisterOn && (
              <div className="grid grid-cols-6 col-span-6 gap-4">
                <div className="col-span-6 md:col-span-3">
                  <label
                    htmlFor="company_register"
                    className="block text-base font-light leading-6 text-gray-900"
                  >
                    {t("reg_number_organization")}:
                  </label>
                  <div className="mt-2">
                    <input
                      disabled
                      placeholder="text"
                      {...register("company_register", {
                        required: true,
                      })}
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
                    {t("name_organiztion")}:
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="text"
                      disabled
                      {...register("company_name", { required: true })}
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="block w-full  border border-[#707070]  text-black font-normal py-1.5  sm:text-sm px-3 bg-gray-300 "
                    />
                  </div>
                  {errors.company_name && (
                    <div className="mt-4 w-full bg-red-500 py-2 px-5">
                      <h1 className="text-white text-sm">{t("please_fill")}</h1>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="md:col-span-6">
            <label
              htmlFor="addressType"
              className="block text-base font-light leading-6 text-gray-900"
            >
              <span className="text-red-500 mr-2">*</span>
              {t("choose_address")}
            </label>
            <div className="grid  grid-cols-3 gap-2 mt-2">
              {addresses?.map((address) => {
                if (address.id > 0)
                  return (
                    <div
                      className="col-span-3 md:col-span-1"
                      key={`addressType-item-${address.id}`}
                    >
                      <input
                        placeholder={t("choose_address")}
                        {...register("addressType", {
                          required: true,
                        })}
                        type="radio"
                        name="addressType"
                        id={`address-${address.id}`}
                        className="peer hidden"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setCurrentAddress(address);
                            if (address?.lat_lng) {
                              try {
                                let l_lng = JSON.parse(address.lat_lng);
                                if (l_lng.lat && l_lng.lng) {
                                  setCenter(l_lng);
                                  setMain(l_lng);
                                  setShowMarker(true);
                                } else {
                                  setShowMarker(false);
                                }
                              } catch (e) {
                                setShowMarker(false);
                              }
                            } else {
                              setShowMarker(false);
                            }
                          }
                          return e.target.checked;
                        }}
                      />
                      <label
                        htmlFor={`address-${address.id}`}
                        className={`block cursor-pointer select-none   p-2 text-center   text-white ${
                          currentAddress?.id == address.id
                            ? "bg-[#F0B450]"
                            : "bg-[#080505]"
                        }`}
                      >
                        {address.id === 0 ? t("new") : address.name}
                      </label>
                    </div>
                  );
              })}

              {errors.addressType && (
                <div className="mt-4 col-span-3 bg-red-500 py-2 px-5">
                  <h1 className="text-white text-sm">{t("please_select")}</h1>
                </div>
              )}
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
                          mapContainerStyle={{ width: "100%", height: "100%" }}
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
      </form>

      {false && (
        <div className="w-full pt-10">
          <h2 className="text-2xl  text-gray-900 uppercase font-normal">
            {t("additional_info")}
          </h2>
          <div className="sm:col-span-6 mt-5">
            <div className="grid  grid-cols-2 gap-2 " x-data="app">
              <div>
                <input
                  placeholder={t("additional_info")}
                  {...register("additionalInfo")}
                  value={"Хүргэлтийн өмнө залгах"}
                  type="checkbox"
                  name="option"
                  id={11}
                  className="peer hidden"
                />
                <label
                  htmlFor={11}
                  className="block cursor-pointer select-none  bg-white border border-[#080505] text-[#080505]  p-2 text-center peer-checked:bg-[#080505]  peer-checked:text-white"
                >
                  {t("call_before_delivery")}
                </label>
              </div>
              <div>
                <input
                  placeholder={t("call_before_delivery")}
                  value={"Оройн цагаар хүргэх"}
                  {...register("additionalInfo")}
                  type="checkbox"
                  name="option"
                  id={21}
                  className="peer hidden"
                />
                <label
                  htmlFor={21}
                  className="block cursor-pointer select-none  bg-white border border-[#080505] text-[#080505]  p-2 text-center peer-checked:bg-[#080505]  peer-checked:text-white"
                >
                  {t("deliver_in_the_evening")}
                </label>
              </div>
              <div>
                <input
                  placeholder={t("deliver_in_the_evening")}
                  value={"Нялх хүүхэдтэй"}
                  {...register("additionalInfo")}
                  type="checkbox"
                  name="option"
                  id={31}
                  className="peer hidden"
                />
                <label
                  htmlFor={31}
                  className="block cursor-pointer select-none  bg-white border border-[#080505] text-[#080505]  p-2 text-center peer-checked:bg-[#080505]  peer-checked:text-white"
                >
                  Нялх хүүхэдтэй
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default UserOrderInformation;
