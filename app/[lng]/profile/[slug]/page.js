import React from "react";
import Profile from "../../components/Profile/Profile";

function page({ params: { lng, slug } }) {
  return (
    <div className="w-full bg-[#f2f2f2]">
      <Profile lng={lng} slug={slug} />
    </div>
  );
}

export default page;
