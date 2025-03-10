import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Form>
            <Row>
              <Col>
                <Form.Control placeholder="Search for new image" />
              </Col>
              <Col>
                <Button variant="primary" type="submit">Search</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Search;
