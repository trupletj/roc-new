"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

function SideBar({ lng, slug }) {
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
      <li
        className={`${
          pathname === `/${lng}/profile/order-histories` && "text-[#F0B450] "
        }  cursor-pointer text-lg border-b last:border-none py-5`}
        onClick={() => router.push(`/${lng}/profile/order-histories`)}
      >
        Захиалгууд
      </li>
    </ul>
  );
}

export default SideBar;
