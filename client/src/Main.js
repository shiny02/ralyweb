import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Nav from 'react-bootstrap/Nav'
import Navbar from "react-bootstrap/Navbar";
import ralylogo from "./ralylogo.png";
import GuideView from "./components/guide_view";
import CategoryView from "./components/category_view"
import SubcategoryView from "./components/subcategory_view"
import GetInvolvedPage from "./components/getinvolved"

const Main = () => (
  <Router>
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={ralylogo}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
          {"RALY"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#getinvolved">Get Involved!</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="#background">Background</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="#resources">Resources</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="#merch">Merch</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr />
      <Route exact path="/" component={App} />
      <Route path = "/#getinvolved" component = {GetInvolvedPage} />
      <Route exact path="/guide/:category" component={GuideView} />
      <Route exact path="/:category" component={CategoryView} />
      <Route exact path="/:category/:subcategory" component={GuideView} />
    </div>
  </Router>
);

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// );

export default Main;
