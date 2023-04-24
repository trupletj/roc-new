"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import image from "@/public/assets/coffee1.png";

function NewAnket() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [selectIndex, setSelectIndex] = useState(1);
  const onSubmit = (data) => console.log(data);
  return (
    <div className="max-w-[900px] mx-auto">
      <h1 className="uppercase text-2xl font-medium">HEAD TO COFFEE</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 py-2 text-center bg-[#080505] text-white border border-[#080505]">
          Ажлын байрны дэлгэрэнгүй
        </div>
        <div className="col-span-1 py-2 text-center border border-[#080505] bg-white">
          Ажлын байрны дэлгэрэнгүй
        </div>
      </div>
      {selectIndex === 0 && <div className="">text</div>}
      {selectIndex === 1 && (
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-start space-x-4 "
          >
            <div className="space-y-12 w-full">
              <div className="w-full">
                <h2 className="text-xl text-gray-900 uppercase ">
                  Захиалагчын мэдээлэл
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-white p-10">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      <span className="text-red-500 mr-2">*</span>
                      Нэр
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder="text"
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
                        <h1 className="text-white text-sm">Нэр оруулна уу</h1>
                      </div>
                    )}
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="lastName "
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      <span className="text-red-500 mr-2">*</span>
                      Овог
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder="text"
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
                        <h1 className="text-white text-sm">
                          Овог оо оруулна уу
                        </h1>
                      </div>
                    )}
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      <span className="text-red-500 mr-2">*</span>
                      Утасны дугаар
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder="text"
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
                    {errors.phone && (
                      <div className="mt-4 w-full bg-red-500 py-2 px-5">
                        <h1 className="text-white text-sm">
                          Утансны дугаараа оруулна уу
                        </h1>
                      </div>
                    )}
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      <span className="text-red-500 mr-2">*</span>
                      Имэйл хаяг
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder="text"
                        type="text"
                        {...register("email", { required: true })}
                        name="email"
                        id="email"
                        className="block w-full  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm px-3 bg-white"
                      />
                    </div>
                    {errors.email && (
                      <div className="mt-4 w-full bg-red-500 py-2 px-5">
                        <h1 className="text-white text-sm">
                          Утансны дугаараа оруулна уу
                        </h1>
                      </div>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="first-name"
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      <span className="text-red-500 mr-2">*</span>
                      Нэр
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder="text"
                        {...register("deliveryFirstName", { required: true })}
                        type="text"
                        name="deliveryFirstName"
                        id="deliveryFirstName"
                        className="block w-full px-3  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white"
                      />
                    </div>
                    {errors.deliveryFirstName && (
                      <div className="mt-4 w-full bg-red-500 py-2 px-5">
                        <h1 className="text-white text-sm">Заавал бөглөх</h1>
                      </div>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="first-name"
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      <span className="text-red-500 mr-2">*</span>
                      Овог
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder="text"
                        {...register("deliveryLasttName", { required: true })}
                        type="text"
                        name="deliveryLasttName"
                        id="deliveryLasttName"
                        className="block w-full px-3  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white"
                      />
                    </div>
                    {errors.deliveryLasttName && (
                      <div className="mt-4 w-full bg-red-500 py-2 px-5">
                        <h1 className="text-white text-sm">Заавал бөглөх</h1>
                      </div>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="first-name"
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      <span className="text-red-500 mr-2">*</span>
                      Утасны дугаар
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder="text"
                        {...register("deliveryPhone", { required: true })}
                        type="text"
                        name="deliveryPhone"
                        id="deliveryPhone"
                        className="block w-full  px-3 border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white"
                      />
                    </div>
                    {errors.deliveryPhone && (
                      <div className="mt-4 w-full bg-red-500 py-2 px-5">
                        <h1 className="text-white text-sm">Заавал бөглөх</h1>
                      </div>
                    )}
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-base font-light leading-6 text-gray-900"
                    >
                      <span className="text-red-500 mr-2">*</span>
                      Хот
                    </label>
                    <div className="mt-2">
                      <select
                        {...register("deliveryCity", { required: true })}
                        type="select"
                        className="block w-full  border border-[#707070] px-2  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white"
                      >
                        <option disabled selected hidden>
                          Хот/аймаг сонгоно уу
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
                      Дүүрэг
                    </label>
                    <div className="mt-2">
                      <select
                        {...register("deliveryDistrict", { required: true })}
                        type="select"
                        className="block w-full  border border-[#707070] px-2  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm bg-white"
                      >
                        <option disabled selected hidden>
                          сонгоно уу
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
                      Дэлгэрэнгүй хаяг
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
                <h2 className="text-2xl  text-gray-900 uppercase font-normal">
                  Нэмэлт анхааруулга
                </h2>
                <div className="sm:col-span-6 mt-5">
                  <div className="grid  grid-cols-2 gap-2 " x-data="app">
                    <div>
                      <input
                        placeholder="text"
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
                        Хүргэлтийн өмнө залгах
                      </label>
                    </div>
                    <div>
                      <input
                        placeholder="text"
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
                        Оройн цагаар хүргэх
                      </label>
                    </div>
                    <div>
                      <input
                        placeholder="text"
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
          </form>
        </div>
      )}
    </div>
  );
}

export default NewAnket;
