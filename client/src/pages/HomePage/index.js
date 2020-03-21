import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
// import "./App.css";
import { Nav1 } from "../../components/Nav";
import { Container, Col, Row } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";

function HomePage() {
  return (
    <div>
      <div class="wrapper">
      <Nav1 />
      <Container>
        <Jumbotron>
          <h1 class="display-1">Hello, world!</h1>
          <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr class="my-10"></hr>
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <a class="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
        </Jumbotron>
      </Container>
      <Container>
        <Row>
          <Col size="md-3 s1">
            <h1 class="display-1">Video</h1>
          </Col>
          <Col size="md-4 s2">
            <h1 class="display-1">Recipe</h1>
          </Col>
          <Col size="md-3 s3">
            <h1 class="display-1">What's Trending</h1>
          </Col>
        </Row>
      </Container>
      </div>
      <div class="foot fixed-bottom">
        <Footer>
        </Footer>
      </div>
      </div>
  );
}


export default HomePage;


