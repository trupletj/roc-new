import React from "react";
import AboutPage from "../../components/About/AboutPage";

function About({ params: { lng, slug } }) {
  return (
    <div className="w-full bg-white text-gray-900 pb-20">
      <div className="container">
        <AboutPage slug={slug} lng={lng} />
      </div>
    </div>
  );
}

export default About;
