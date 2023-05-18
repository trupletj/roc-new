"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { VscChevronUp, VscChevronDown, VscChromeClose } from "react-icons/vsc";
import GlobalContext from "@/app/[lng]/context/GlobalContext";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/client";
import ShopBag from "../atoms/icons/ShopBag";
function ProductList({ params, ItemData, TypeData, CategoryData }) {
  const { lng } = params;

  const { t: headerT } = useTranslation(lng, "header");
  const { items, isLoading, isError } = ItemData;
  const { types, type_loading, type_error } = TypeData;
  const { categories, category_loading, category_error } = CategoryData;

  const { mediaDomain } = useContext(GlobalContext);

  const [selectedTypes, setSelectedTypes] = React.useState({});
  const [selectedCategories, setSelectedCategories] = React.useState({});
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

    categories.record.map((item, index) => {
      setSelectedCategories((val) => {
        let helper = { ...val };
        helper[item.id] = index > 1 ? false : true;
        return helper;
      });
    });
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
        items.record.filter((item) => selectedTypes[item.type_id] === true)
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
              defaultOpen={true}
              key={`filter-category-key-for-${category.id}`}
              className="border-b border-gray-200 py-6"
            >
              {({ open }) => (
                <>
                  <h3 className="-my-3 flow-root">
                    <Disclosure.Button className="flex w-full items-center justify-between bg-transparent  py-3 text-normal uppercase font-normal text-gray-400 hover:text-gray-500">
                      <span className=" text-gray-900">{category.name}</span>
                      <div className="ml-6 flex items-center">
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
                      </div>
                    </Disclosure.Button>
                  </h3>
                  <Disclosure.Panel className="pt-3">
                    <div className="space-y-3">
                      {types?.record
                        .filter((item) => item.category_id === category.id)
                        .map((current) => {
                          if (current) {
                            return (
                              <div
                                className="flex items-center"
                                key={`category-type-${current.id}`}
                              >
                                <label
                                  htmlFor={`filter-${current.id}-${category.id}`}
                                  className={`text-sm  cursor-pointer ${
                                    !selectedCategories[category.id]
                                      ? selectedTypes[current.id]
                                        ? "text-[#F0B450]"
                                        : "text-gray-600"
                                      : "text-gray-600"
                                  }`}
                                  // className={`text-sm  cursor-pointer ${
                                  //   selectedTypes[current.id]
                                  //     ? "text-[#F0B450]"
                                  //     : "text-gray-600"
                                  // }`}
                                  onClick={() => {
                                    setSelectedCategories((val) => {
                                      const helper = val;
                                      if (helper[category.id] == true) {
                                        helper[category.id] = false;
                                        types.record.map((item) => {
                                          if (item.category_id == category.id)
                                            setSelectedTypes((val) => {
                                              const ne_helper = val;
                                              ne_helper[item.id] =
                                                helper[category.id];
                                              setSelectedTypeHelper(
                                                JSON.stringify(ne_helper)
                                              );
                                              return ne_helper;
                                            });
                                        });
                                      }
                                      setSelectedTypes((val) => {
                                        const helper = val;
                                        helper[current.id] =
                                          !helper[current.id];
                                        setSelectedTypeHelper((val) =>
                                          JSON.stringify(helper)
                                        );
                                        return helper;
                                      });
                                      return helper;
                                    });
                                  }}
                                >
                                  {current.name} {current.category_id}
                                </label>
                              </div>
                            );
                          }
                        })}
                      <div
                        className="flex items-center"
                        key={`category-type-${category.id}-all}`}
                      >
                        <label
                          htmlFor={`filter-all-${category.id}`}
                          className={`text-sm  cursor-pointer ${
                            selectedCategories[category.id]
                              ? "text-[#F0B450]"
                              : "text-gray-600"
                          }`}
                          onClick={(e) => {
                            setSelectedCategories((val) => {
                              const helper = val;
                              helper[category.id] = !helper[category.id];

                              types.record.map((item) => {
                                if (item.category_id == category.id)
                                  setSelectedTypes((val) => {
                                    const ne_helper = val;
                                    ne_helper[item.id] = helper[category.id];
                                    setSelectedTypeHelper(
                                      JSON.stringify(ne_helper)
                                    );
                                    return ne_helper;
                                  });
                              });
                              setSelectedTypeHelper(JSON.stringify(helper));
                              return helper;
                            });
                          }}
                        >
                          {headerT("all")}
                        </label>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
      </div>

      <div className="lg:col-span-4">
        <h2 className="sr-only">Products</h2>
        <div className="flex flex-row container py-2 text-gray-500 border-b border-b-gray-900">
          <span>{headerT("home")}</span>
          <span className="mx-1">-</span>
          <span className="text-[#F0B450]">{headerT("shop")}</span>
        </div>
        {isLoading && <p> loading.. </p>}
        {!isLoading && items?.record.length > 1 && (
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 py-3">
            {filteredItems.map((product) => {
              if (product.id === 56) {
                return null;
              }
              return (
                <div
                  key={`product-item-${product.id}`}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square relative group">
                    <Image
                      src={mediaDomain + product.image_path}
                      alt={product.name || "About Picture"}
                      width="300"
                      height="300"
                      style={{ objectFit: "cover" }}
                      className="self-center mx-auto"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300">
                      <a
                        // href={`/${lng}/shop`}
                        href={`/${lng}/shop/product/${product.type_id}`}
                        className="absolute right-0 top-0 p-2 bg-black  group-hover:block hidden"
                      >
                        <ShopBag color={"#fff"} />
                      </a>
                      <a
                        href={`/${lng}/shop/product/${product.type_id}`}
                        className="absolute w-full left-0 bottom-0 p-2 bg-black  group-hover:block hidden text-center text-white"
                      >
                        {headerT("view")}
                      </a>
                    </div>
                  </div>
                  <a href={`/${lng}/shop/product/${product.type_id}`}>
                    <h3 className="mt-4 text-sm text-center text-gray-700">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-lg text-center font-medium text-gray-900">
                      {product?.price?.toLocaleString("en-US", {
                        style: "decimal",
                      }) + "₮"}
                    </p>
                  </a>
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
