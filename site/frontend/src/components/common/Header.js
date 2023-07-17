import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {

  return (
    <header className="App-header">
      <Navbar className="App-header" collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <LinkContainer to ="/">
            <Navbar.Brand className="headerLogo">
              Leandro Damasio
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to='/about'>
                <Nav.Link className="headerDropdown">
                  About
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/works">
                <Nav.Link className="headerDropdown">
                  Works
                </Nav.Link>
              </LinkContainer>
              <NavDropdown 
                title="Projects" 
                id="collasible-nav-dropdown"
              >             
                <LinkContainer to='/robson-bot'>
                  <NavDropdown.Item className="headerDropdow  n">
                    Robson Bot
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <Nav>
              <LinkContainer to='/blog'>
                <Nav.Link className="headerDropdown">
                  Blog
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link className="headerDropdown">
                  Contato
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header
