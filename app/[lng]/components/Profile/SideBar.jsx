"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
import { VscChevronDown } from "react-icons/vsc";

function SideBar({ lng, slug }) {
  const { t } = useTranslation(lng, "client");
  const router = useRouter();
  const pathname = usePathname();
  return (
    <ul className="flex flex-col font-light">
      <li
        className={`${
          pathname === `/${lng}/profile/my-profile` && "text-[#F0B450] "
        }  cursor-pointer text-lg border-b last:border-none py-5`}
        onClick={() => router.push(`/${lng}/profile/my-profile`)}
      >
         Хувийн мэдээлэл
      </li>
      <li
        className={`${
          pathname === `/${lng}/profile/my-addresses` && "text-[#F0B450]"
        } cursor-pointer text-lg border-b last:border-none py-5`}
        onClick={() => router.push(`/${lng}/profile/my-addresses`)}
      >
        Миний хаягууд
      </li>
      <li className={` text-lg border-b last:border-none py-5`}>
        {slug != "order-histories" && (
          <p
            className={`${
              pathname === `/${lng}/profile/order-histories` &&
              "text-[#F0B450] "
            }  cursor-pointer text-lg last:border-none py-5 flex justify-between text-center`}
            onClick={() =>
              router.push(`/${lng}/profile/order-histories?status=created`)
            }
          >
            <span>{t("my_orders")}</span> <VscChevronDown />
          </p>
        )}

        {slug == "order-histories" && (
          <>
            <p
              className={`${
                pathname === `/${lng}/profile/order-histories` &&
                "text-[#F0B450] "
              }  cursor-pointer text-lg last:border-none py-5 flex justify-between text-center`}
            >
              <span>{t("my_orders")}</span> <VscChevronDown />
            </p>
            <ul>
              <li
                className={`cursor-pointer text-lg flex justify-between text-center`}
                onClick={() => router.push(`/${lng}/profile/order-histories`)}
              >
                <span>{t("all")}</span> <span>15</span>
              </li>
              <li
                className={`cursor-pointer text-lg flex justify-between text-center`}
                onClick={() =>
                  router.push(`/${lng}/profile/order-histories?status=created`)
                }
              >
                <span>{t("invoice_created")}</span> <span>3</span>
              </li>
              <li>paid</li>
              <li>approved</li>
              <li>on way</li>
              <li>done</li>
              <li>canceled</li>
            </ul>
          </>
        )}
      </li>
    </ul>
  );
}

export default SideBar;
