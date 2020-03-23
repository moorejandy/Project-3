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
        <div class="slideArea">
          <Container>
            <Jumbotron>
              <img class="mySlides" src="https://pairwise.com/wp-content/uploads/2018/10/bowls.jpg" ></img>
              <hr class="my-10"></hr>
              <h4>Recipes for happy and healthy life <i class="fas fa-utensils"></i></h4>
              <a class="btn btn-success btn-lg btn-lm" href="/signup" role="button">Learn more</a>
            </Jumbotron>
          </Container>
        </div>
        <Container>
          <Row>
            <Col size="md-4 s1">
              <h3 class="display-6"><i class="fas fa-concierge-bell"></i>  Video of the day</h3> <hr class="headLine"/>
              <iframe class="youtubeFrame" width="100%" height="300px"src="https://www.youtube.com/embed/AEUBQ7Ieub0"
              frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
            </Col>
            <Col size="md-4 s2">
              <h3 class="display-6"><i class="fas fa-utensils"></i>  Recipe</h3> <hr class="headLine"/>
              <iframe class="youtubeFrame" width="100%" height="300px"  src="https://www.youtube.com/embed/GDS1OVF46UY"  
              frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
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


