import React from "react";
import { Container, Navbar } from "react-bootstrap";

const TopComponent = () => {
  return (
    <>
      <div className="background"></div>
      <div className="texture">
        <Navbar />
        <Container className="container-top">
          <h1>Hello!</h1>
        </Container>
        <footer/>
      </div>
    </>
  );
};

export default TopComponent;
