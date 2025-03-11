import React from "react";
import { Container, Button } from "react-bootstrap";

const Welcome = () => {
  return (
    <Container className="p-5 my-4 bg-light border rounded">
      <h1>Images Gallery</h1>
      <p>
        Retrieves random images from Unsplash
      </p>
      <p>
        <Button bsStyle="primary" href="https://unsplash.com" target="_blank">Learn more</Button>
      </p>
    </Container>
  );
};

export default Welcome;
