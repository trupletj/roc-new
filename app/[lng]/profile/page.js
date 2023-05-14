import React from "react";
import Paths from "../components/moleculs/Paths";
import DeliveryForm from "../components/Checkout/DeliveryForm";

function page({ params: { lng } }) {
  return (
    <div className="w-full bg-[#f2f2f2]">
      <Paths />
      <DeliveryForm lng={lng} />
    </div>
  );
}

export default page;
