import React from "react";
import BranchesMainPage from "../components/Branches/BranchesMainPage";

function page({ params: { lng } }) {
  return (
    <div className="w-full bg-white">
      {/* <div className="w-full bg-white"> */}
      <BranchesMainPage lng={lng} />
    </div>
  );
}

export default page;
