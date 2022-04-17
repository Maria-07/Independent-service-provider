import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Services from "../Services/Services";
import Quotes from "../Quotes/Quotes";
// import Quotes from "../Quotes/Quotes";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Quotes></Quotes>
    </div>
  );
};

export default Home;
