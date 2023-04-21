"use client";
import React, { useState } from "react";
import Image from "next/image";
import image from "@/public/assets/coffee1.png";

import { useForm } from "react-hook-form";
function DeliveryForm() {
  const [isRegisterOn, setIsRegisterOn] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container flex items-start space-x-4 py-10"
    >
      <div className="space-y-12 w-7/12">
        <div className="w-full">
          <h2 className="text-2xl text-gray-900 uppercase font-normal">
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
                  {...register("firstName", { required: true, maxLength: 20 })}
                  name="first-name"
                  id="first-name"
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
                htmlFor="first-name"
                className="block text-base font-light leading-6 text-gray-900"
              >
                <span className="text-red-500 mr-2">*</span>
                Овог
              </label>
              <div className="mt-2">
                <input
                  placeholder="text"
                  type="text"
                  {...register("lastName", { required: true, maxLength: 20 })}
                  name="last-name"
                  id="last-name"
                  className="block w-full  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm px-3 bg-white"
                />
              </div>
              {errors.lastName && (
                <div className="mt-4 w-full bg-red-500 py-2 px-5">
                  <h1 className="text-white text-sm">Овог оо оруулна уу</h1>
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
                  {...register("phone", { required: true, maxLength: 20 })}
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
            <div className="col-span-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-gray-200 p-5">
              <div
                onClick={() => setIsRegisterOn(!isRegisterOn)}
                className="flex justify-between items-center col-span-6 text-gray-900 cursor-pointer"
              >
                <h1>И-Баримт албан байгууллагаар авах</h1>
                {isRegisterOn ? (
                  <span>
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
                  </span>
                ) : (
                  <span>
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
                  </span>
                )}
              </div>
              {isRegisterOn && (
                <div className="sm:col-span-3">
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
                      {...register("organizaionRegister", { required: true })}
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="block w-full  border border-[#707070]  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm px-3 bg-white"
                    />
                  </div>
                  {errors.organizaionRegister && (
                    <div className="mt-4 w-full bg-red-500 py-2 px-5">
                      <h1 className="text-white text-sm">Заавал бөглөх</h1>
                    </div>
                  )}
                </div>
              )}
              {isRegisterOn && (
                <div className="sm:col-span-3">
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
                      <h1 className="text-white text-sm">Заавал бөглөх</h1>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-2xl  text-gray-900 uppercase font-normal">
            Хүргэлтийн хаяг
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 bg-white p-10">
            <div className="sm:col-span-6">
              <label
                htmlFor="first-name"
                className="block text-base font-light leading-6 text-gray-900"
              >
                <span className="text-red-500 mr-2">*</span>
                Хаягын нэр сонгох
              </label>
              <div className="grid  grid-cols-3 gap-2 mt-2">
                <div>
                  <input
                    placeholder="text"
                    {...register("addressType", { required: true })}
                    value={"Ажил"}
                    type="radio"
                    name="option"
                    id={1}
                    className="peer hidden"
                  />
                  <label
                    htmlFor={1}
                    className="block cursor-pointer select-none  bg-[#080505] p-2 text-center peer-checked:bg-[#F0B450]  peer-checked:text-white"
                  >
                    Ажил
                  </label>
                </div>
                <div>
                  <input
                    placeholder="text"
                    {...register("addressType", { required: true })}
                    type="radio"
                    name="option"
                    id={2}
                    className="peer hidden"
                  />
                  <label
                    htmlFor={2}
                    className="block cursor-pointer select-none  bg-[#080505] p-2 text-center peer-checked:bg-[#F0B450]  peer-checked:text-white"
                  >
                    Гэр
                  </label>
                </div>
                <div>
                  <input
                    placeholder="text"
                    {...register("addressType", { required: true })}
                    type="radio"
                    name="option"
                    id={3}
                    className="peer hidden"
                  />
                  <label
                    htmlFor={3}
                    className="block cursor-pointer select-none  bg-[#080505] p-2 text-center peer-checked:bg-[#F0B450]  peer-checked:text-white"
                  >
                    Салбараас авах
                  </label>
                </div>
                {errors.addressType && (
                  <div className="mt-4 w-full bg-red-500 py-2 px-5">
                    <h1 className="text-white text-sm">Заавал сонгох</h1>
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
            <div className="sm:col-span-6">
              <label
                htmlFor="first-name"
                className="block text-base  leading-6 text-gray-900 font-normal"
              >
                Газрын зураг
              </label>
              <div className="mt-2">
                <div className="block w-full bg-gray-500  border border-[#707070] px-2  aspect-square py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm " />
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

      <div className="  w-5/12">
        <div className="max-w-full ">
          <h2 className="text-2xl text-gray-900 uppercase font-normal">
            Төлбөрийн мэдээлэл
          </h2>
          <div className="pointer-events-auto mt-10">
            <div className="flex flex-col bg-white ">
              <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2
                    className="text-lg font-medium text-gray-900"
                    id="slide-over-title"
                  >
                    Бүтээгдэхүүн
                  </h2>
                </div>
                <div className="mt-8">
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      <li className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden ">
                          <Image
                            src={image}
                            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                            style={{
                              height: "100%",
                              width: "100%",
                              objectFit: "cover",
                              objectPosition: "center",
                            }}
                          />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3 className="">
                                <a href="#">Brazil Mogiana</a>
                              </h3>
                              <p className="ml-4">32,000₮</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">250г</p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-base">
                            <p className="text-gray-500">x2</p>
                          </div>
                        </div>
                      </li>
                      <li className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden ">
                          <Image
                            src={image}
                            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                            style={{
                              height: "100%",
                              width: "100%",
                              objectFit: "cover",
                              objectPosition: "center",
                            }}
                          />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3 className="">
                                <a href="#">Brazil Mogiana</a>
                              </h3>
                              <p className="ml-4">32,000₮</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">250г</p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-base">
                            <p className="text-gray-500">x1</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-between text-base font-medium text-gray-900 mt-10">
                  <p>Нийт төлөх дүн:</p>
                  <p>96,000 ₮</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="w-full bg-[#F0B450] py-2 my-4">
          Төлбөр төлөх
        </button>
        <button className="w-full bg-[#080505] py-2">Сагс-руу буцах</button>
      </div>
    </form>
  );
}

export default DeliveryForm;
