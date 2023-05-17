"use client";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "@/app/i18n/client";
import GlobalContext from "../../context/GlobalContext";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import Loading from "../atoms/Loading";
import { fetcher } from "@/app/hooks/useItems";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

function Address({ lng }) {
  const { user, setUser, token, googleMapsApiKey } = useContext(GlobalContext);
  const searchParams = useSearchParams();
  const id = parseInt(searchParams.get("id")) || 0;
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: googleMapsApiKey,
  });

  const [main, setMain] = useState({ lat: 47.920934, lng: 106.917695 });
  const [center, setCenter] = useState({ lat: 47.920934, lng: 106.917695 });
  const [isRegisterOn, setIsRegisterOn] = useState(false);
  const [map, setMap] = useState(false);
  const [zoom, setZoom] = useState(14);
  const { t } = useTranslation(lng, "client");
  const [showMarker, setShowMarker] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
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
  const [currentAddress, setCurrentAddress] = useState(false);
  const {
    register: address_register,
    handleSubmit: handdleAddressSubmit,
    formState: { errors: address_error },
    reset: registerReset,
  } = useForm({
    defaultValues: {
      name: currentAddress?.name || null,
      receiver_name: currentAddress?.receiver_name || user.first_name,
      receiver_phone: currentAddress?.receiver_phone || user.phone,
      district: currentAddress?.district || null,
      address_information: currentAddress?.address_information || null,
      lat_lng: currentAddress?.lat_lng || null,
    },
  });

  useEffect(() => {
    if (id > 0) {
      setCurrentAddress(user.addresses.find((item) => item.id == id) || false);
    } else {
      setCurrentAddress(
        {
          id: 0,
          name: "",
          receiver_name: "",
          receiver_phone: "",
          district: "",
          address_information: "",
          lat_lng: "",
        } || false
      );
    }
  }, []);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setCenter((val) => {
            console.log(val);
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
      console.log("Geolocation is not supported by this browser.");
    }
  }, [isLoaded]);
  //End form confirm nemev
  const onSubmitAddress = async (data) => {
    if (showMarker) {
      data.lat_lng = JSON.stringify(center);
    }
    if (currentAddress) {
      data.addressType = currentAddress.id;
    }
    setIsSaving(true);
    const response = await fetcher(
      "client/profile/address/create",
      data,
      token
    );
    if (response.status == 200) {
      const result = await response.json();
      setUser(result.user);
      setCurrentAddress(result.address);
      setAddresses(
        result.user?.addresses
          ? [
              ...result.user.addresses,
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
      setIsSaving(false);
    }
  };
  const deleteAddress = async () => {
    if (currentAddress) {
      if (confirm(t("delete_address"))) {
        setIsSaving(true);
        const response = await fetcher(
          "client/profile/address/delete",
          currentAddress,
          token
        );
        if (response.status == 200) {
          const result = await response.json();
          setUser(result.user);
          setAddresses(
            result.user?.addresses
              ? [
                  ...result.user.addresses,
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
          setIsSaving(false);
        }
      }
    }
  };
  const handleDragEnd = (e) => {
    setZoom(14);
    setCenter({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };
  return (
    <>
      <form
        className="w-full "
        onSubmit={handdleAddressSubmit(onSubmitAddress)}
      >
        <h2 className="text-2xl  text-gray-900 uppercase font-normal">
          {t("delivery_address")}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-6 bg-white p-10">
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
                return (
                  <div
                    className="col-span-3 md:col-span-1"
                    key={`address-item-${address.id}`}
                  >
                    <input
                      placeholder={t("choose_address")}
                      {...address_register("addressType", { required: false })}
                      type="radio"
                      name="option"
                      id={`address-${address.id}`}
                      className="peer hidden"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCurrentAddress(address);
                          registerReset({
                            addressType: address?.id || 0,
                            name: address?.name || null,
                            receiver_name:
                              address?.receiver_name || user.first_name,
                            receiver_phone:
                              address?.receiver_phone || user.phone,
                            district: address?.district || null,
                            address_information:
                              address?.address_information || null,
                            lat_lng: address?.lat_lng || null,
                          });

                          console.log(address);
                          if (address?.lat_lng) {
                            console.log(address?.lat_lng);

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

              {address_error.addressType && (
                <div className="mt-4 col-span-3 bg-red-500 py-2 px-5">
                  <h1 className="text-white text-sm">{t("please_select")}</h1>
                </div>
              )}
            </div>
          </div>
          {currentAddress && (
            <>
              <div className="sm:col-span-6">
                <label
                  htmlFor="first-name"
                  className="block text-base font-light leading-6 text-gray-900"
                >
                  <span className="text-red-500 mr-2">*</span>
                  {t("address_name")}
                </label>
                <div className="mt-2">
                  <input
                    placeholder={t("address_name")}
                    {...address_register("name", { required: true })}
                    type="text"
                    name="name"
                    id="address_name"
                    className="block w-full px-3  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white"
                  />
                </div>
                {address_error.name && (
                  <div className="mt-4 w-full bg-red-500 py-2 px-5">
                    <h1 className="text-white text-sm">{t("please_fill")}</h1>
                  </div>
                )}
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-base font-light leading-6 text-gray-900"
                >
                  <span className="text-red-500 mr-2">*</span>
                  {t("receiver_name")}
                </label>
                <div className="mt-2">
                  <input
                    placeholder={t("receiver_name")}
                    {...address_register("receiver_name", { required: true })}
                    type="text"
                    name="receiver_name"
                    id="receiver_name"
                    className="block w-full px-3  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white"
                  />
                </div>
                {address_error.receiver_name && (
                  <div className="mt-4 w-full bg-red-500 py-2 px-5">
                    <h1 className="text-white text-sm">{t("please_fill")}</h1>
                  </div>
                )}
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="receiver_phone"
                  className="block text-base font-light leading-6 text-gray-900"
                >
                  <span className="text-red-500 mr-2">*</span>
                  {t("receiver_phone")}
                </label>
                <div className="mt-2">
                  <input
                    placeholder={t("receiver_phone")}
                    {...address_register("receiver_phone", { required: true })}
                    type="text"
                    name="receiver_phone"
                    id="receiver_phone"
                    className="block w-full  px-3 border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white"
                  />
                </div>
                {address_error.receiver_phone && (
                  <div className="mt-4 w-full bg-red-500 py-2 px-5">
                    <h1 className="text-white text-sm">{t("please_fill")}</h1>
                  </div>
                )}
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="district"
                  className="block text-base font-light leading-6 text-gray-900"
                >
                  <span className="text-red-500 mr-2">*</span>
                  {t("district")}
                </label>
                <div className="mt-2">
                  <select
                    defaultValue={"BZD"}
                    {...address_register("district", { required: true })}
                    type="select"
                    className="block w-full  border border-[#707070] px-2  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white"
                  >
                    <option value={"BGD"}>Баянгол</option>
                    <option value={"BZD"}>Баянзүрх</option>
                    <option value={"SBD"}>Сүхбаатар</option>
                    <option value={"SHD"}>Сонгинохайрхан</option>
                    <option value={"CHD"}>Чингэлтэй</option>
                    <option value={"HUD"}>Хан-Уул</option>
                  </select>
                  {address_error.district && (
                    <div className="mt-4 w-full bg-red-500 py-2 px-5">
                      <h1 className="text-white text-sm">Заавал бөглөх</h1>
                    </div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="first-name"
                  className="block text-base font-normal leading-6 text-gray-900"
                >
                  {t("full_address")}
                </label>
                <div className="mt-2">
                  <textarea
                    {...address_register("address_information")}
                    rows={4}
                    type="text"
                    name="address_information"
                    id="address_information"
                    placeholder={t("full_address")}
                    className="block w-full  border border-[#707070] px-2  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white"
                  />
                </div>
              </div>
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
                        {showMarker && (
                          <Marker
                            position={center}
                            draggable={true}
                            onDragEnd={handleDragEnd}
                          />
                        )}
                      </GoogleMap>
                    </div>
                  )}
                </div>
              </div>
              <div className="sm:col-span-6">
                <button
                  htmlFor={2}
                  type="submit"
                  className="block cursor-pointer select-none  bg-[#080505] p-2 text-center   text-white w-full"
                >
                  {t("save")}
                </button>
                {isSaving && <Loading />}
              </div>
              {currentAddress?.id > 0 && (
                <div className="sm:col-span-6">
                  <button
                    htmlFor={2}
                    type="button"
                    className="block cursor-pointer select-none  bg-red-500 p-2 text-center  text-white w-full"
                    onClick={deleteAddress}
                  >
                    {t("delete")}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </form>
    </>
  );
}
export default Address;
