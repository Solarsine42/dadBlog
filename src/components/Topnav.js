import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";

const Topnav = props => {
  return (
    <Navbar bg="light" variant="dark">
      <Navbar.Brand>
        <Link to="/">
          <strong>Pondering Parenthood with John</strong>
        </Link>
      </Navbar.Brand>
      <Nav.Item>
        <Nav.Link>
          <Link to="/cars">Users</Link>
        </Nav.Link>
      </Nav.Item>
    </Navbar>
  );
};

export default connect()(Topnav);
