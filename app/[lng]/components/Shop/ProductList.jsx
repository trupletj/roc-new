"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Basket from "./Basket";
import { Disclosure } from "@headlessui/react";
import { VscChevronUp, VscChevronDown, VscChromeClose } from "react-icons/vsc";
import GlobalContext from "../../context/GlobalContext";
function ProductList({ params, ItemData, TypeData, CategoryData }) {
  const api_domain = "https://api.app-roc.com/";

  const { items, isLoading, isError } = ItemData;
  const { types, type_loading, type_error } = TypeData;
  const { categories, category_loading, category_error } = CategoryData;

  const { openBasket, setOpenBasket } = useContext(GlobalContext);
  const [filteredTypes, setFilteredTypes] = React.useState({});
  const [selectedTypes, setSelectedTypes] = React.useState({});
  const [selectedTypeHelper, setSelectedTypeHelper] = React.useState("");

  React.useEffect(() => {
    setFilteredTypes((val) => {
      return {};
    });
    if (
      !isLoading &&
      !isError &&
      items?.record.length > 0 &&
      !type_loading &&
      !type_error &&
      types?.record.length > 0
    )
      items.record.map((item) => {
        setFilteredTypes((val) => {
          const current = val[item.parent_good_id] || {};
          const tmp = {
            ...val,
            [item.parent_good_id]: {
              ...current,
              [item.type_id]: types.record.find(
                (cur) => cur.id == item.type_id
              ),
            },
          };
          return tmp;
        });
      });
  }, [items, types]);
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
      <div className="lg:block">
        {!category_loading &&
          categories?.record?.length > 0 &&
          categories?.record.map((category) => (
            <Disclosure
              as="div"
              key={`filter-category-key-for-${category.id}`}
              className="border-b border-gray-200 py-6"
            >
              {({ open }) => (
                <>
                  <h3 className="-my-3 flow-root">
                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        {category.name}
                      </span>
                      <span className="ml-6 flex items-center">
                        {open ? (
                          <VscChevronDown
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        ) : (
                          <VscChevronUp
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </h3>
                  <Disclosure.Panel className="pt-6">
                    <div className="space-y-4">
                      {filteredTypes[category.id] &&
                        Object.keys(filteredTypes[category.id]).map((key) => {
                          const current = filteredTypes[category.id][key];
                          if (current) {
                            return (
                              <div
                                className="flex items-center"
                                key={`category-type-${current.id}`}
                              >
                                <input
                                  id={`filter-${current.id}-${category.id}`}
                                  name={`${category.id}[]`}
                                  defaultValue={current.id}
                                  type="checkbox"
                                  defaultChecked={current.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${current.id}-${category.id}`}
                                  className="ml-3 text-sm text-gray-600 cursor-pointer"
                                >
                                  {current.name}
                                </label>
                              </div>
                            );
                          }
                          return false;
                        })}
                      {!filteredTypes[category.id] && <>empty</>}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
      </div>

      <div className="lg:col-span-4">
        <h2 className="sr-only">Products</h2>
        {isLoading && <p> loading</p>}
        {!isLoading && items?.record.length > 1 && (
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {items.record.map((product) => {
              if (product.id == 56) {
                return null;
              }
              return (
                <div
                  key={`product-item-${product.id}`}
                  onClick={() => {
                    setOpenBasket(true);
                  }}
                  className="group"
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7 items-center">
                    <Image
                      src={api_domain + product.image_path}
                      alt={product.name || "123"}
                      width="300"
                      height="300"
                      style={{ objectFit: "cover" }}
                      className="self-center mx-auto"
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
                </div>
              );
            })}
          </div>
        )}
        {!isLoading && items?.record.length <= 1 && <p>empty</p>}
      </div>
    </div>
  );
}

export default ProductList;
