import React from "react";
import { useItems, apiDomain } from "@/app/hooks/useItems";
import ProductDetail from "@/app/[lng]/components/Shop/ProductDetails";

export const metadata = {
  title: "Product detail",
};

function ShopPage({ params }) {
  const { id } = params;
  const apiDomain = process.env.API_DOMAIN;
  const { items, isLoading, isError } = useItems({
    url: `${apiDomain}client/good/list`,
    data: {
      select:
        "id,name,sort_order,is_active,type_id,parent_good_id,price,size_id,image_path",
      type_id: id,
      relations: ["size:id,name"],
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
      id: id,
      relations: ["category:id,name"],
    },
  });
  return (
    <div className="w-full bg-white">
      <div className="container py-12">
        <ProductDetail
          ItemData={{ items, isLoading, isError }}
          TypeData={{ types, type_loading, type_error }}
          params={params}
        />
      </div>
    </div>
  );
}

export default ShopPage;
