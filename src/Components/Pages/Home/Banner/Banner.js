import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Banner.css";
import image2 from "../../../../images/HeaderImg/emma-watson-header.png";
import image1 from "../../../../images/HeaderImg/header-1.png";

const Banner = () => {
  return (
    <div className="head mt-14 bg-black">
      <Container fluid>
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={image1} alt="Second slide" />
            <Carousel.Caption>
              <div className=" text-xs lg:text-lg text-left md:mb-10">
                <h3 className=" text-gray-400">
                  {" "}
                  <span className=" text-gray-300 md:text-6xl">
                    Emma Watson
                  </span>
                  , <br /> A Living inspiration for women
                </h3>
                <p className="mt-3 w-3/4">
                  Emma Watson is best known for playing the character of
                  Hermione Granger, one of Harry Potter's best friends in the
                  'Harry Potter' film franchise.When Watson was appointed as the
                  UN Women Goodwill Ambassador, she became a vigorous and active
                  voice of our generation, along with a player in modern
                  feminism.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Second slide" />
            <Carousel.Caption>
              <div className=" text-xs lg:text-lg text-left md:mb-10">
                <h3 className=" text-gray-400">
                  {" "}
                  <span className=" text-gray-300 md:text-6xl">
                    Emma Watson
                  </span>
                  , <br />
                  serves as positive influence, role model
                </h3>
                <p className="mt-3 w-3/4">
                  From Hermione to Little Women: Emma Watson, a True Role Model
                  for Millennials!
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Banner;
