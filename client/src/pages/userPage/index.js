import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import API from "../../utils/API";
import { Nav3 } from "../../components/Nav";
import Recipe from "../../components/Recipe";
import { Container, Col, Row } from "../../components/Grid";
import Footer from "../../components/Footer";
const axios = require("axios");


class UserPage extends Component {
  state = {
    recipes: [],
    q: ""
  };

  componentDidMount() {

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  getRecipes = () => {
    // console.log("clicked the button");
    axios
      .get("https://api.edamam.com/search?q=" + this.state.q + "&app_id=299349fb&app_key=1271d24b2a30960d770f228fa7a35422")
      // .then(results => console.log(results))
      .then(results => {
        results.data.hits.forEach(element => {
          console.log(element.recipe.label);
        });
        // console.log(results.data.hits);
        JSON.stringify([results.data.hits]);
        this.setState({
          recipes: results.data.hits
        })
        console.log("These: " + this.state.recipes);
      });
  }

  //   getRecipes2 = () =>{
  //     axios 
  //     .get("https://api.edamam.com/search?q=chicken&app_id=299349fb&app_key=1271d24b2a30960d770f228fa7a35422")

  //     .then(response =>
  //       response.results.data[0].hits.map(recipe => ({
  // recipe: `${recipe.label} ${recipe.image}`
  //       }))
  //       )
  //       .then(recipes => {
  //         this.setState({
  //           recipes,
  //           isLoading: false
  //         });
  //       }).catch(error => this.setState({ error, isLoading: false}))
  //   }

  handleFormSubmit = event => {
    event.preventDefault();
    this.getRecipes();
  };


  render() {

    const { recipes } = this.state;

    return (
      <div>
        <Nav3 />
        <Container>
          <Row>
            <Col size="md-6 s6">
              <Row>
                <h2 class="display-3">  Search Results </h2>
              </Row>
              <Row>
                <Col size="md-12 border border-light s12">
                  <Recipe recipes={recipes} />
                </Col>
              </Row>
            </Col>
            <Col size="md-4 s7">
              <Row>
                <div class="foodsearch">
                  <input className="foodsearchtext"
                    id="search"
                    type="text"
                    value={this.state.q}
                    placeholder="Enter Food Name"
                    name="q"
                    onChange={this.handleInputChange}
                    required
                  />
                  <button
                    onClick={this.handleFormSubmit}
                    type="submit"
                    className="btn btn-lg btn-light float-right foodsearchbutton"
                  >
                    Search
               </button>
                </div>
              </Row>
              <Row>
                <div class="foodfilter">
                  <div class="btn-group bg1">
                    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Type
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item di-11" href="#">Vegan</a>
                      <a class="dropdown-item di-12" href="#">Keto</a>
                      <a class="dropdown-item di-13" href="#">Vegetarian</a>
                      <a class="dropdown-item di-14" href="#">Non-vegetarian</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item di-19" href="#">No Filter</a>
                    </div>
                  </div>
                  <div class="btn-group bg2">
                    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Calories
                    </button>
                    <div class="dropdown-menu di-21">
                      <a class="dropdown-item di-22" href="#"> less than 500 cal </a>
                      <a class="dropdown-item di-23" href="#"> less than 1 Kcal</a>
                      <a class="dropdown-item di-24" href="#">less than 2 Kcal</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item di-29" href="#">No Filter</a>
                    </div>
                  </div>
                </div>
              </Row>
              <Row>
                <div class="foodfiltertip">
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
        <div class="foot fixed-bottom">
          <Footer>
          </Footer>
        </div>
      </div>
    );
  }
}



export default UserPage;