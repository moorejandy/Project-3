import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import UserForm from "./pages/UserForm";
import HomePage from "./pages/HomePage";
import userPage from "./pages/userPage";


class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Switch>
          <Route exact path="/form" component={UserForm} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user" component={userPage} />
          {/* <Route exact path="/user/:id" component={Detail} />  */}
          </Switch>
    </Router>
    </div>
    );
  }
}

export default App;
