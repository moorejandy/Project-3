import React, { Component } from "react";
import API from "../../utils/API";
import { Nav2 } from "../../components/Nav";
import { Container, Col, Row } from "../../components/Grid";
import Footer from "../../components/Footer";

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
        .then(res => this.redirect("./user"))
        .catch(err => console.log(err.response));
    }
    this.props.history.push('/user');
  };
  // function UserForm(){
  render() {
    return (
      <div>
        <Nav2 />
        <Container>
          <Row>
            <Col size="md-6 s8">
              <h1 class="display-1">Information</h1>
            </Col>
            <Col size="md-4 s9">
              <h1 class="display-1">Login Form </h1>
              


              <form>
                <div class="form-group">
                  <label for="formGroupExampleInput">Example label</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.handleInputChange}
                    placeholder="Enter user name"
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
                <button class="btn btn-primary" disabled={!(this.state.userName && this.state.password)}
                  onClick={this.handleFormSubmit}
                >Login</button>
              </form>
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