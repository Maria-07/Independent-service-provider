import React from "react";
import { CardGroup } from "react-bootstrap";
import image1 from "../../../../images/services/service-1.png";
import image2 from "../../../../images/services/service-2.png";
import image3 from "../../../../images/services/service-3.png";
import Service from "../Service/Service";

const service = [
  {
    id: 1,
    img: image1,
    name: "UN WOMEN GOODWILL AMBASSADOR |",
    description:
      "British actor Emma Watson was appointed UN Women Goodwill Ambassador in July 2014. The accomplished actor, humanitarian and recent graduate of Brown University will dedicate her efforts towards the empowerment of young women and will serve as an advocate for UN Women 'HeForShe' campaign in promoting gender equality.",
  },
  {
    id: 2,
    img: image2,
    name: "Charity Projects",
    description:
      "In 2018, she gave an estimated $1.4 million to the U.K. Justice and Equality Fund, an anti-sexual harassment campaign.",
  },
  {
    id: 3,
    img: image3,
    name: "Camfed",
    description:
      "Emma Watson decided to support this organization after visiting Zambia for herself and seeing the impact that this has on the women in these nations. She pledged to buy bikes for them so they were able to transport themselves to and from school.At just 24 years of age, Emma has already been involved in the promotion of girls education for several years and previously visited Bangladesh and Zambia as part of her humanitarian efforts. She has worked to promote fair trade and organic clothing and served as an ambassador for Camfed International, a movement to educate girls in rural Africa.",
  },
];

const Services = () => {
  return (
    <div id="services" className="container py-24">
      <h1 className=" text-center text-4xl mb-10">SERVICES</h1>
      <hr className="mb-10"></hr>
      <div className="row">
        {service.map((service) => (
          <div className="col-sm-12 col-md-6 col-lg-4 ">
            <CardGroup>
              <Service key={service.id} service={service}></Service>
            </CardGroup>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
