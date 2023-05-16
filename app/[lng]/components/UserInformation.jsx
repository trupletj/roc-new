"use client";
import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "@/app/i18n/client";
import GlobalContext from "@/app/[lng]/context/GlobalContext";
import { useRouter } from "next/navigation";

function UserInformation({ lng }) {
  const [openIndex, setOpenIndex] = useState(-1);
  const { t } = useTranslation(lng, "client");
  const { user } = useContext(GlobalContext);
  const router = useRouter();
  return (
    <ul className="font-light">
      <li className="border-b border-b-gray-900 last:border-none">
        <div>
          <div
            onClick={() => {
              setOpenIndex((val) => {
                return val != 0 ? 0 : -1;
              });
            }}
            className="flex justify-between text-lg py-5 items-center cursor-pointer"
          >
            <h1>Миний хаягууд</h1>
            <div>
              {openIndex !== 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.061"
                  height="9.591"
                  viewBox="0 0 17.061 9.591"
                >
                  <path
                    id="Path_144"
                    data-name="Path 144"
                    d="M4598-68l8,8,4.333-4.333L4614-68"
                    transform="translate(-4597.47 68.53)"
                    fill="none"
                    stroke="#080505"
                    strokeWidth="1.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.061"
                  height="9.591"
                  viewBox="0 0 17.061 9.591"
                >
                  <path
                    id="Path_143"
                    data-name="Path 143"
                    d="M4598-68l8,8,4.333-4.333L4614-68"
                    transform="translate(4614.531 -58.939) rotate(180)"
                    fill="none"
                    stroke="#080505"
                    strokeWidth="1.5"
                  />
                </svg>
              )}
            </div>
          </div>
          <div className={openIndex === 0 ? "block" : "hidden"}>
            <div className="w-full  mb-10">
              <div className="flex flex-col">
                {user?.addresses?.length > 0 ? (
                  <ul className="mb-5">
                    {user?.addresses?.map((address, index) => (
                      <li
                        className="py-3 border-b last:border-none cursor-pointer"
                        key={`address-${index}`}
                        onClick={() =>
                          router.push(
                            `/${lng}/profile/my-addresses?id=${address.id}`
                          )
                        }
                      >
                        <span>{address.name}</span>,{" "}
                        <span>{address.receiver_name}</span>,
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs mb-5">{t("empty_address_text")}</p>
                )}
                <a
                  href={`/${lng}/profile/my-addresses?id=0`}
                  className="flex items-center justify-center  border  bg-black  px-6 py-2 text-base font-light text-white"
                >
                  {t("new")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="border-b border-b-gray-900 last:border-none">
        <div>
          <div
            onClick={() => {
              setOpenIndex((val) => {
                return val != 1 ? 1 : -1;
              });
            }}
            className="flex justify-between text-lg py-5 items-center  cursor-pointer"
          >
            <h1>Захиалгууд</h1>
            <div>
              {openIndex !== 1 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.061"
                  height="9.591"
                  viewBox="0 0 17.061 9.591"
                >
                  <path
                    id="Path_144"
                    data-name="Path 144"
                    d="M4598-68l8,8,4.333-4.333L4614-68"
                    transform="translate(-4597.47 68.53)"
                    fill="none"
                    stroke="#080505"
                    strokeWidth="1.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.061"
                  height="9.591"
                  viewBox="0 0 17.061 9.591"
                >
                  <path
                    id="Path_143"
                    data-name="Path 143"
                    d="M4598-68l8,8,4.333-4.333L4614-68"
                    transform="translate(4614.531 -58.939) rotate(180)"
                    fill="none"
                    stroke="#080505"
                    strokeWidth="1.5"
                  />
                </svg>
              )}
            </div>
          </div>
          <div className={openIndex === 1 ? "block" : "hidden"}>
            <div className="w-full  mb-10">
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row items-center md:space-x-16 space-y-5">
                  klfahjdlkfj
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default UserInformation;
