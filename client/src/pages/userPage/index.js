import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import API from "../../utils/API";
import API from "../../utils/API";
import {Nav3} from "../../components/Nav";
import Recipe from "../../components/Recipe";
import Footer from "../../components/Footer";
const axios = require("axios");


class UserPage extends Component {
  state = {
    recipes: [],
    q: "",
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
        console.log("These: "+ this.state.recipes);
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
        <input
          id="search"
          type="text"
          value={this.state.q}
          placeholder="food"
          name="q"
          onChange={this.handleInputChange}
          required
        />
        <button
          onClick={this.handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>

        <Recipe recipes={recipes} />

        <div class="foot fixed-bottom">
          <Footer>
          </Footer>
        </div>
      </div>
    );
  }
}



export default UserPage;