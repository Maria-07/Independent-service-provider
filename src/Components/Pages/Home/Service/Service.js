import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, img, id, description } = service;
  let des = description.slice(0, 70);
  return (
    <div>
      <Card className="mt-3">
        <Card.Img variant="top" src={img} />
        <Card.Body className="">
          <Card.Title className=" mt-3">{name}</Card.Title>
          <Card.Text className="mb-2">
            {des} ... <span className="font-semibold">Read More</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`${id}/${name}/${description}`}>
            <button className="w-full  text-black ">Read More</button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Service;
