import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import UserForm from "./components/UserForm";


class App extends Component {
  render() {
    return (
      // <Router>
      <div>
        <Nav />
        <UserForm />
        {/* <Switch>
          <Route exact path="/form" component={Form} />
          <Route exact path="/" component={Books} />
          <Route exact path="/books/:id" component={Detail} /> */}
          {/* /* <Route component={NoMatch} />
        </Switch> */}
      </div>
    // </Router>

    );
  }
}

export default App;
