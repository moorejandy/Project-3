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
        sessionStorage.setItem('userId', results.data[0]._id);

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