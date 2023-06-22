"use client";
import { useTranslation } from "@/app/i18n/client.js";
import React from "react";

function ClientRegister({ lng }) {
  const { t } = useTranslation(lng, "header");
  const handleRegister = () => {
  };
  return (
    <div className="w-full bg-[#ECEBE7] text-[#080505]">
      <div className="container mx-auto flex flex-col lg:flex-row py-10 px-5">
        <div className="lg:w-1/2 flex flex-col">
          <div className="text-[32px] mb-[20px]">{t("keep_it_touch")}</div>
          <div className="lg:mr-[50px]">{t("keep_it_touch_more")}</div>
        </div>
        <div className="lg:w-1/2 flex justify-end items-center mt-5 lg:mt-0">
          <form className="w-full max-w-[560px]">
            <div className="flex flex-row bg-white items-center  w-full border border-black justify-between">
              <input
                className="text-black bg-white border-none px-[20px] outline-0"
                type="text"
                placeholder="И-мэйл хаяг"
              />
              <button
                className="bg-black text-white py-3 px-5"
                onClick={() => handleRegister()}
              >
                {t("sign_up")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ClientRegister;
