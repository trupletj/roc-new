"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Basket from "./Basket";
import { Disclosure } from "@headlessui/react";
import { VscChevronUp, VscChevronDown, VscChromeClose } from "react-icons/vsc";
import GlobalContext from "@/app/[lng]/context/GlobalContext";
import Link from "next/link";
import ShopBag from "../atoms/icons/ShopBag";
function ProductList({ params, ItemData, TypeData, CategoryData }) {
  const { lng } = params;
  const { items, isLoading, isError } = ItemData;
  const { types, type_loading, type_error } = TypeData;
  const { categories, category_loading, category_error } = CategoryData;

  const { openBasket, setOpenBasket, api_domain } = useContext(GlobalContext);

  const [selectedTypes, setSelectedTypes] = React.useState({});
  const [filteredItems, setFilteredItems] = React.useState([]);
  const [selectedTypeHelper, setSelectedTypeHelper] = React.useState("");
  React.useEffect(() => {
    types.record.map((item) => {
      setSelectedTypes((val) => {
        const helper = val;
        helper[item.id] = true;
        setSelectedTypeHelper(JSON.stringify(helper));
        return helper;
      });
    });

    console.log("mounted bla", params);
  }, []);
  React.useEffect(() => {
    if (
      !isLoading &&
      !isError &&
      items?.record.length > 0 &&
      !type_loading &&
      !type_error &&
      types?.record.length > 0
    )
      setFilteredItems(
        items.record.filter((item) => selectedTypes[item.type_id] == true)
      );
  }, [items, types, selectedTypeHelper]);

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
                      {types?.record
                        .filter((item) => item.category_id == category.id)
                        .map((current) => {
                          if (current) {
                            return (
                              <div
                                className="flex items-center"
                                key={`category-type-${current.id}`}
                              >
                                <input
                                  id={`filter-${current.id}-${category.id}`}
                                  name={`value-${current.id}-${category.id}`}
                                  defaultValue={current.id}
                                  type="checkbox"
                                  onClick={(e) => {
                                    setSelectedTypes((val) => {
                                      const helper = val;
                                      helper[e.target.value] = e.target.checked;
                                      setSelectedTypeHelper(
                                        JSON.stringify(helper)
                                      );
                                      return helper;
                                    });
                                  }}
                                  defaultChecked={selectedTypes[current.id]}
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
                        })}
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
            {filteredItems.map((product) => {
              if (product.id == 56) {
                return null;
              }
              return (
                <div
                  key={`product-item-${product.id}`}
                  onClick={() => {
                    setOpenBasket(true);
                  }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square relative group">
                    <Image
                      src={api_domain + product.image_path}
                      alt={product.name || "123"}
                      width="300"
                      height="300"
                      style={{ objectFit: "cover" }}
                      className="self-center mx-auto"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300">
                      <Link
                        href={`/${lng}/shop`}
                        className="absolute right-0 top-0 p-2 bg-black  group-hover:block hidden"
                      >
                        <ShopBag color={"#fff"} />
                      </Link>
                      <Link
                        href={`/${lng}/shop/product/${product.type_id}`}
                        className="absolute w-full left-0 bottom-0 p-2 bg-black  group-hover:block hidden text-center text-white"
                      >
                        Дэлгэрэнгүй
                      </Link>
                    </div>
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
