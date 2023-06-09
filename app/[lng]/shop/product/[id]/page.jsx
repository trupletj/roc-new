import React from "react";
import { useItems, apiDomain } from "@/app/hooks/useItems";
import ProductDetail from "@/app/[lng]/components/Shop/ProductDetails";

export const metadata = {
  title: "Product detail",
};

// export const revalidate = 10;

function ShopPage({ params }) {
  const id = parseInt(params.id) || 8;
  const { items, isLoading, isError } = useItems({
    url: `${apiDomain}client/good/list`,
    data: {
      select:
        "id,name,sort_order,is_active,type_id,parent_good_id,price,size_id,image_path",
      type_id: id || 0,
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
      relations: ["category:id,name", "type_details", "type_detail_columns"],
    },
  });
  const {
    items: grinders,
    isLoading: grinderLoading,
    isError: grinderError,
  } = useItems({
    url: `${apiDomain}client/grinder/list`,
    data: {
      select: "*",
      id: id,
      relations: ["category:id,name"],
    },
  });
  return (
    <div className="w-full " style={{ backgroundColor: `#eceae6` }}>
      <div className="container py-12">
        <ProductDetail
          ItemData={{ items, isLoading, isError }}
          TypeData={{ types, type_loading, type_error }}
          GrinderData={{ grinders, grinderLoading, grinderError }}
          params={params}
        />
      </div>
    </div>
  );
}

export default ShopPage;
