import React from "react";

import Hero from "../components/home/Hero";
import SectionCounter from "../components/home/SectionCounter";
import SectionSlider from "../components/home/SectionSlider";
import Footer from "../components/Footer";

const Home = (props) => {
  return (
    <div className="home">
      <Hero/>
      <SectionCounter/>
      <SectionSlider/>
      <Footer/>
    </div>
  );
}

export default Home;