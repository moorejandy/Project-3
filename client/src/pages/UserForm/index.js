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
// import { Input, TextArea, FormBtn } from "../components/Form";
    
class UserForm extends Component {
  state = {
    userName: "",
    password: ""
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.userName && this.state.password) {
      API.saveUser({
        userName: this.state.userName,
        pas: this.state.password,
      })
        // .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };
// function UserForm(){
  render(){
      return (
        <form>
        {/* <span className="formtext">&#x3C;Form /&#x3E;</span> */}
          <input 
            type="text" 
            placeholder="Enter a user name" 
            required 
          />
           <input 
            type="text" 
            placeholder="Enter a password" 
            required 
          />
          <button  disabled={(this.state.userName && this.state.password)}
                onClick={this.handleFormSubmit}
                  >Sign Up</button>
        </form>
      );
    }
  }


    
export default UserForm;