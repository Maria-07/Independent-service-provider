import React from "react";
import { useParams } from "react-router-dom";

const Articles = () => {
  const { serviceId, name, description, img } = useParams();
  return (
    <div className="container my-32 p-5 border-2">
      {/* <h1>{serviceId}</h1> */}
      <h2 className="mb-3 text-gray-600">{name}</h2>
      <p className=" font-medium text-lg">{description}</p>
    </div>
  );
};

export default Articles;
