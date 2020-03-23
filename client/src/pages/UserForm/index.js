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
    if (this.state.userName && this.state.password && this.state.email) {
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
                <h1 class="display-4">Information</h1>
                <hr class="loginLine" />
              </div>
            </Col>
            <Col size="md-4 s5">
            <div class="signupDiv">
              <h1 class="display-1">Signup </h1>
              <hr class="loginLine" />
              <form>
                <div class="form-group">
                  <label for="formGroupExampleInput">Example label</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.handleInputChange}
                   // placeholder="Enter user name"
                    required></input>   
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    placeholder="Enter a password"
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