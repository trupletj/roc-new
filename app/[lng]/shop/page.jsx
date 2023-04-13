"use client";
import React from "react";
import { useItems } from "../../hooks/useItems";
import Image from "next/image";
export const metadata = {
  title: "Shop Products",
};

function ShopPage() {
  const api_domain = "https://api.app-roc.com/";
  const { items, isLoading, isError } = useItems({
    url: `${api_domain}client/good/list`,
    data: {
      select:
        "id,name,sort_order,is_active,type_id,parent_good_id,price,size_id,image_path",
      relations: ["type:id,name", "category:id,name", "size:id,name"],
    },
  });
 
  const {
    items: categories,
    isLoading: category_loading,
    isError: category_error,
  } = useItems({
    url: `${api_domain}client/goodGategories/list`,
    data: {
      select: "*",
    },
  });
  const {
    items: types,
    isLoading: type_loading,
    isError: type_error,
  } = useItems({
    url: `${api_domain}client/goodTypes/list`,
    data: {
      select: "*",
    },
  });
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
        <div className="lg:block">
          {!category_loading &&
            categories?.record?.length > 0 &&
            categories?.record.map((category) => (
              <div
                className="w-full border-b border-gray-200 py-6"
                key={`category-item-${category.id}`}
              >
                <h3 className="-my-3 flow-root">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-0"
                    aria-expanded="false"
                  >
                    <span className="font-medium text-gray-900">
                      {category.name}
                    </span>
                    <span className="ml-6 flex items-center">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                      </svg>
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div className="pt-6" id="filter-section-0">
                  <div className="space-y-4">
                    {!type_loading &&
                      types?.record?.length > 0 &&
                      types?.record.map((type) => (
                        <div
                          className="flex items-center"
                          key={`category-type-${type.id}`}
                        >
                          <label
                            htmlFor="filter-color-0"
                            className="ml-3 text-sm text-gray-600"
                          >
                            {type.name}
                          </label>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="lg:col-span-4">
          <h2 className="sr-only">Products</h2>
          {isLoading && <p> loading</p>}
          {!isLoading && items?.record.length > 1 && (
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {items.record.map((product) => {
                if (product.id == 56) {
                  return <></>;
                }
                return (
                  <a key={product.id} href="/" className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <Image
                        src={api_domain + product.image_path}
                        alt={product.name || "123"}
                        width="300"
                        height="300"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-center text-gray-700">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-lg text-center font-medium text-gray-900">
                      {product?.price?.toLocaleString("en-US", {
                        style: "decimal",
                      }) + "₮"}
                    </p>
                  </a>
                );
              })}
            </div>
          )}
          {!isLoading && items?.record.length <= 1 && <p>empty</p>}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
