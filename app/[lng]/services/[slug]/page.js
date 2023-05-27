import React from "react";
import Services from "../../components/services/Services";

function page({ params: { lng, slug } }) {
  return (
    <div className="w-full ">
      {/* <div className="w-full bg-white"> */}
      <div className="container">
        <Services slug={slug} />
      </div>
    </div>
  );
}

export default page;
