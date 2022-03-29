import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
  <div className='header'>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='navlink-option' as={Link} to={"/home"}>
            <img className='header-logo' src="" alt="" />
            MAHFUZ AHMED
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  as={Link} to={"/home"}>Home</Nav.Link>
            <Nav.Link  as={Link} to={"/projects"}>Projects</Nav.Link>
            <Nav.Link  as={Link} to={"/skills"}>Skills</Nav.Link>    
          </Nav>
          <Nav>
              
          <Nav.Link  as={Link} to={"/about"}>About</Nav.Link>
          <Nav.Link  as={Link} to={"/contact"}>Contact</Nav.Link>     
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  </div>
    
    );
};

export default Header;