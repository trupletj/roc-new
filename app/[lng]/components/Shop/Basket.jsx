"use client";
import {
  Fragment,
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";
import { Dialog, Transition } from "@headlessui/react";

import { VscChevronDown, VscChevronUp, VscChromeClose } from "react-icons/vsc";
import GlobalContext from "@/app/[lng]/context/GlobalContext";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";

function Basket({ lng }) {
  const { openBasket, setOpenBasket, apiDomain } = useContext(GlobalContext);
  const { t } = useTranslation();

  const [products, setProdcts] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const setSubTotal = (current_products) => {
    let _price = 0;
    Object.keys(current_products).map((key) => {
      _price += current_products[key].quantity * current_products[key].price;
    });
    return _price || 0;
  };
  useEffect(() => {
    const localCard = localStorage.getItem("card");
    let helper = localCard ? JSON.parse(localCard) : {};

    setProdcts((val) => {
      return helper;
    });
    setTotalPrice((val) => {
      return setSubTotal(products);
    });
  }, [openBasket]);

  return (
    <Transition.Root show={openBasket} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenBasket}>
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
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          {t("shopping_cart")}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500 bg-black"
                            onClick={() => setOpenBasket(false)}
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
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {Object.keys(products).map((key) => {
                              const product = products[key];
                              return (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={apiDomain + product.image_path}
                                      alt={product.name}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-black-800">
                                        <h3>
                                          <Link
                                            href={`/${lng}/shop/product/${product.type_id}`}
                                          >
                                            {product.name}
                                          </Link>
                                        </h3>
                                        <p className="ml-4">
                                          <VscChromeClose
                                            className="h-5 w-5 cursor-pointer"
                                            aria-hidden="true"
                                            onClick={() => {
                                              if (confirm(t("delete_item"))) {
                                                setProdcts((val) => {
                                                  const localCard =
                                                    localStorage.getItem(
                                                      "card"
                                                    );
                                                  let helper = localCard
                                                    ? JSON.parse(localCard)
                                                    : val;
                                                  delete helper[product.id];
                                                  localStorage.setItem(
                                                    "card",
                                                    JSON.stringify(helper)
                                                  );
                                                  setTotalPrice((val) => {
                                                    return setSubTotal(helper);
                                                  });
                                                  return helper;
                                                });
                                              }
                                            }}
                                          />
                                        </p>
                                      </div>
                                      {/* <p className="mt-1 text-sm text-gray-500">
                                        {product.color}
                                      </p> */}
                                    </div>
                                    <p className="text-black-600">үрээрээ</p>
                                    <div className="flex   justify-between text-base font-light text-black-700">
                                      <p className="text-lg">
                                        {product.price?.toLocaleString(
                                          "en-US",
                                          {
                                            style: "decimal",
                                          }
                                        )}
                                        {"₮"}
                                      </p>
                                      <div className="font-thin text-lg text-white bg-black flex content-center items-center py-1">
                                        <span
                                          className="border border-r-white border-y-0 border-l-0 px-1 cursor-pointer"
                                          onClick={() => {
                                            setProdcts((val) => {
                                              const localCard =
                                                localStorage.getItem("card");
                                              let helper = localCard
                                                ? JSON.parse(localCard)
                                                : val;
                                              if (!helper[product.id])
                                                helper[product.id] = {
                                                  ...product,
                                                  ["quantity"]: 1,
                                                };
                                              else {
                                                helper[
                                                  product.id
                                                ].quantity -= 1;
                                              }
                                              if (
                                                helper[product.id].quantity < 1
                                              ) {
                                                helper[product.id].quantity = 1;
                                              }
                                              localStorage.setItem(
                                                "card",
                                                JSON.stringify(helper)
                                              );

                                              setTotalPrice((val) => {
                                                return setSubTotal(helper);
                                              });
                                              return helper;
                                            });
                                          }}
                                        >
                                          <VscChevronDown
                                            className="h-5 w-5  text-white"
                                            aria-hidden="true"
                                          />
                                        </span>
                                        <span className=" px-2 min-w-[35px] text-center">
                                          {product.quantity}
                                        </span>
                                        <span
                                          className="border border-l-white border-y-0 border-r-0 px-1 cursor-pointer"
                                          onClick={() => {
                                            setProdcts((val) => {
                                              const localCard =
                                                localStorage.getItem("card");
                                              let helper = localCard
                                                ? JSON.parse(localCard)
                                                : val;
                                              if (!helper[product.id])
                                                helper[product.id] = {
                                                  ...product,
                                                  ["quantity"]: 1,
                                                };
                                              else {
                                                helper[
                                                  product.id
                                                ].quantity += 1;
                                              }
                                              localStorage.setItem(
                                                "card",
                                                JSON.stringify(helper)
                                              );
                                              setTotalPrice((val) => {
                                                return setSubTotal(helper);
                                              });
                                              return helper;
                                            });
                                          }}
                                        >
                                          <VscChevronUp
                                            className="h-5 w-5 text-white"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-black-800">
                        <p>{t("subtotal")}</p>
                        <p>
                          {totalPrice?.toLocaleString("en-US", {
                            style: "decimal",
                          })}
                          {"₮"}
                        </p>
                      </div>
                      <div className="mt-6">
                        <Link
                          href={`/${lng}/shop/checkout`}
                          className="flex items-center justify-center  border  bg-black  px-6 py-2 text-base font-normal text-white "
                        >
                          {t("checkout")}
                        </Link>
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
  );
}

export default Basket;
