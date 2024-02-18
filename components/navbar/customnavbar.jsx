import { Nav, Navbar, Image, NavDropdown } from 'react-bootstrap';
import { React } from 'react'

// See https://react-bootstrap.netlify.app/components/navbar/
// https://react-bootstrap.netlify.app/components/navbar/#responsive-behaviors for collapsible
// for instructions for current react-bootstrap version (2.7.2)

//On smaller screens:
// Move icon to center of Navbar

function CustomNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="/" className="m-auto">
        <Image 
          src="/formverk_logo.png"
          width="120"
          height="70"
          className="d-inline-block align-top"
          alt="Formverk logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Brettakantar" id="collasible-nav-dropdown">
            <NavDropdown.Item href='/catalog_dodge'>Dodge</NavDropdown.Item>
            <NavDropdown.Item href='/catalog_chevrolet'>Chevrolet</NavDropdown.Item>
            <NavDropdown.Item href='/catalog_jeep'>Jeep</NavDropdown.Item>
            <NavDropdown.Item href='/catalog_ford'>Ford</NavDropdown.Item>
            <NavDropdown.Item href='/catalog_musso'>Musso</NavDropdown.Item>
            <NavDropdown.Item href='/catalog_isuzu'>Isuzu</NavDropdown.Item>
            <NavDropdown.Item href='/catalog_landrover'>Land Rover</NavDropdown.Item>
            <NavDropdown.Item href='/catalog_iveco'>Iveco</NavDropdown.Item>
            <NavDropdown.Item href='/catalog_toyota'>Toyota</NavDropdown.Item>
            <NavDropdown.Item href='/catalog_nissan'>Nissan</NavDropdown.Item>
            <NavDropdown.Item href='/catalog_mitsubishi'>Mitsubishi</NavDropdown.Item>
            <NavDropdown.Item href='/catalog_benz'>Mercedes Benz</NavDropdown.Item>
            <NavDropdown.Item href='/catalog_suzuki'>Suzuki</NavDropdown.Item>
            <NavDropdown.Item href='/catalog_volkswagen'>Volkswagen</NavDropdown.Item>
            <NavDropdown.Item href='/catalog_scaut'>Scaut</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/tjonaskodun">Tjónaskoðun</Nav.Link>
          <Nav.Link href="/myndasafn">Myndasafn</Nav.Link>
          <Nav.Link href="#about">Um okkur</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;