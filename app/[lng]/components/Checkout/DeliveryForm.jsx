"use client";
import React, { useContext, useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import ConfirmModal from "../moleculs/ConfirmModal";
import BasketItem from "../Shop/BasketItems";
import UserOrderInformation from "./UserOrderInformation";
import GlobalContext from "../../context/GlobalContext";
import Login from "../moleculs/Items/Login";
import { fetcher } from "@/app/hooks/useItems";
import { useRouter } from "next/navigation";

function DeliveryForm({ lng }) {
  const { t } = useTranslation(lng, "client");
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const [validateForms, setValidateForms] = useState({
    user_error: {},
    address_error: {},
  });

  const router = useRouter();
  const {
    user,
    setUser,
    token,
    setAlerts,
    card,
    setGlobalLoader,
    setAddresses,
  } = useContext(GlobalContext);
  const [isRegisterOn, setIsRegisterOn] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  const onOrderSubmit = async () => {
    if (
      Object.keys(validateForms.user_error).length > 0 ||
      Object.keys(validateForms.address_error).length > 0 ||
      !currentAddress
    ) {
      setAlerts((val) => {
        return [
          ...val,
          {
            title: t("Warning"),
            description: t("please_fill_required_fields"),
          },
        ];
      });
      return false;
    }

    if (!currentAddress) {
      setAlerts((val) => {
        return [
          ...val,
          {
            title: t("Warning"),
            description: t("choose_address"),
          },
        ];
      });
      return false;
    }
    if (isRegisterOn && (!user.company_name || !user.company_register)) {
      setAlerts((val) => {
        return [
          ...val,
          {
            title: t("Warning"),
            description: t(
              "Please add your company information on your profile"
            ),
          },
        ];
      });
      return false;
    }
    const localCard = localStorage.getItem("card");
    let helper = localCard ? JSON.parse(localCard) : {};

    let products = Object.keys(helper).map((key) => {
      return {
        grinders: helper[key].grinders,
        id: helper[key].id,
        quantity: helper[key].quantity,
      };
    });

    if (products.length == 0) {
      setAlerts((val) => {
        return [
          ...val,
          {
            title: t("Warning"),
            description: t("empty_cart"),
          },
        ];
      });
      return false;
    }
    // setGlobalLoader(true);
    // console.log({
    //   address_id: currentAddress.id,
    //   is_company: isRegisterOn,
    //   products,
    //   currentAddress,
    //   currentUser,
    // });
    const response = await fetcher(
      "client/order/create",
      {
        address_id: currentAddress.id,
        is_company: isRegisterOn,
        products,
        currentAddress,
        currentUser,
      },
      token
    );
    if (response.status == 200) {
      const result = await response.json();
      setAlerts((val) => {
        setGlobalLoader(false);
        return [
          ...val,
          {
            title: "Success",
            description: t(
              "Your order submited successfuly, Please check invoice on order detail page"
            ),
          },
        ];
      });

      if (result?.user) {
        setUser(result?.user);
      }
      if (result.user?.addresses) {
        setAddresses(
          result.user?.addresses
            ? [
                ...result.user.addresses,
                {
                  id: 0,
                  name: "",
                  receiver_name: "",
                  receiver_phone: "",
                  district: "",
                  address_information: "",
                  lat_lng: "",
                },
              ]
            : [
                {
                  id: 0,
                  name: "",
                  receiver_name: "",
                  receiver_phone: "",
                  district: "",
                  address_information: "",
                  lat_lng: "",
                },
              ]
        );
      }

      router.push(
        `/${lng}/order/${result?.record?.order?.id}`,
        { query: { id: result?.record?.order?.id } },
        { shallow: true }
      );
      localStorage.setItem("card", "{}");
      // result.record.order
    } else {
      setGlobalLoader(false);
      setAlerts((val) => {
        return [
          ...val,
          {
            title: t("Warning"),
            description: t("some error"),
          },
        ];
      });
    }
  };
  return (
    <>
      <div className="container  items-start space-x-4 py-10 ">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 order-1 lg:order-1 sm:items-end lg:col-span-7">
            {user && (
              <UserOrderInformation
                currentAddress={currentAddress}
                user={user}
                setUser={setCurrentUser}
                setCurrentAddress={setCurrentAddress}
                isRegisterOn={isRegisterOn}
                setIsRegisterOn={setIsRegisterOn}
                validateForms={validateForms}
                setValidateForms={setValidateForms}
              />
            )}
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
          <div className="col-span-12 order-2 lg:oder-2 lg:col-span-5 pb-10">
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
                    <BasketItem lng={lng} hideTitle={true} />
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOrderSubmit}
              className="w-full bg-[#080505] text-white py-2 mt-4"
            >
              {t("make_order")}
            </button>
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

export default DeliveryForm;
