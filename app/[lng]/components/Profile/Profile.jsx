"use client";
import React, { useContext, useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import ConfirmModal from "../moleculs/ConfirmModal";
import BasketItem from "../Shop/BasketItems";
import GlobalContext from "../../context/GlobalContext";
import Login from "../moleculs/Items/Login";
import ProfileInformation from "./ProfileInformation";
import Address from "./Address";
import SideBar from "./SideBar";
import OrderHistory from "./OrderHistory";
function Profile({ lng, slug }) {
  const { t } = useTranslation(lng, "client");
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const slug_helper = {
    "my-profile": true,
    "my-addresses": true,
    "order-histories": true,
  };

  const current_page = slug_helper[slug] != undefined ? slug : "my-addresses";
  const { user, setUser, token } = useContext(GlobalContext);
  return (
    <>
      <div className="col-span-12 order-2 lg:order-1 sm:items-end lg:col-span-8">
        {user && current_page === "my-profile" && <ProfileInformation />}
        {user && current_page === "my-addresses" && <Address />}
        {user && current_page === "order-histories" && <OrderHistory lng={lng} />}

        {!user && !token && (
          <>
            <h2 className="text-2xl text-gray-900 uppercase font-normal">
              {"\u00A0"}
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8  bg-white p-10">
              <Login isDialog={false} />
            </div>
          </>
        )}
      </div>
      <div className="col-span-12 order-1 lg:oder-2 lg:col-span-4 pb-10">
        <div className="max-w-full pt-10 md:pt-0">
          <h2 className="text-2xl text-gray-900 uppercase font-normal opacity-1">
            {/* {t("basket_information")} */}
            <br />
          </h2>
          <div className="pointer-events-auto mt-10">
            <div className="flex flex-col bg-white ">
              <div className="flex-1 overflow-y-auto  p-6 ">
                <SideBar lng={lng} slug={slug} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmModal
        openConfirmModal={openConfirmModal}
        setOpenConfirmModal={setOpenConfirmModal}
        lng={lng}
      />
    </>
  );
}

export default Profile;
