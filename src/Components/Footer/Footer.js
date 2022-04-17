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
        <FontAwesomeIcon icon={faFacebookF} className="mx-3 text-3xl" />
        <FontAwesomeIcon icon={faInstagram} className="mx-3 text-3xl" />
        <FontAwesomeIcon icon={faTwitter} className="mx-3 text-3xl" />
      </div>

      {/* <FontAwesomeIcon icon={["fab", "facebook-f"]} /> */}
    </footer>
  );
};

export default Footer;
