import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


const NavHome = () => {
  return (
    <>
      <div>
        <Navbar bg="light" variant="light" fixed="top" expand="sm" collapseOnSelect className="navList justify-content-between">
          <Navbar.Brand>
            <a href="#home" className="brand">KUBER E-BIKES</a>

          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav className="m-auto">
              <Nav.Link className="navItem" href="#home">HOME</Nav.Link>
              <Nav.Link className="navItem" href="#about">ABOUT</Nav.Link>
              <NavDropdown className="navItem" title="MODELS">
                <NavDropdown.Item href="#products/Juniper">Juniper</NavDropdown.Item>
                <NavDropdown.Item href="#products/Festiva">Festiva</NavDropdown.Item>
                <NavDropdown.Item href="#products/Vamos">Vamos</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="navItem" href="#dealer">BECOME A DEALER</Nav.Link>
            </Nav>
          </Navbar.Collapse>


        </Navbar>

      </div>
    </>
  );
};

export default NavHome;