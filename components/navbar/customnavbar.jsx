import { Nav, Navbar, Image } from 'react-bootstrap';
import { React } from 'react'

// See https://react-bootstrap.netlify.app/components/navbar/
// https://react-bootstrap.netlify.app/components/navbar/#responsive-behaviors for collapsible
// for instructions for current react-bootstrap version (2.7.2)

//On smaller screens:
// Move icon to center of Navbar

function CustomNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <Image src="/formverk_logo.png"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/articles">Réttingar</Nav.Link>
          <Nav.Link href="/write">Sprautun</Nav.Link>
          <Nav.Link href="/write">Brettakantar</Nav.Link>
          <Nav.Link href="/write">Formgerð</Nav.Link>
          <Nav.Link href="#about">Um okkur</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;