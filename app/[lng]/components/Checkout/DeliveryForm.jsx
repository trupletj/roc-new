"use client";
import React, { useState } from "react";
import Image from "next/image";
import image from "@/public/assets/coffee1.png";

import { useTranslation } from "@/app/i18n/client";
import { useForm } from "react-hook-form";
import ConfirmModal from "../moleculs/ConfirmModal";
import BasketItem from "../Shop/BasketItems";
import Link from "next/link";

function DeliveryForm({ lng }) {
  const { t } = useTranslation(lng, "client");
  const [isRegisterOn, setIsRegisterOn] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //End form confirm nemev
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container  items-start space-x-4 py-10 "
      >
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-7">
            <div className="w-full">
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
                      {...register("firstName", {
                        required: true,
                        maxLength: 20,
                      })}
                      name="firstName"
                      id="firstName"
                      className="block w-full  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white px-3"
                    />
                  </div>
                  {errors.firstName && (
                    <div className="mt-4 w-full bg-red-500 py-2 px-5">
                      <h1 className="text-white text-sm">{t("please_fill")}</h1>
                    </div>
                  )}
                </div>
                <div className="md:col-span-3 col-span-1">
                  <label
                    htmlFor="lastName "
                    className="block text-base font-light leading-6 text-gray-900"
                  >
                    <span className="text-red-500 mr-2">*</span>
                    {t("last_name")}
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder={t("last_name")}
                      type="text"
                      {...register("lastName", {
                        required: true,
                        maxLength: 20,
                      })}
                      name="lastName"
                      id="lastName"
                      className="block w-full  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm px-3 bg-white"
                    />
                  </div>
                  {errors.lastName && (
                    <div className="mt-4 w-full bg-red-500 py-2 px-5">
                      <h1 className="text-white text-sm">{t("please_fill")}</h1>
                    </div>
                  )}
                </div>

                <div className="md:col-span-3 col-span-1">
                  <label
                    htmlFor="first-name"
                    className="block text-base font-light leading-6 text-gray-900"
                  >
                    <span className="text-red-500 mr-2">*</span>
                    {t("phone")}
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder={t("phone")}
                      {...register("phone", { required: true, maxLength: 20 })}
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
                      {...register("email", { required: true })}
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
                          htmlFor="first-name"
                          className="block text-base font-light leading-6 text-gray-900"
                        >
                          <span className="text-red-500 mr-2">*</span>
                          Байгууллагын регистрийн дугаар
                        </label>
                        <div className="mt-2">
                          <input
                            placeholder="text"
                            {...register("organizaionRegister", {
                              required: true,
                            })}
                            type="text"
                            name="first-name"
                            id="first-name"
                            className="block w-full  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm px-3 bg-white"
                          />
                        </div>
                        {errors.organizaionRegister && (
                          <div className="mt-4 w-full bg-red-500 py-2 px-5">
                            <h1 className="text-white text-sm">
                              {t("please_fill")}
                            </h1>
                          </div>
                        )}
                      </div>

                      <div className="col-span-6 md:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-base font-light leading-6 text-gray-900"
                        >
                          <span className="text-red-500 mr-2">*</span>
                          Байгууллагын нэр
                        </label>
                        <div className="mt-2">
                          <input
                            placeholder="text"
                            {...register("organizaionName", { required: true })}
                            type="text"
                            name="first-name"
                            id="first-name"
                            className="block w-full  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm px-3 bg-white"
                          />
                        </div>
                        {errors.organizaionName && (
                          <div className="mt-4 w-full bg-red-500 py-2 px-5">
                            <h1 className="text-white text-sm">
                              {t("please_fill")}
                            </h1>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full pt-10">
              <h2 className="text-2xl  text-gray-900 uppercase font-normal">
                {t("delivery_address")}
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-6 bg-white p-10">
                <div className="md:col-span-6">
                  <label
                    htmlFor="first-name"
                    className="block text-base font-light leading-6 text-gray-900"
                  >
                    <span className="text-red-500 mr-2">*</span>
                    {t("choose_address")}
                  </label>
                  <div className="grid  grid-cols-3 gap-2 mt-2">
                    <div className="col-span-3 md:col-span-1">
                      <input
                        placeholder={t("choose_address")}
                        {...register("addressType", { required: true })}
                        value={"Ажил"}
                        type="radio"
                        name="option"
                        id={1}
                        className="peer hidden"
                      />
                      <label
                        htmlFor={1}
                        className="block cursor-pointer select-none  bg-[#080505] p-2 text-center peer-checked:bg-[#F0B450]  text-white"
                      >
                        {t("work")}
                      </label>
                    </div>
                    <div className="col-span-3 md:col-span-1">
                      <input
                        placeholder={t("choose_address")}
                        {...register("addressType", { required: true })}
                        type="radio"
                        name="option"
                        id={2}
                        className="peer hidden"
                      />
                      <label
                        htmlFor={2}
                        className="block cursor-pointer select-none  bg-[#080505] p-2 text-center peer-checked:bg-[#F0B450]  text-white"
                      >
                        {t("home")}
                      </label>
                    </div>
                    <div className="col-span-3 md:col-span-1">
                      <input
                        placeholder={t("choose_address")}
                        {...register("addressType", { required: true })}
                        type="radio"
                        name="option"
                        id={3}
                        className="peer hidden"
                      />
                      <label
                        htmlFor={3}
                        className="block cursor-pointer select-none  bg-[#080505] p-2 text-center peer-checked:bg-[#F0B450]  text-white"
                      >
                        {t("pickup")}
                      </label>
                    </div>
                    {errors.addressType && (
                      <div className="mt-4 col-span-3 bg-red-500 py-2 px-5">
                        <h1 className="text-white text-sm">
                          {t("please_select")}
                        </h1>
                      </div>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-2">
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
                      {...register("deliveryFirstName", { required: true })}
                      type="text"
                      name="deliveryFirstName"
                      id="deliveryFirstName"
                      className="block w-full px-3  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white"
                    />
                  </div>
                  {errors.deliveryFirstName && (
                    <div className="mt-4 w-full bg-red-500 py-2 px-5">
                      <h1 className="text-white text-sm">{t("please_fill")}</h1>
                    </div>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="first-name"
                    className="block text-base font-light leading-6 text-gray-900"
                  >
                    <span className="text-red-500 mr-2">*</span>
                    {t("last_name")}
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder={t("last_name")}
                      {...register("deliveryLasttName", { required: true })}
                      type="text"
                      name="deliveryLasttName"
                      id="deliveryLasttName"
                      className="block w-full px-3  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white"
                    />
                  </div>
                  {errors.deliveryLasttName && (
                    <div className="mt-4 w-full bg-red-500 py-2 px-5">
                      <h1 className="text-white text-sm">{t("please_fill")}</h1>
                    </div>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="first-name"
                    className="block text-base font-light leading-6 text-gray-900"
                  >
                    <span className="text-red-500 mr-2">*</span>
                    {t("phone")}
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder={t("phone")}
                      {...register("deliveryPhone", { required: true })}
                      type="text"
                      name="deliveryPhone"
                      id="deliveryPhone"
                      className="block w-full  px-3 border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white"
                    />
                  </div>
                  {errors.deliveryPhone && (
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
                    {t("city")}
                  </label>
                  <div className="mt-2">
                    <select
                      {...register("deliveryCity", { required: true })}
                      type="select"
                      className="block w-full  border border-[#707070] px-2  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white"
                    >
                      <option disabled selected hidden>
                        {t("please_select_city")}
                      </option>
                      <option value={1}>Сонгох 1</option>
                      <option value={2}>Сонгох 2</option>
                    </select>
                    {errors.deliveryCity && (
                      <div className="mt-4 w-full bg-red-500 py-2 px-5">
                        <h1 className="text-white text-sm">Заавал бөглөх</h1>
                      </div>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-base font-light leading-6 text-gray-900"
                  >
                    <span className="text-red-500 mr-2">*</span>
                    {t("district")}
                  </label>
                  <div className="mt-2">
                    <select
                      {...register("deliveryDistrict", { required: true })}
                      type="select"
                      className="block w-full  border border-[#707070] px-2  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white"
                    >
                      <option disabled selected hidden>
                        {t("please_select_district")}
                      </option>
                      <option value={1}>Сонгох 1</option>
                      <option value={2}>Сонгох 2</option>
                    </select>
                    {errors.deliveryDistrict && (
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
                      {...register("deliveryAddressFull")}
                      rows={4}
                      type="text"
                      name="first-name"
                      id="first-name"
                      placeholder={t("placeholder_full_address")}
                      className="block w-full  border border-[#707070] px-2  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white"
                    />
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="first-name"
                    className="block text-base  leading-6 text-gray-900 font-normal"
                  >
                    {t("map")}
                  </label>
                  <div className="mt-2">
                    <div className="block w-full bg-gray-500  border border-[#707070] px-2  aspect-square py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm " />
                  </div>
                </div>
              </div>
            </div>
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
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="max-w-full pt-10 md:pt-0">
              <h2 className="text-2xl text-gray-900 uppercase font-normal">
                {t("payment_method")}
              </h2>
              <div className="pointer-events-auto mt-10">
                <div className="flex flex-col bg-white ">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2
                        className="text-lg font-medium text-gray-900"
                        id="slide-over-title"
                      >
                        {t("products")}
                      </h2>
                    </div>
                    <BasketItem lng={lng} hideTitle={true} />
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setOpenConfirmModal(!openConfirmModal)}
              className="w-full bg-[#F0B450] py-2 my-4 "
            >
              {t("checkout")}
            </button>
            <button className="w-full bg-[#080505] text-white py-2">
              {t("continue_shopping")}
            </button>
          </div>
        </div>
      </form>
      <ConfirmModal
        openConfirmModal={openConfirmModal}
        setOpenConfirmModal={setOpenConfirmModal}
        lng={lng}
      />
    </>
  );
}

export default DeliveryForm;
