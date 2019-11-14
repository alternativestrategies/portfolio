import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';
import pdf from '../../Documents/resume.pdf';

const Navigation = () => {
    return (
      <Navbar expand="md" className='pb-4'>
      <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="#about">About</Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link href="#portfolio">
                Work</Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
            <Button className="d-none d-md-block">
              <Nav.Link href={pdf} target='_blank' >Resume</Nav.Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
         
    )
}

export default Navigation;