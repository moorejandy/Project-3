import React from "react";
import { Link } from "react-router-dom";

export function Nav1() {

  return (
    <nav class="navbar border border-success fixed-top">
      <a class="navbar-brand" href="/">
        <img class="appLogo" src="thrive1.png">
        </img></a>

      <form class="form-inline my-2 my-lg-10">
        <Link className="nav-signup nb-b1" to="/login">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">LOGIN</button>
        </Link>
        <Link className="nav-signup nb-b2" to="/signup">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">SIGNUP</button>
        </Link>
      </form>
    </nav>
  );
}

export function Nav2() {
  return (
    <nav class="navbar border border-success fixed-top">
      <a class="navbar-brand" href="/">
        <img class="appLogo" src="thrive1.png">
        </img></a>
    </nav>
  );
}

export function Nav3() {
  return (
    <nav class="navbar navbar-expand-lg bg-light border border-success">
      <a class="navbar-brand" href="/user">
        <img class="appLogo" src="thrive1.png">
        </img></a>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active border border-success border-bottom-0  rounded">
            <a class="nav-link nav-li1" href="/user">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active border border-success border-bottom-0  rounded">
            <a class="nav-link  nav-li2" href="/userid">My Recipes</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <Link className="nav-signup" to="/">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">LOGOUT</button>
          </Link>
        </form>
      </div>
    </nav>
  );
}

export function Nav4() {
  return (
    <nav class="navbar navbar-expand-lg bg-light border border-success">
      <a class="navbar-brand" href="/user">
        <img class="appLogo" alt="Thrive" src="thrive2.png">
        </img></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active border border-success border-bottom-0  rounded">
            <a class="nav-link nav-li3" href="/user">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active border border-success border-bottom-0  rounded">
            <a class="nav-link nav-li4" href="/userid">My Recipes</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <Link className="nav-signup" to="/">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">LOGOUT</button>
          </Link>
        </form>
      </div>
    </nav>
  );
}