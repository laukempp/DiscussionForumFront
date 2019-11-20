import React from "react";
import Navbar from "react-bootstrap/navbar";
import Nav from "react-bootstrap/nav";
import NavbarBrand from "react-bootstrap/navbarbrand";
import { Link } from "react-router-dom";

const Navigation = props => {
  return (
    <Navbar className="navbar bg-success">
      <NavbarBrand>{props.title}</NavbarBrand>
      <Nav.Item>
        <Nav.Link eventKey={1} as={Link} to="/">
          Koti
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={2} as={Link} to="/topics">
          Keskustelut
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={3} as={Link} to="/topicsform">
          Uusi keskustelu
        </Nav.Link>
      </Nav.Item>
    </Navbar>
  );
};

export default Navigation;
