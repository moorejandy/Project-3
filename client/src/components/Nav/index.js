import React from "react";
import {Link} from "react-router-dom";

function Nav() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Recipe App
      </a>
      <Link to="/form"><button type="button" className="btn btn-sucess">Sign Up</button></Link>
    </nav>
  );
}

export default Nav;
