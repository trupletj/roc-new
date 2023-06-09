import React from "react";
import { useItems, apiDomain } from "@/app/hooks/useItems";

import ProductList from "@/app/[lng]/components/Shop/ProductList";
export const metadata = {
  title: "Shop Products",
};

export const revalidate = 10;

function ShopPage({ params }) {
  const { items, isLoading, isError } = useItems({
    url: `${apiDomain}client/good/list`,
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
    url: `${apiDomain}client/goodGategories/list`,
    data: {
      select: "*",
    },
  });
  const {
    items: types,
    isLoading: type_loading,
    isError: type_error,
  } = useItems({
    url: `${apiDomain}client/goodTypes/list`,
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
