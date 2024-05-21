"use client";
import { useState, useContext, useEffect } from "react";
import { Dialog } from "@headlessui/react";

import { VscChevronDown, VscChevronUp, VscChromeClose } from "react-icons/vsc";
import GlobalContext from "@/app/[lng]/context/GlobalContext";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";

function BasketItem({ lng, hideTitle }) {
  const { openBasket, setOpenBasket, mediaDomain } = useContext(GlobalContext);
  const { t } = useTranslation();

  const isShowTitle = !hideTitle ? true : false;
  const [products, setProdcts] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [openInformation, setOpenInformation] = useState(true);

  const setSubTotal = (current_products) => {
    let _price = 0;
    Object.keys(current_products).map((key) => {
      if (current_products[key].grinders) {
        let currentQuantity = 0;
        Object.keys(current_products[key].grinders).map((g_key) => {
          currentQuantity += current_products[key].grinders[g_key].quantity;
        });
        current_products[key].quantity = currentQuantity;
      }
      _price += current_products[key].quantity * current_products[key].price;
    });
    return _price || 0;
  };

  const ProductItem = ({ product, grinder }) => {
    const { t } = useTranslation(lng, "header");
    return (
      <>
        <li key={"basket-product-item-" + product.id} className="flex py-6">
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
                  <Link href={`/${lng}/shop/product/${product.type_id}`}>
                    {product.name}
                  </Link>
                </h3>
                <div className="ml-4">
                  <VscChromeClose
                    className="h-5 w-5 cursor-pointer"
                    aria-hidden="true"
                    onClick={() => {
                      if (confirm(t("delete_item"))) {
                        setProdcts((val) => {
                          const localCard = localStorage.getItem("card");
                          let helper = localCard ? JSON.parse(localCard) : val;

                          if (!grinder) {
                            delete helper[product.id];
                            localStorage.setItem(
                              "card",
                              JSON.stringify(helper)
                            );
                          } else {
                            helper[product.id].quantity -=
                              helper[product.id].grinders[grinder.id].quantity;
                            delete helper[product.id].grinders[grinder.id];
                            localStorage.setItem(
                              "card",
                              JSON.stringify(helper)
                            );
                          }
                          setTotalPrice((val) => {
                            return setSubTotal(helper);
                          });
                          return helper;
                        });
                      }
                    }}
                  />
                </div>
              </div>
              {/* <p className="mt-1 text-sm text-gray-500">
      {product.color}
    </p> */}
            </div>
            <p className="text-black-600 min-h-[12px]">
              {grinder && (lng == "en" ? grinder.name : grinder.mn_name)}
            </p>
            <div className="flex   justify-between text-base font-light text-black-700">
              <p className="text-lg">
                {product.price?.toLocaleString("en-US", {
                  style: "decimal",
                })}
                {"₮"}
              </p>
              <div className="font-thin text-lg text-white bg-black flex content-center items-center py-1">
                <div
                  className="border border-r-white border-y-0 border-l-0 px-1 cursor-pointer"
                  onClick={() => {
                    setProdcts((val) => {
                      const localCard = localStorage.getItem("card");
                      let helper = localCard ? JSON.parse(localCard) : val;
                      if (!helper[product.id])
                        helper[product.id] = {
                          ...product,
                          ["quantity"]: 1,
                        };
                      else {
                        helper[product.id].quantity -= 1;
                      }
                      if (helper[product.id].quantity < 1) {
                        helper[product.id].quantity = 1;
                      }

                      if (grinder) {
                        let old_quantity =
                          helper[product.id].grinders[grinder.id].quantity;
                        helper[product.id].grinders[grinder.id].quantity -= 1;

                        if (
                          helper[product.id].grinders[grinder.id].quantity < 1
                        ) {
                          // helper[product.id].quantity += 1;
                          helper[product.id].grinders[grinder.id].quantity = 1;
                        }
                      }

                      localStorage.setItem("card", JSON.stringify(helper));

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
                </div>
                <span className=" px-2 min-w-[35px] text-center">
                  {!grinder ? product.quantity : grinder.quantity}
                </span>
                <div
                  className="border border-l-white border-y-0 border-r-0 px-1 cursor-pointer"
                  onClick={() => {
                    setProdcts((val) => {
                      const localCard = localStorage.getItem("card");
                      let helper = localCard ? JSON.parse(localCard) : val;
                      if (!helper[product.id])
                        helper[product.id] = {
                          ...product,
                          ["quantity"]: 1,
                        };
                      else {
                        helper[product.id].quantity += 1;
                      }

                      if (grinder) {
                        helper[product.id].grinders[grinder.id].quantity += 1;
                      }
                      localStorage.setItem("card", JSON.stringify(helper));
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
                </div>
              </div>
            </div>
          </div>
        </li>
      </>
    );
  };

  useEffect(() => {
    const localCard = localStorage.getItem("card");
    let helper = localCard ? JSON.parse(localCard) : {};

    setProdcts((val) => {
      return helper;
    });

    setTotalPrice((val) => {
      return setSubTotal(helper);
    });
  }, []);

  useEffect(() => {
    const localCard = localStorage.getItem("card");
    let helper = localCard ? JSON.parse(localCard) : {};

    setProdcts((val) => {
      return helper;
    });

    setTotalPrice((val) => {
      return setSubTotal(helper);
    });
  }, [openBasket]);

  return (
    <>
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        {isShowTitle && (
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
        )}

        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {Object.keys(products).map((key) => {
                const product = products[key];
                if (product.grinders)
                  return Object.keys(product.grinders).map((g_key) => {
                    return (
                      <ProductItem
                        key={key + "-" + g_key}
                        product={product}
                        grinder={product.grinders[g_key]}
                      />
                    );
                  });
                else {
                  return (
                    <ProductItem
                      key={"basktet-product-real-" + key}
                      product={product}
                    />
                  );
                }
              })}
            </ul>
            {(!products || Object.keys(products).length === 0) && (
              <p className="text-center  text-lg mt-2">{t("empty_cart")}</p>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-3 sm:px-6">
        {totalPrice > 0 && totalPrice < 100000 && (
          <div className="flex justify-between text-base font-medium text-black-800 border-b py-3">
            <p>{t("delivery")}</p>
            <p>
              {parseInt(5000)?.toLocaleString("en-US", {
                style: "decimal",
              })}
              {"₮"}
            </p>
          </div>
        )}
        <div className="flex justify-between text-base font-medium text-black-800 border-b py-3">
          <p>{t("subtotal")}</p>
          <p>
            {totalPrice > 0 && totalPrice < 100000
              ? parseInt(totalPrice + 5000)?.toLocaleString("en-US", {
                  style: "decimal",
                })
              : totalPrice?.toLocaleString("en-US", {
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
              <div>
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
              </div>
            ) : (
              <div>
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
              </div>
            )}
          </div>
          {openInformation && (
            <div className="sm:col-span-3 mt-3">
              {t("order_additional_information")}
            </div>
          )}

          <h1></h1>

          <div className="sm:col-span-3"></div>

          <div
            class="flex items-center p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 mt-3"
            role="alert"
          >
            <svg
              class="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div className="text-base">
              <p class="font-medium w-full ">{t("grinder_info")}</p>{" "}
              {t("grinder_ingo_full")}
            </div>
          </div>
        </div>
        {isShowTitle && (
          <>
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
          </>
        )}
      </div>
    </>
  );
}

export default BasketItem;
