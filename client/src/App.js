import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import UserForm from "./pages/UserForm";


class App extends Component {
  render() {
    return (
      <div>
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/form" component={UserForm} />
          {/* <Route exact path="/user" component={userPage} /> */}
          {/* <Route exact path="/user/:id" component={Detail} />  */}
          </Switch>
    </Router>
    </div>
    );
  }
}

export default App;
