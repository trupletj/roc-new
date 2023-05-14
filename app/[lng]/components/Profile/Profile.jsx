"use client";
import React, { useContext, useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import ConfirmModal from "../moleculs/ConfirmModal";
import BasketItem from "../Shop/BasketItems";
import GlobalContext from "../../context/GlobalContext";
import Login from "../moleculs/Items/Login";
import ProfileInformation from "./ProfileInformation";
function Profile({ lng }) {
  const { t } = useTranslation(lng, "client");
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const { user, setUser, token } = useContext(GlobalContext);
  return (
    <>
      <div className="container  items-start space-x-4 py-10 ">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 order-2 lg:order-1 sm:items-end lg:col-span-8">
            {user && <ProfileInformation />}

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
              <h2 className="text-2xl text-gray-900 uppercase font-normal ">
                {t("basket_information")}
              </h2>
              <div className="pointer-events-auto mt-10">
                <div className="flex flex-col bg-white ">
                  <div className="flex-1 overflow-y-auto  py-6 ">
                    <div className="flex items-start justify-between">
                      <h2
                        className="text-lg font-medium text-gray-900 px-3 sm:px-6"
                        id="slide-over-title"
                      >
                        {t("products")}
                      </h2>
                    </div>
                  </div>
                </div>
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
