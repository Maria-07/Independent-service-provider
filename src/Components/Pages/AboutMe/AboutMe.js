import React from "react";
import image from "../../../images/AboutMe/aboutme.png";
import image1 from "../../../images/AboutMe/protfolio/image-1.png";
import image2 from "../../../images/AboutMe/protfolio/image-2.png";
import image3 from "../../../images/AboutMe/protfolio/image-3.png";
import image4 from "../../../images/AboutMe/protfolio/image-4.png";
import image5 from "../../../images/AboutMe/protfolio/image-5.png";
import image6 from "../../../images/AboutMe/protfolio/image-6.png";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="bg-black text-gray-300">
      <div className="container my-16 p-11">
        <h1 className=" text-4xl font-medium text-center my-20">ABOUT ME</h1>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="mx-auto md:mt-28 mb-10 p-10">
              <h2 className="">Shanjida Rahman Maria</h2>
              <h3 className=" text-xl mb-3">FrontEnd Developer</h3>
              <h6>
                My intention is to construct myself a successful developer in
                four/five months in order that i'm able to get a good activity
                on this platform.
              </h6>
              <p>
                I am obsessed with making things and more to make things better.
                I have an extraordinarily creative mind and I know how to use my
                creativity in the right ways.I prefer to show rather than
                saying.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <img className="mx-auto h-96 rounded" src={image} alt="" />
          </div>
        </div>

        <h1 className=" text-4xl font-medium text-center my-20">PORTFOLIO</h1>
        <div className="row mb-14">
          <div className="site-name col-sm-12 col-md-6 col-lg-4 my-3 px-2 ">
            <a target="_blank" href="https://bloom-beauty.netlify.app/">
              <h4 className=" py-4 text-gray-400"># Bloom Beauty</h4>
              <img src={image1} alt="" />
            </a>
          </div>
          <div className="site-name col-sm-12 col-md-6 col-lg-4 my-3 px-2">
            <a target="_blank" href="https://eden-spring-event.netlify.app/">
              <h4 className=" py-4 text-gray-400"># Eden Spring Event</h4>
              <img src={image2} alt="" />
            </a>
          </div>
          <div className="site-name col-sm-12 col-md-6 col-lg-4 my-3 px-2">
            <a target="_blank" href="https://tenchoworld.netlify.app/">
              <h4 className=" py-4 text-gray-400"># Techno world</h4>
              <img src={image3} alt="" />
            </a>
          </div>
          <div className="site-name col-sm-12 col-md-6 col-lg-4 my-3 px-2">
            <a
              target="_blank"
              href="https://panda-commerce-maria07.netlify.app/"
            >
              <h4 className=" py-4 text-gray-400"># Panda Commerce</h4>
              <img src={image4} alt="" />
            </a>
          </div>
          <div className="site-name col-sm-12 col-md-6 col-lg-4 my-3 px-2">
            <a target="_blank" href="https://touchit-tech.netlify.app/">
              <h4 className=" py-4 text-gray-400"># Touchit Tech</h4>
              <img src={image5} alt="" />
            </a>
          </div>
          <div className="site-name col-sm-12 col-md-6 col-lg-4 my-3 px-2">
            <a
              target="_blank"
              href="https://emazon-simple-project.web.app/shop"
            >
              <h4 className=" py-4 text-gray-400"># EmmaJhon</h4>
              <img src={image6} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
