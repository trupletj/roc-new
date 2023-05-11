"use client";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "@/app/i18n/client";
import GlobalContext from "../../context/GlobalContext";
function UserOrderInformation({ lng }) {
  const { user, setUser } = useContext(GlobalContext);
  const [isRegisterOn, setIsRegisterOn] = useState(false);
  const { t } = useTranslation(lng, "client");
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
    },
  });

  const [addresses, setAddresses] = useState([
    ...user.addresses,
    {
      name: "",
      receiver_name: "",
      receiver_phone: "",
      district: "",
      address_information: "",
      lat_lng: "",
    },
  ]);
  const [currentAddress, setCurrentAddress] = useState({
    name: "",
    receiver_name: "",
    receiver_phone: "",
    district: "",
    address_information: "",
    lat_lng: "",
  });
  const {
    register: address_register,
    handleSubmit: handdleAddressSubmit,
    formState: { errors: address_error },
  } = useForm({
    defaultValues: {
      name: currentAddress.name,
      receiver_name: currentAddress.receiver_name,
      receiver_phone: currentAddress.receiver_phone,
      district: currentAddress.district,
      address_information: currentAddress.address_information,
      lat_lng: currentAddress.lat_lng,
    },
  });

  //End form confirm nemev
  const onSubmit = (data) => console.log(data);
  const onSubmitAddress = (data) => console.log(data);
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
        </div>
      </form>
      <form
        className="w-full pt-10"
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
                  <h1 className="text-white text-sm">{t("please_select")}</h1>
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
              {t("first_name")}
            </label>
            <div className="mt-2">
              <input
                placeholder={t("first_name")}
                {...address_register("receiver_name", { required: true })}
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
          {/* <div className="sm:col-span-2">
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
          </div> */}
          <div className="sm:col-span-3">
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
          {/* <div className="sm:col-span-3">
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
          </div> */}
          <div className="sm:col-span-6">
            <label
              htmlFor="first-name"
              className="block text-base font-light leading-6 text-gray-900"
            >
              <span className="text-red-500 mr-2">*</span>
              {t("district")}
            </label>
            <div className="mt-2">
              <select
                defaultValue={"BZD"}
                {...register("deliveryDistrict", { required: true })}
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
      </form>
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
    </>
  );
}
export default UserOrderInformation;
