// import React from "react";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../../utils/API";
import { Nav2 } from "../../components/Nav";
import { Container, Col, Row } from "../../components/Grid";
import Footer from "../../components/Footer";
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
    if (this.state.userName && this.state.password) {
      API.saveUser({
        userName: this.state.userName,
        password: this.state.password,
        email: this.state.email
      })
        .then(res => this.redirect("./login"))
        .catch(err => console.log(err.response));
    }
    this.props.history.push('/login');
  };
  // function UserForm(){
  render() {
    return (
      <div>
        <Nav2 />
        <Container>
          <Row>
            <Col size="md-6 s4">
            <div class="infoDiv">
                <h1 class="display-4">How It Works</h1>
                <hr class="loginLine" />
                <div class="info-view">
                  <img class="info-img"src="https://i.stack.imgur.com/gdWYr.jpg">
                  </img>
                  <i class="fas fa-user"></i>
                  <div class="info-text1"><h2>Create an account</h2></div>
                  <div class="info-text2"><h5>Our user-friendly website makes it easy for users to create an account within seconds for free ! </h5></div>
                  <i class="fas fa-search"></i>
                  <div class="info-text3"><h2>Search and save your favorite recipes</h2></div>
                  <div class="info-text4"><h5>Our website has over 35,000 recipes to search and save from with options to filter search on the basis of Health and Diet</h5></div>
                  <i class="fas fa-save"></i>
                  <div class="info-text5"><h2>Retrieve your saved recipes</h2></div>
                  <div class="info-text6"><h5>Your free account allows you to save unlimited recipes and retrieve them whenever and wherever as needed by logging into your account </h5></div>
                </div>
              </div>
            </Col>
            <Col size="md-4 s5">
            <div class="signupDiv">
              <h1 class="display-4">Signup </h1>
              <hr class="loginLine" />
              <form>
                <div class="form-group">
                  <label for="formGroupExampleInput">User Name</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Create a user name"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.handleInputChange}
                   placeholder="Enter User Name"
                    required></input>   
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    placeholder="Enter Password"
                    required></input>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    placeholder="Enter email"
                    required></input>
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button class="btn btn-primary" disabled={!(this.state.userName && this.state.password && this.state.email)}
                  onClick={this.handleFormSubmit}
                >Sign Up</button>
              </form>
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



export default UserForm;