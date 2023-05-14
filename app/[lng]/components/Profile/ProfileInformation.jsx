"use client";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "@/app/i18n/client";
import GlobalContext from "../../context/GlobalContext";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import Loading from "../atoms/Loading";
import { fetcher } from "@/app/hooks/useItems";

function ProfileInformation({ lng }) {
  const { user, setUser, token, googleMapsApiKey } = useContext(GlobalContext);
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

  //End form confirm nemev
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl text-gray-900 uppercase font-normal">
          {t("information")}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-6 bg-white p-10">
          <div className="md:col-span-3 col-span-1">
            <label
              htmlFor="first-name"
              className="block text-base font-light leading-6 text-gray-900"
            >
              <span className="text-red-500 mr-2">*</span>
              {t("first_name")}
            </label>
            <div className="mt-2">
              <input
                placeholder={t("first_name")}
                type="text"
                {...register("first_name", {
                  required: true,
                  maxLength: 20,
                })}
                name="first_name"
                id="first_name"
                className="block w-full  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white px-3"
              />
            </div>
            {errors.first_name && (
              <div className="mt-4 w-full bg-red-500 py-2 px-5">
                <h1 className="text-white text-sm">{t("please_fill")}</h1>
              </div>
            )}
          </div>
          <div className="md:col-span-3 col-span-1">
            <label
              htmlFor="last_name"
              className="block text-base font-light leading-6 text-gray-900"
            >
              <span className="text-red-500 mr-2">*</span>
              {t("last_name")}
            </label>
            <div className="mt-2">
              <input
                placeholder={t("last_name")}
                type="text"
                {...register("last_name", {
                  required: true,
                  maxLength: 20,
                })}
                name="last_name"
                id="last_name"
                className="block w-full  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm px-3 bg-white"
              />
            </div>
            {errors.last_name && (
              <div className="mt-4 w-full bg-red-500 py-2 px-5">
                <h1 className="text-white text-sm">{t("please_fill")}</h1>
              </div>
            )}
          </div>

          <div className="md:col-span-3 col-span-1">
            <label
              htmlFor="phone"
              className="block text-base font-light leading-6 text-gray-900"
            >
              <span className="text-red-500 mr-2">*</span>
              {t("phone")}
            </label>
            <div className="mt-2">
              <input
                disabled={true}
                placeholder={t("phone")}
                {...register("phone", { required: true, maxLength: 8 })}
                type="text"
                name="phone"
                id="phone"
                className="block w-full  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm px-3 bg-white"
              />
            </div>
            {errors.phone && (
              <div className="mt-4 w-full bg-red-500 py-2 px-5">
                <h1 className="text-white text-sm">{t("please_fill")}</h1>
              </div>
            )}
          </div>
          <div className="md:col-span-3 col-span-1">
            <label
              htmlFor="email"
              className="block text-base font-light leading-6 text-gray-900"
            >
              <span className="text-red-500 mr-2">*</span>
              {t("email")}
            </label>
            <div className="mt-2">
              <input
                placeholder={t("email")}
                type="text"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
                name="email"
                id="email"
                className="block w-full  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm px-3 bg-white"
              />
            </div>
            {errors.email && (
              <div className="mt-4 w-full bg-red-500 py-2 px-5">
                <h1 className="text-white text-sm">{t("please_fill")}</h1>
              </div>
            )}
          </div>
          <div className="md:col-span-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-gray-200 p-5">
            <div
              onClick={() => setIsRegisterOn(!isRegisterOn)}
              className="flex justify-between items-center col-span-6 text-gray-900 cursor-pointer"
            >
              <h1>И-Баримт албан байгууллагаар авах</h1>
              {isRegisterOn ? (
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
                    <span className="text-red-500 mr-2">*</span>
                    Байгууллагын регистрийн дугаар
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="text"
                      {...register("company_register", {
                        required: true,
                      })}
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="block w-full  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm px-3 bg-white"
                    />
                  </div>
                  {errors.company_register && (
                    <div className="mt-4 w-full bg-red-500 py-2 px-5">
                      <h1 className="text-white text-sm">{t("please_fill")}</h1>
                    </div>
                  )}
                </div>

                <div className="col-span-6 md:col-span-3">
                  <label
                    htmlFor="company_name"
                    className="block text-base font-light leading-6 text-gray-900"
                  >
                    <span className="text-red-500 mr-2">*</span>
                    Байгууллагын нэр
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="text"
                      {...register("company_name", { required: true })}
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="block w-full  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm px-3 bg-white"
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
        </div>
      </form>
    </>
  );
}
export default ProfileInformation;
