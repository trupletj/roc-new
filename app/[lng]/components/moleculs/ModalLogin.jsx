"use client";
import { Fragment, useRef, useState, useContext, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import GlobalContext from "../../context/GlobalContext";
import Login from "./Items/Login";
import { VscChromeClose } from "react-icons/vsc";
import { useTranslation } from "@/app/i18n/client";
// import { cookies } from "next/dist/client/components/headers";
import Cookies from "js-cookie";
import UserInformation from "../UserInformation";
import { useRouter } from "next/navigation";

const ModalLogin = ({ lng }) => {
  const { openLogin, setOpenLogin, user, setUser, token, setToken } =
    useContext(GlobalContext);
  const { t } = useTranslation();
  const cancelButtonRef = useRef(null);
  const router = useRouter();
  return (
    <>
      {!user && !token && (
        <Transition.Root show={openLogin} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50"
            initialFocus={cancelButtonRef}
            onClose={setOpenLogin}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-[#080505] bg-opacity-50 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden bg-white text-left  transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full">
                      <div className="sm:flex sm:items-start">
                        <Login lng={lng} isDialog={true} />
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
      {user && (
        <Transition.Root show={openLogin} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpenLogin}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-300 sm:duration-300"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-300 sm:duration-300"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                          <div className="flex items-start justify-between border-b border-gray-700 border-x-0 border-t-0 pb-3">
                            <Dialog.Title className="text-lg font-medium text-gray-900">
                              {user.phone || user.email}
                            </Dialog.Title>
                            <div className="flex items-center">
                              <button
                                type="button"
                                className=" p-2 text-gray-400 hover:text-gray-500 bg-black"
                                onClick={() => setOpenLogin(false)}
                              >
                                <VscChromeClose
                                  className="h-5 w-5 text-white"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                          <div className="mt-8">
                            <div className="flow-root">
                              <a
                                href={`/${lng}/profile/my-profile`}
                                className="flex items-center justify-center  border  bg-[#E5E5E5]  px-6 py-2 text-base font-light "
                              >
                                {t("register_info")}
                              </a>
                              <UserInformation lng={lng} />
                            </div>
                          </div>
                        </div>
                        <div className=" px-4 py-6 sm:px-6">
                          {/* <div className="flex justify-between text-base font-medium text-black-800 border-b pb-3">
                            <p>{t("subtotal")}</p>
                            <p>{"₮"}</p>
                          </div> */}

                          <div className="mt-6">
                            <a
                              href={`#`}
                              className="flex items-center justify-center  border  bg-black  px-6 py-2 text-base font-normal text-white "
                              onClick={() => {
                                Cookies.remove("token");
                                setUser(false);
                                setOpenLogin(false);
                                setToken("");
                              }}
                            >
                              {t("logout")}
                            </a>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </>
  );
};

export default ModalLogin;
