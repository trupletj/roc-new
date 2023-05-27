import React from "react";
import Profile from "../../components/Profile/Profile";

function page({ params: { lng, slug } }) {
  return <Profile lng={lng} slug={slug} />;
}

export default page;
