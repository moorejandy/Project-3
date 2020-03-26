import React, { Component } from "react";
import API from "../../utils/API";
import { Nav2 } from "../../components/Nav";
import { Container, Col, Row } from "../../components/Grid";
import Footer from "../../components/Footer";

class UserForm extends Component {
  state = {
    userName: "",
    password: ""
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
    if (this.state.userName) {
      API.getUserId({
        userName: this.state.userName
        // password: this.state.password
      }).then(results => {
        console.log(results);
        window.sessionStorage.setItem('userId', results.data[0]._id);

      })
        .catch(err => console.log(err.response));
    };

    this.props.history.push('/user');
    // console.log(this.state.userName + "-----" + this.state.password);
  };
  // function UserForm(){
  render() {
    return (
      <div>
        <Nav2 />
        <Container>
          <Row>
            <Col size="md-6 s8">
              <div class="infoDiv">
                <h1 class="display-4">Information</h1>
                <hr class="loginLine" />
              </div>
            </Col>
            <Col size="md-4 s9">
              <div class="loginDiv">
                <h1 class="display-4">Login Form </h1>
                <hr class="loginLine" />
                <form>
                  <div class="form-group">
                    <label for="formGroupExampleInput">User Name</label>
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