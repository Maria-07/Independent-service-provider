import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div>
      <Spinner className="w-32 h-32" animation="border" />
    </div>
  );
};

export default Loading;
