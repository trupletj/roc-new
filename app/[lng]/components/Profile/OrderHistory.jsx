"use client";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import Loading from "../atoms/Loading";
import { apiDomain, fetcherForSwrPost } from "@/app/hooks/useItems";
import { useTranslation } from "@/app/i18n/client";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import Link from "next/link";
import ArrowR from "../atoms/ArrowR";

function OrderHistory({ lng }) {
  const { t } = useTranslation(lng, "client");

  const { token } = useContext(GlobalContext);
  const { data, error } = useSWR(
    [`${apiDomain}client/profile/myOrders`, {}, token],
    ([url, data, token]) => fetcherForSwrPost(url, data, token)
  );
  const searchParams = useSearchParams();
  const prefix = parseInt(searchParams.get("prefix")) || 0;
  return (
    <>
      <div className="max-w-full pt-10 md:pt-0">
        <h2 className="text-2xl text-gray-900 uppercase font-normal opacity-1">
          {t("order_history")}
          <br />
        </h2>
        <div className="pointer-events-auto mt-10">
          <div className="flex flex-col bg-white ">
            <div className="flex-1 p-6  grid grid-cols-1 gap-1">
              {!data && <Loading></Loading>}
              {data && (
                <>
                  {data?.record?.data?.map((item) => (
                    <div
                      className="col-span-1"
                      key={`order-list-item-${item.id}`}
                    >
                      <div className="space-y-2 flex flex-col items-start bg-gray-300  p-2 ">
                        <p className="text-xl font-normal mt-2 w-full">
                          {item.number}
                          <span className="text-base font-normal self-end float-right">
                            {" "}
                            {item?.created_at
                              ?.replace("T", " ")
                              .replace(".000000Z", "")}
                          </span>
                          {/* {lng === "en" ? productType.name : productType.mn_name} */}
                        </p>
                        <p className="text-[#F0B450] text-xl font-normal">
                          {item?.total_price?.toLocaleString("en-US", {
                            style: "decimal",
                          })}
                          {"₮"}
                        </p>
                        <p>{item?.current_status?.name}</p>

                        <div className="flex-1 w-full flex flex-row  justify-between ">
                          <p>
                            {" "}
                            {item?.total_good} {t("types")}{" "}
                            {item?.total_quantity} {t("products")}
                          </p>
                          <Link
                            href={`/${lng}/order/${item?.id}`}
                            shallow={true}
                            className="text-white flex items-center bg-[#080505] py-1 px-2  float-right self-end"
                          >
                            <span className="mr-4"> {t("read_more")}</span>{" "}
                            <ArrowR />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                  {data?.record?.last_page > 0 && (
                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm text-gray-700">
                          Showing{" "}
                          <span className="font-medium">
                            {data?.record?.from}
                          </span>{" "}
                          to{" "}
                          <span className="font-medium">
                            {" "}
                            {data?.record?.to}
                          </span>{" "}
                          of{" "}
                          <span className="font-medium">
                            {" "}
                            {data?.record?.total}
                          </span>{" "}
                          results
                        </p>
                      </div>
                      <div>
                        <nav
                          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                          aria-label="Pagination"
                        >
                          {data?.record?.links
                            ?.filter((item) => item.url)
                            .map((link) => {
                              if (link?.active) {
                                return (
                                  <a
                                    key={link}
                                    href="#"
                                    aria-current="page"
                                    className="relative z-10 inline-flex items-center bg-gray-400 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                  >
                                    1
                                  </a>
                                );
                              } else {
                                return (
                                  <a
                                    key={link}
                                    href="#"
                                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                  >
                                    2
                                  </a>
                                );
                              }
                            })}
                          {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                        </nav>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-2xl  text-gray-900 uppercase font-normal"></h2>
      </div>
    </>
  );
}
export default OrderHistory;
