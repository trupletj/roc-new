import React from "react";
import Branch from "../../components/Branches/Branch";
async function page({ params: { lng, slug } }) {
  return <Branch lng={lng} slug={slug} />;
}

export default page;
