import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>North Central Collision and Auto Salvage Header.js</Navbar.Brand>
        <NavItem><Link to="/vehicles" className="nav-link">Home</Link></NavItem>
      </Navbar>
    )
  }
}

export default Header;
