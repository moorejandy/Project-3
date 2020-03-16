// import React from "react";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input} from "../../components/Form";
    
class UserForm extends Component {
  state = {
    userName: "",
    password: "",
    email: ""

  };

  componentDidMount() {

  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.userName && this.state.password && this.state.email) {
      API.saveUser({
        userName: this.state.userName,
        password: this.state.password,
        email: this.state.email
      })
        .then(res => this.redirect("./user"))
        .catch(err => console.log(err.response));
    }
    this.props.history.push('/user');
  };
// function UserForm(){
  render(){
      return (
        <form>
          <input 
            name="userName"
            value={this.state.userName} 
            onChange={this.handleInputChange}
            placeholder="Enter a user name" 
            required 
          />
           <input 
            name="password"
            value={this.state.password} 
            onChange={this.handleInputChange}
            placeholder="Enter a password" 
            required 
          />
          <input 
            name="email"
            value={this.state.email} 
            onChange={this.handleInputChange}
            placeholder="Enter email" 
            required 
          />

<button  disabled={!(this.state.userName && this.state.password && this.state.email)}
                onClick={this.handleFormSubmit} 
                  >Sign Up</button>
        </form>
      );
    }
  }


    
export default UserForm;