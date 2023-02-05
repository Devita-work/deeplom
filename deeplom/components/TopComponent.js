import React from "react";
import { Container } from "react-bootstrap";

const TopComponent = () => {
  return (
    <>
      <div className="background"></div>
      <div className="texture">
        <Container className="container-top">
          <h1>Hello!</h1>
        </Container>
      </div>
    </>
  );
};

export default TopComponent;
