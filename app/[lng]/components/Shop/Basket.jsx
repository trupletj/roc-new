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
  const { openBasket, setOpenBasket, mediaDomain } = useContext(GlobalContext);
  const { t } = useTranslation();

  const [products, setProdcts] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [openInformation, setOpenInformation] = useState(false);

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
                      <div className="flex items-start justify-between border-b border-gray-700 border-x-0 border-t-0 pb-3">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          {t("shopping_cart")}
                        </Dialog.Title>
                        <div className="flex items-center">
                          <button
                            type="button"
                            className=" p-2 text-gray-400 hover:text-gray-500 bg-black"
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
                                      src={mediaDomain + product.image_path}
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
                          {(!products ||
                            Object.keys(products).length === 0) && (
                            <p className="text-center  text-lg mt-2">
                              {t("empty_cart")}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-black-800 border-b pb-3">
                        <p>{t("subtotal")}</p>
                        <p>
                          {totalPrice?.toLocaleString("en-US", {
                            style: "decimal",
                          })}
                          {"₮"}
                        </p>
                      </div>
                      <div className="flex flex-col justify-between text-base font-base text-black-800 mt-3">
                        <div
                          onClick={() =>
                            setOpenInformation((val) => {
                              return !val;
                            })
                          }
                          className="flex justify-between items-center col-span-6 text-gray-900 cursor-pointer"
                        >
                          <h1>{t("additional_information")}</h1>
                          {openInformation ? (
                            <span>
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
                            </span>
                          ) : (
                            <span>
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
                            </span>
                          )}
                        </div>
                        {openInformation && (
                          <div className="sm:col-span-3">asdasd</div>
                        )}
                      </div>
                      <div className="mt-6">
                        <Link
                          href={`/${lng}/checkout`}
                          className="flex items-center justify-center  border  bg-black  px-6 py-2 text-base font-normal text-white "
                          onClick={() => {
                            setOpenBasket(false);
                          }}
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
