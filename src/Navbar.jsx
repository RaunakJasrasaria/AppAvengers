import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function Navbar(){
  return(
    <ReactBootStrap.Navbar bg="light" fixed="top" expand="lg" >
  <ReactBootStrap.Navbar.Brand className="elementnavmain" href="#">Rewy</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
  <ReactBootStrap.Navbar fixed="top" />
  <ReactBootStrap.Navbar.Collapse id="navbarScroll">
    <ReactBootStrap.Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
    <ReactBootStrap.NavDropdown title="Home" className="elementnavfirst" id="navbarScrollingDropdown">
      <ReactBootStrap.NavDropdown.Item href="#action3">Action</ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item href="#action4">Another action</ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Divider />
      <ReactBootStrap.NavDropdown.Item href="#action5">Something else here</ReactBootStrap.NavDropdown.Item>
    </ReactBootStrap.NavDropdown>
    <ReactBootStrap.NavDropdown title="About Us" className="elementnav" id="navbarScrollingDropdown">
      <ReactBootStrap.NavDropdown.Item href="#action3">History</ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item href="#action4">Testimonials</ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Divider />
      <ReactBootStrap.NavDropdown.Item href="#action5">Team One</ReactBootStrap.NavDropdown.Item>
    </ReactBootStrap.NavDropdown>
    <ReactBootStrap.NavDropdown title="Services" className="elementnav" id="navbarScrollingDropdown">
      <ReactBootStrap.NavDropdown.Item href="#action3">Action</ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item href="#action4">Another action</ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Divider />
      <ReactBootStrap.NavDropdown.Item href="#action5">Something else here</ReactBootStrap.NavDropdown.Item>
    </ReactBootStrap.NavDropdown>
    <ReactBootStrap.NavDropdown title="Case Studies" className="elementnav" id="navbarScrollingDropdown">
      <ReactBootStrap.NavDropdown.Item href="#action3">Action</ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item href="#action4">Another action</ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Divider />
      <ReactBootStrap.NavDropdown.Item href="#action5">Something else here</ReactBootStrap.NavDropdown.Item>
    </ReactBootStrap.NavDropdown>
      <ReactBootStrap.NavDropdown title="Pages" className="elementnav" id="navbarScrollingDropdown">
        <ReactBootStrap.NavDropdown.Item href="#action3">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action4">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action5">Something else here</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.NavDropdown title="Blog" className="elementnav" id="navbarScrollingDropdown">
        <ReactBootStrap.NavDropdown.Item href="#action3">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action4">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action5">Something else here</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>

    </ReactBootStrap.Nav>
    <ReactBootStrap.Form className="d-flex elementnav">
      <ReactBootStrap.FormControl
        type="search"
        placeholder="Search for anything"
        className="mr-2"
        aria-label="Search"
      />
      <button className="buttonone">Get Started</button>
    </ReactBootStrap.Form>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
  );
}

export default Navbar;
