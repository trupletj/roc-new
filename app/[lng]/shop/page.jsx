import React from "react";
import { useItems } from "../../hooks/useItems";

import ProductList from "../components/Shop/ProductList";
export const metadata = {
  title: "Shop Products",
};

function ShopPage({ params }) {
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
      <ProductList
        ItemData={{ items, isLoading, isError }}
        CategoryData={{ categories, category_loading, category_error }}
        TypeData={{ types, type_loading, type_error }}
        params={params}
      />
    </div>
  );
}

export default ShopPage;
