import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">MyCounter</Navbar.Brand>
    </Navbar>
  );
}

export default NavBar;
