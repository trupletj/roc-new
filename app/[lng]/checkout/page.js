import React from "react";
import Paths from "../components/moleculs/Paths";
import Divider from "../components/atoms/Divider";
import DeliveryForm from "../components/Checkout/DeliveryForm";

function CheckOut({ params }) {
  return (
    <div className="w-full bg-[#f2f2f2]">
      <Paths />
      <DeliveryForm />
    </div>
  );
}

export default CheckOut;
