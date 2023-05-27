import React from "react";
import Services from "../components/services/Services";

function page({ params: { lng } }) {
  return (
    <div className="w-full ">
    {/* <div className="w-full bg-white"> */}
      <div className="container">
        <Services slug={"ROASTING-TO-A-TASTE"} />
      </div>
    </div>
  );
}

export default page;
