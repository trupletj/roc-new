"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import image from "@/public/assets/coffee1.png";
import { useTranslation } from "@/app/i18n/client";

function NewAnket({ lng }) {
  const { t } = useTranslation(lng, "client");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [selectIndex, setSelectIndex] = useState(1);
  const onSubmit = (data) => {};
  return (
    <div className="max-w-[900px] mx-auto py-10">
      {/* <h1 className="uppercase text-3xl font-medium mb-10">HEAD TO COFFEE</h1> */}
      {/* <div className="grid md:grid-cols-2 gap-4">
        <div
          onClick={() => setSelectIndex(0)}
          className={`col-span-1 py-2 text-center border border-[#080505] cursor-pointer ${
            selectIndex === 0
              ? "bg-[#080505] text-white"
              : "bg-white text-[#080505]"
          }`}
        >
          Ажлын байрны дэлгэрэнгүй
        </div>
        <div
          onClick={() => setSelectIndex(1)}
          className="col-span-1 py-2 text-center border border-[#080505] bg-white cursor-pointer"
        >
          Анкет бөглөх
        </div>
      </div> */}
      {selectIndex === 0 && <div className="">text</div>}
      {selectIndex === 1 && (
        <div className="w-full my-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-start space-x-4 "
          >
            <div className="space-y-12 w-full">
              <div className="w-full">
                <h2 className="text-xl text-gray-900 uppercase ">
                  {t("main_information")}
                </h2>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-white p-10">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      {t("first_name")}
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder=""
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
                        <h1 className="text-white text-sm">{t("required")}</h1>
                      </div>
                    )}
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="lastName "
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      {t("last_name")}
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder=""
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
                        <h1 className="text-white text-sm">{t("required")}</h1>
                      </div>
                    )}
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="registerNumber"
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      {t("register_number")}
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder=""
                        {...register("phone", {
                          required: true,
                          maxLength: 20,
                        })}
                        type="text"
                        name="phone"
                        id="phone"
                        className="block w-full  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm px-3 bg-white"
                      />
                    </div>
                    {errors.registerNumber && (
                      <div className="mt-4 w-full bg-red-500 py-2 px-5">
                        <h1 className="text-white text-sm">{t("phone")}</h1>
                      </div>
                    )}
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="registerNumber"
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      {t("birth_date")}
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder=""
                        type="text"
                        {...register("birthDate", { required: true })}
                        name="birthDate"
                        id="birthDate"
                        className="block w-full  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm px-3 bg-white"
                      />
                    </div>
                    {errors.birthDate && (
                      <div className="mt-4 w-full bg-red-500 py-2 px-5">
                        <h1 className="text-white text-sm">{t("required")}</h1>
                      </div>
                    )}
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      {t("gender")}
                    </label>
                    <div className="grid  grid-cols-3 gap-2 mt-2">
                      <div>
                        <input
                          placeholder=""
                          {...register("sex", { required: true })}
                          value={"Эрэгтэй"}
                          type="radio"
                          name="option"
                          id={1}
                          className="peer hidden"
                        />
                        <label
                          htmlFor={1}
                          className="block cursor-pointer select-none  bg-[#080505] p-2 text-center peer-checked:bg-[#F0B450]  text-white"
                        >
                          {t("male")}
                        </label>
                      </div>
                      <div>
                        <input
                          placeholder=""
                          {...register("sex", { required: true })}
                          type="radio"
                          name="option"
                          id={2}
                          value="female"
                          className="peer hidden"
                        />
                        <label
                          htmlFor={2}
                          className="block cursor-pointer select-none  bg-[#080505] p-2 text-center peer-checked:bg-[#F0B450]  text-white"
                        >
                          {t("female")}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <h2 className="text-xl text-gray-900 uppercase ">
                  {t("contact_information")}
                </h2>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-white p-10">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      {t("phone")}
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder=""
                        type="text"
                        {...register("phonteNumber", {
                          required: true,
                          maxLength: 20,
                        })}
                        name="phonteNumber"
                        id="phonteNumber"
                        className="block w-full  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white px-3"
                      />
                    </div>
                    {errors.phonteNumber && (
                      <div className="mt-4 w-full bg-red-500 py-2 px-5">
                        <h1 className="text-white text-sm">{t("required")}</h1>
                      </div>
                    )}
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="lastName "
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      {t("email")}
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder=""
                        type="email"
                        {...register("email", {
                          required: true,
                          maxLength: 20,
                        })}
                        name="email"
                        id="email"
                        className="block w-full  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm px-3 bg-white"
                      />
                    </div>
                    {errors.email && (
                      <div className="mt-4 w-full bg-red-500 py-2 px-5">
                        <h1 className="text-white text-sm">{t("required")}</h1>
                      </div>
                    )}
                  </div>
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      {t("living_address")}
                    </label>
                    <div className="mt-2">
                      <textarea
                        {...register("deliveryAddressFull")}
                        rows={4}
                        type="text"
                        name="first-name"
                        id="first-name"
                        placeholder="Та хаягаа зөв дэлгэрэнгүй, тодорхой оруулна уу"
                        className="block w-full  border border-[#707070] px-2  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <h2 className="text-xl text-gray-900 uppercase ">
                  {t("position_information")}
                </h2>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-white p-10">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      {t("position_name")}
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder=""
                        type="text"
                        {...register("jobPosition", {
                          required: true,
                          maxLength: 20,
                        })}
                        name="jobPosition"
                        id="jobPosition"
                        className="block w-full  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm px-3 bg-white"
                      />

                      {/* <select
                        {...register("jobPosition", { required: true })}
                        type="select"
                        className="block w-full  border border-[#707070] px-2  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white"
                      >
                        <option disabled selected hidden>
                          сонгоно уу
                        </option>
                        <option value={1}>Бүрэн дунд</option>
                        <option value={2}>Дээд</option>
                        <option value={3}>Бакалавр</option>
                        <option value={4}>Магистр</option>
                        <option value={5}>Доктор</option>
                      </select> */}
                      {errors.deliveryDistrict && (
                        <div className="mt-4 w-full bg-red-500 py-2 px-5">
                          <h1 className="text-white text-sm">
                            {t("required")}
                          </h1>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="wanted_salary "
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      {t("wanted_salary")}
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder="000,000,000₮"
                        type="number"
                        {...register("wanted_salary", {
                          required: true,
                          maxLength: 20,
                        })}
                        name="wanted_salary"
                        id="wanted_salary"
                        className="block w-full  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm px-3 bg-white"
                      />
                    </div>
                    {errors.email && (
                      <div className="mt-4 w-full bg-red-500 py-2 px-5">
                        <h1 className="text-white text-sm">{t("required")}</h1>
                      </div>
                    )}
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      {t("work_type")}
                    </label>
                    <div className="mt-2">
                      <select
                        {...register("deliveryDistrict", { required: true })}
                        type="select"
                        className="block w-full  border border-[#707070] px-2  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white"
                      >
                        <option disabled selected hidden>
                          {t("required")}
                        </option>
                        <option value={1}>
                          {lng == "mn" ? "Бүтэн цаг" : "Full time"}
                        </option>
                        <option value={2}>
                          {lng == "mn" ? "Хагас цаг" : "Part time"}
                        </option>
                      </select>
                      {errors.deliveryDistrict && (
                        <div className="mt-4 w-full bg-red-500 py-2 px-5">
                          <h1 className="text-white text-sm">
                            {t("required")}
                          </h1>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <h2 className="text-xl text-gray-900 uppercase ">
                  {t("degree_information")}
                </h2>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-white p-10">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      {t("degree_information")}
                    </label>
                    <div className="mt-2">
                      <select
                        {...register("jobPosition", { required: true })}
                        type="select"
                        className="block w-full  border border-[#707070] px-2  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white"
                      >
                        <option disabled selected hidden>
                          сонгоно уу
                        </option>
                        <option value={1}>Бүрэн дунд</option>
                        <option value={2}>Дээд</option>
                        <option value={3}>Бакалавр</option>
                        <option value={4}>Магистр</option>
                        <option value={5}>Доктор</option>
                      </select>
                      {errors.deliveryDistrict && (
                        <div className="mt-4 w-full bg-red-500 py-2 px-5">
                          <h1 className="text-white text-sm">
                            {t("required")}
                          </h1>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="lastName "
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      {t("major")}
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("major", {
                          required: true,
                          maxLength: 20,
                        })}
                        name="major"
                        id="major"
                        className="block w-full  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm px-3 bg-white"
                      />
                    </div>
                    {errors.email && (
                      <div className="mt-4 w-full bg-red-500 py-2 px-5">
                        <h1 className="text-white text-sm">{t("major")}</h1>
                      </div>
                    )}
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="school_name"
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      {t("school_name")}
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("school_name", {
                          required: true,
                          maxLength: 20,
                        })}
                        name="school_name"
                        id="school_name"
                        className="block w-full  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm px-3 bg-white"
                      />
                    </div>
                    {errors.email && (
                      <div className="mt-4 w-full bg-red-500 py-2 px-5">
                        <h1 className="text-white text-sm">{t("required")}</h1>
                      </div>
                    )}
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="lastName "
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      {t("country")}
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("country", {
                          required: true,
                          maxLength: 20,
                        })}
                        name="country"
                        id="country"
                        className="block w-full  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm px-3 bg-white"
                      />
                    </div>
                    {errors.email && (
                      <div className="mt-4 w-full bg-red-500 py-2 px-5">
                        <h1 className="text-white text-sm">{t("country")}</h1>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* <div className="w-full">
                <h2 className="text-xl text-gray-900 uppercase ">
                  CV, Resume хавсаргах
                </h2>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-white p-10">
                  <h1 className="text-[#6B6969] col-span-6">
                    PDF, Doc, Docx өргөтгөлтэй файлууд боломжтой
                  </h1>
                  <div className="col-span-6 flex">
                    <button className="flex w-1/12 aspect-square items-center justify-center border border-[#080505]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                      >
                        <g
                          id="Group_760"
                          data-name="Group 760"
                          transform="translate(-318.5 -2087.5)"
                        >
                          <line
                            id="Line_16"
                            data-name="Line 16"
                            y2={20}
                            transform="translate(328.5 2087.5)"
                            fill="none"
                            stroke="#080505"
                            strokeWidth="1.5"
                          />
                          <line
                            id="Line_17"
                            data-name="Line 17"
                            x1={20}
                            transform="translate(318.5 2097.5)"
                            fill="none"
                            stroke="#080505"
                            strokeWidth="1.5"
                          />
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div> */}
              <div className="w-full">
                <h2 className="text-xl text-gray-900 uppercase ">
                  {t("additional_information")}
                </h2>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-white p-10">
                  <div className="full col-span-6">
                    <textarea rows={10} type="text" className="w-full" />
                  </div>
                </div>
              </div>
              {/* <div className="grid grid-cols-2 gap-4">
                <div
                  onClick={() => setSelectIndex(1)}
                  className="col-span-1 py-2 text-center border border-[#080505] bg-white cursor-pointer"
                >
                  {}
                </div>
                <div
                  onClick={() => setSelectIndex(0)}
                  className="col-span-1 py-2 text-center bg-[#080505] text-white border border-[#080505] cursor-pointer"
                >
                  Анкет илгээх
                </div>
              </div> */}
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default NewAnket;
