import React from "react";
import AboutPage from "../components/About/AboutPage";

function About() {
  return (
    // <div className="w-full bg-white text-gray-900 pb-20">
    <div className="w-full  text-gray-900 pb-20">
      <div className="container">
        <AboutPage slug={"our-history"} />
      </div>
    </div>
  );
}

export default About;
