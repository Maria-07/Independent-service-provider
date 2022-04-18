import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center py-10  my-14">
      <p className=" font-normal text-lg">
        <small>&copy;{year} Emma Watson. All rights reserved. </small>
      </p>
      <div>
        <a href="https://www.facebook.com/emmawatson" target="_blank">
          <FontAwesomeIcon
            icon={faFacebookF}
            className=" text-black mx-3 text-3xl"
          />
        </a>
        <a href="https://www.instagram.com/emmawatson/?hl=en" target="_blank">
          <FontAwesomeIcon
            icon={faInstagram}
            className=" text-black mx-3 text-3xl"
          />
        </a>
        <a
          href="https://twitter.com/EmmaWatson?s=20&t=C-G_BockbnIyibpLLuDsZQ"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className=" text-black mx-3 text-3xl"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
