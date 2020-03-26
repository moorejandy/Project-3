import React, { Component } from "react";
import { Nav3 } from "../../components/Nav";
import Recipe from "../../components/Recipe";
import { Container, Col, Row } from "../../components/Grid";
import Footer from "../../components/Footer";
import API from "../../utils/API";
const axios = require("axios");
var healthFilter;
var dietFilter;

class UserPage extends Component {
  state = {
    _id: window.sessionStorage.getItem("userId"),
    recipes: [],
    q: "",
    q2: "",
    q3: ""
  };

  componentDidMount() {
    console.log(this.userId);
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  getRecipes = () => {
    axios
      .get("https://api.edamam.com/search?q=" + this.state.q + "&app_id=299349fb&app_key=1271d24b2a30960d770f228fa7a35422" + this.state.q2 + this.state.q3)
      .then(results => {
        results.data.hits.forEach(element => {
          console.log(element.recipe.label);
        });
        JSON.stringify([results.data.hits]);
        this.setState({
          recipes: results.data.hits
        })
        console.log("These: " + this.state.recipes);
      });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.getRecipes();
    console.log("the value of health is " + this.state.q3);
  };

  handleSaveSubmit = event => {

    
    console.log(this.state._id);
    console.log(this.state.recipes);
    // if (this.state._id)
    {
    event.preventDefault();
    API.saveRecipes(
      { _id: this.state._id,
      $set: {recipe: this.state.recipes}},
      {new: true},
      (err, data) => {
        if (err) return (err, data);
        return (null, data);
      }
    );
    };
  }
      // .then(console.log(this._id))
  //     .catch(err => console.log(err.response));
  //   }
  // };


  filtervalue11 = event => {
    event.preventDefault();
    this.state.q2 = "&health=vegan";
    healthFilter = "Vegan";
  };

  filtervalue12 = event => {
    event.preventDefault();
    this.state.q2 = "&health=vegetarian";
    healthFilter = "Vegetarian";
  };

  filtervalue13 = event => {
    event.preventDefault();
    this.state.q2 = "&health=peanut-free";
    healthFilter = "Peanut-free";
  };

  filtervalue14 = event => {
    event.preventDefault();
    this.state.q2 = "&health=sugar-conscious";
    healthFilter = "Sugar-conscious";
  };

  filtervalue15 = event => {
    event.preventDefault();
    this.state.q2 = "&health=soy-free";
    healthFilter = "Soy-free";
  };

  filtervalue16 = event => {
    event.preventDefault();
    this.state.q2 = "&health=dairy-free";
    healthFilter = "Dairy-free";
  };

  filtervalue21 = event => {
    event.preventDefault();
    this.state.q3 = "&diet=balanced";
    dietFilter = "Balanced";
  };

  filtervalue22 = event => {
    event.preventDefault();
    this.state.q3 = "&diet=high-fiber";
    dietFilter = "High-fiber";
  };

  filtervalue23 = event => {
    event.preventDefault();
    this.state.q3 = "&diet=high-protein";
    dietFilter = "High-protein";
  };

  filtervalue24 = event => {
    event.preventDefault();
    this.state.q3 = "&diet=low-carb";
    dietFilter = "Low-carb";
  };

  filtervalue25 = event => {
    event.preventDefault();
    this.state.q3 = "&diet=low-fat";
    dietFilter = "Low-fat";
  };

  filtervalue26 = event => {
    event.preventDefault();
    this.state.q3 = "&diet=low-sodium";
    dietFilter = "Low-sodium";
  };

  render() {
    const { recipes } = this.state;

    return (
      <div>
        <Nav3 />
        <Container>
          <Row>
            <Col size="md-6 s6">

              <div class="resultView">
                <Row>
                  <h1 class="display-4 searchHead">  Search Results </h1>
                </Row>
                <hr class="searchLine" />
                <Row>
                  <Col size="md-12 border border-light s12">
                    <Recipe recipes={recipes}
                      handleSaveSubmit={this.handleSaveSubmit} />
                  </Col>
                </Row>
              </div>

            </Col>
            <Col size="md-4 s7">
              <div class="searchArea">
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
                <hr/>
                <Row>
                  <div class="foodfilter">
                    <div class="btn-group bg1">
                      <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Health
                    </button>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item di-11" onClick={this.filtervalue11}>Vegan</li>
                        <li class="dropdown-item di-12" onClick={this.filtervalue12}>Vegetarian</li>
                        <li class="dropdown-item di-13" onClick={this.filtervalue13}>Peanut-Free</li>
                        <li class="dropdown-item di-14" onClick={this.filtervalue14}>Sugar-Conscious</li>
                        <li class="dropdown-item di-15" onClick={this.filtervalue15}>Soy-Free</li>
                        <li class="dropdown-item di-16" onClick={this.filtervalue16}>Diary-Free</li>
                      </ul>
                    </div>

                    <div class="btn-group bg2">
                      <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Diet

                    </button>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item di-21" onClick={this.filtervalue21}>Balanced</li>
                        <li class="dropdown-item di-22" onClick={this.filtervalue22}>High-Fiber</li>
                        <li class="dropdown-item di-23" onClick={this.filtervalue23}>High-Protien</li>
                        <li class="dropdown-item di-24" onClick={this.filtervalue24}>Low-Carb</li>
                        <li class="dropdown-item di-25" onClick={this.filtervalue25}>Low-Fat</li>
                        <li class="dropdown-item di-26" onClick={this.filtervalue26}>Low-Sodium</li>
                      </ul>
                    </div>
                  </div>
                </Row>
                <Row>
                  <div class="foodfiltertip">
                    <h3>Filters selected:</h3>
                    <h4 class="filter1-desc"> Health: {healthFilter} </h4>
                    <h4 class="filter2-desc"> Diet: {dietFilter} </h4>
                  </div>
                </Row>
                <hr/>
              </div>
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