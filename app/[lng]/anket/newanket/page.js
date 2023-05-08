import React from "react";
import NewAnket from "../../components/Ankets/NewAnket";

function page({ params: { lng } }) {
  return (
    <div className="bg-[#f2f2f2] w-full">
      <div className="container">
        <NewAnket lng={lng} />
      </div>
    </div>
  );
}

export default page;
