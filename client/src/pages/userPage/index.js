import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "../../utils/API";
import {Nav3} from "../../components/Nav";
import Recipe from "../../components/Recipe";
import Footer from "../../components/Footer";
// const axios = require("axios");

class UserPage extends Component {
  state = {
    recipes: [],
    q: ""
  };

  componentDidMount() {
    // axios
    // .get("https://api.edamam.com/search?q=" + q + "&app_id=299349fb&app_key=1271d24b2a30960d770f228fa7a35422"
    // ).then(res => {
    //   const recipes =res.data.hits;
    //   this.setState({recipes})
    // })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  getRecipes = () => {
    console.log("clicked the button");
    API.getRecipes(this.state.q)
      .then(results => {
        // console.log("We got a response!" + results);
        console.log(results.data);
        this.setState({
          recipes: results.data[0].hits
        })
      });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.getRecipes();
  };
  
    // this.props.history.push('/user');
  
  render() {
    // console.log(`recipes: ${JSON.stringify(this.state.recipes[0])}`)
    // const {recipes} = this.state;
    if (this.state.recipes === null){
      return 
    }else{
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
       {/* {this.state.recipes.map(recipe => (
          <Recipe key={recipe.uri}
            label={recipe.label} 
            uri={recipe.uri} 
          />
        ))} */}
        <Recipe recipes={this.state.recipes}/>
        <div class="foot fixed-bottom">
          <Footer>
          </Footer>
        </div>
      </div>
    );
      }
  }
}

export default UserPage;