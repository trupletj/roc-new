import React from "react";
import Paths from "../components/moleculs/Paths";
import Profile from "../components/Profile/Profile";

function page({ params: { lng } }) {
  return <Profile lng={lng} slug="tester" />;
}

export default page;
