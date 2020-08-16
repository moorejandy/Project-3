import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import UserForm from "./pages/UserForm";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import SavedRecipePage from "./pages/SavedRecipePage";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  render() {
    return (
      <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={UserForm} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/user" component={UserPage} />
          <Route exact path="/userid" component={SavedRecipePage} /> 
          </Switch>
    </Router>
    </div>
    );
  }
}

export default App;
