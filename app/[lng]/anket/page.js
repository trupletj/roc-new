import React from "react";
import ClientRegister from "../components/ClientRegister";
import WorkAtRock from "../components/Ankets/WorkAtRock";
import Main from "../components/Ankets/Main";
function page({ params }) {
  return (
    // <div className="w-full bg-white">
    <div className="w-full ">
      <Main lng={params.lng} />
    </div>
  );
}

export default page;
