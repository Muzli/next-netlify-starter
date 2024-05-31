import { Nav, Navbar, Image, NavDropdown, NavItem } from 'react-bootstrap';
import { React, useContext } from 'react';
import LanguageContext from '../../utilities/Language/languageContext.js';
import Dictionary from 'utilities/Language/dictionary.js';

// See https://react-bootstrap.netlify.app/components/navbar/
// https://react-bootstrap.netlify.app/components/navbar/#responsive-behaviors for collapsible
// for instructions for current react-bootstrap version (2.7.2)

//On smaller screens:
// Move icon to center of Navbar

function CustomNavbar() {

  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="navbarShadow">
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
          <NavDropdown title={Dictionary()[language]["navbar"]["catalog"]} id="collasible-nav-dropdown">
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
          <Nav.Link href="/tjonaskodun">{Dictionary()[language]["navbar"]["inspection"]}</Nav.Link>
          <Nav.Link href="/myndasafn">{Dictionary()[language]["navbar"]["gallery"]}</Nav.Link>
          <Nav.Link href="#about">{Dictionary()[language]["navbar"]["about"]}</Nav.Link>
        </Nav>
        <Nav>
          <NavItem>
            {language === 'is' && ( 
              <img id="en-flag" className="flag"
                    alt="United States"
                    src="/flags/en.png"
                    onClick={() => { setLanguage('en') }}/>
            )}
            {language === 'en' && (
              <img id="is-flag" className="flag"
                    alt="Ísland"
                    src="/flags/is.svg"
                    onClick={() => { setLanguage('is') }}/>
            )}
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;