import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center  my-10">
      <p>
        <small>&copy;{year} Emma Watson. All rights reserved. </small>
      </p>
    </footer>
  );
};

export default Footer;
