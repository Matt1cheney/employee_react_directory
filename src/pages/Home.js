import React, { useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import EmployeesContainer from "../components/EmployeesContainer";
import API from "../utils/API";
const Home = () => {

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
        </Col>
        <Col size="md-6 sm-12">
          <EmployeesContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
