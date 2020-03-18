import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "../../utils/API";
import Nav from "../../components/Nav";

class userPage extends Component {
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

  handleFormSubmit = () => {
      API.getRecipes(this.state.q)
      .then(res => 
    this.setState({
      recipes: res.data
    })
      )
        .catch(()=>
        this.setState({
          recipes: [],
        })
        );
    // this.props.history.push('/user');
  };
// function userPage({label, image, yield, ingriedents}) {
  render(){
      return (
        <div>
        <Nav />
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
<h3>{this.state.recipes}</h3>
{/* <h3>{this.state.recipes[0].image}</h3> */}
{/* <h3>{yield}</h3> */}
{/* <h3>{this.state.recipes[0].ingredient}</h3> */}
      </div>
      );
    }
}
  
  export default userPage;