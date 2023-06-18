"use client";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import Loading from "../atoms/Loading";
import { apiDomain, fetcherForSwrPost } from "@/app/hooks/useItems";
import { useTranslation } from "@/app/i18n/client";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import Link from "next/link";
import ArrowR from "../atoms/ArrowR";

const status_list = {
  0: { color: "red-100", name: "all" },
  1: { color: "#00B47D", name: "order_created" },
  2: { color: "#F0B450", name: "invoice_created" },
  3: { color: "#00B47D", name: "paid" },
  4: { color: "#00B47D", name: "approved" },
  5: { color: "#F0B450", name: "ready_to_delivery" },
  6: { color: "#F0B450", name: "out_for_delivery" },
  7: { color: "#00B47D", name: "delivered" },
  8: { color: "#CA2E27", name: "cancelled" },
};

function OrderHistory({ lng }) {
  const { t } = useTranslation(lng, "client");
  const { token } = useContext(GlobalContext);
  const { data, error } = useSWR(
    [`${apiDomain}client/profile/myOrders`, {}, token],
    ([url, data, token]) => fetcherForSwrPost(url, data, token)
  );
  const [filteredData, setFilteredData] = useState(data);
  const [selectedId, setSelectedId] = useState(0);

  const searchParams = useSearchParams();
  const prefix = parseInt(searchParams.get("prefix")) || 0;

  const handleFilter = (key) => {
    if (key == 0) {
      setFilteredData(data?.record.data);
      setSelectedId(0);
    } else {
      const result = data?.record.data.filter((obj) => obj.status_id == key);
      setFilteredData(result);
      setSelectedId(key);
    }
  };

  useEffect(() => {
    setFilteredData(data?.record?.data);
    setSelectedId(0);
  }, [data]);

  return (
    <>
      <div className="max-w-full pt-10 md:pt-0">
        <h2 className="text-2xl text-gray-900 uppercase font-normal opacity-1">
          {t("order_history")}
          <br />
        </h2>
        <div className="flex flex-wrap w-full mt-8">
          {Object.keys(status_list).map((key, i) => (
            <p
              key={status_list[key].name}
              className={` px-4 py-2 mr-2 mt-2  ${
                key == selectedId ? "bg-[#F0B450] text-white" : "bg-white"
              } `}
              onClick={() => handleFilter(key)}
            >
              {t(status_list[key].name)}
            </p>
          ))}
        </div>
        <div className="pointer-events-auto mt-5">
          <div className="flex flex-col space-y-4">
            {!data && <Loading></Loading>}
            {filteredData && (
              <>
                {filteredData.map((item, i) => (
                  <div
                    key={item.name}
                    className={`space-y-2 flex  bg-white  py-5 px-10 border-l-8 ${
                      `border-[` +
                      status_list[item.current_status.id].color +
                      `]`
                    } `}
                  >
                    <div className="w-2/5 flex flex-col space-y-1">
                      <h1 className="font-medium text-lg">
                        <Link href={`/${lng}/order/${item.id}`}>
                          {item.number}
                        </Link>
                      </h1>
                      <p className="text-sm font-light">
                        {item?.created_at
                          ?.replace("T", " ")
                          .replace(".000000Z", "")
                          .replaceAll("-", "/")}
                      </p>
                      <p className="text-sm ">
                        {t(status_list[item?.current_status?.id].name)}
                      </p>
                    </div>
                    <div className="w-2/5"></div>
                    <div className="w-1/5 flex flex-col items-end justify-center space-y-1">
                      <p className="text-sm">{t("subtotal")}</p>
                      <p className="font-normal text-lg">
                        {item?.total_price?.toLocaleString("en-US", {
                          style: "decimal",
                        })}
                        {"₮"}
                      </p>
                    </div>
                    {/* <p className="text-xl font-normal mt-2 w-full">
                      {item.number}
                      <span className="text-base font-normal self-end float-right">
                        {" "}
                        {item?.created_at
                          ?.replace("T", " ")
                          .replace(".000000Z", "")}
                      </span>
                     
                    </p>
                    <p className="text-[#F0B450] text-xl font-normal">
                      {item?.total_price?.toLocaleString("en-US", {
                        style: "decimal",
                      })}
                      {"₮"}
                    </p>
                    <p>{item?.current_status?.name}</p> */}

                    {/* <div className="flex-1 w-full flex flex-row  justify-between ">
                      <p>
                        {" "}
                        {item?.total_good} {t("types")} {item?.total_quantity}{" "}
                        {t("products")}
                      </p>
                      <Link
                        href={`/${lng}/order/${item?.id}`}
                        shallow={true}
                        className="text-white flex items-center bg-[#080505] py-1 px-2  float-right self-end"
                      >
                        <span className="mr-4"> {t("read_more")}</span>{" "}
                        <ArrowR />
                      </Link>
                    </div> */}
                  </div>
                ))}
              </>
            )}
            {data?.record?.last_page > 0 && (
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Showing{" "}
                    <span className="font-medium">{data?.record?.from}</span> to{" "}
                    <span className="font-medium"> {data?.record?.to}</span> of{" "}
                    <span className="font-medium"> {data?.record?.total}</span>{" "}
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
