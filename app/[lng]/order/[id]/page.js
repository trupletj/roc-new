import React from "react";
import OrderDetails from "../../components/Profile/OrderDetails";

function page({ params: { lng, id } }) {
  return <OrderDetails lng={lng} id={id} />;
}

export default page;
