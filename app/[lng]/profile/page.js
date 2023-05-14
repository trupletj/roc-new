import React from "react";
import Paths from "../components/moleculs/Paths";
import Profile from "../components/Profile/Profile";

function page({ params: { lng } }) {
  return (
    <div className="w-full bg-[#f2f2f2]">
      <Paths />
      <Profile lng={lng} />
    </div>
  );
}

export default page;
