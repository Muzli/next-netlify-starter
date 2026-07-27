import { Nav, Navbar, Image, NavDropdown, NavItem } from 'react-bootstrap';
import { React, useContext } from 'react';
import LanguageContext from '../../utilities/Language/languageContext.js';
import Dictionary from 'utilities/Language/dictionary.js';
import Link from 'next/link';
import { useRouter } from 'next/router';

// See https://react-bootstrap.netlify.app/components/navbar/
// https://react-bootstrap.netlify.app/components/navbar/#responsive-behaviors for collapsible
// for instructions for current react-bootstrap version (2.7.2)

//On smaller screens:
// Move icon to center of Navbar

function CustomNavbar() {

  const router = useRouter();

  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="navbarShadow">
      <Navbar.Brand as={Link} href="/" className="m-auto">
          <Image 
            src="/formverk_logo.png"
            width={120}
            height={70}
            className="d-inline-block align-top"
            alt="Formverk logo"/>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title={Dictionary()[language]["navbar"]["catalog"]} id="collasible-nav-dropdown">
            
              <NavDropdown.Item as={Link} href="/catalog_dodge">Dodge</NavDropdown.Item>
            
            
              <NavDropdown.Item as={Link} href="/catalog_chevrolet">Chevrolet</NavDropdown.Item>
            
            
              <NavDropdown.Item as={Link} href="/catalog_jeep">Jeep</NavDropdown.Item>
            
              <NavDropdown.Item as={Link} href="/catalog_ford">Ford</NavDropdown.Item>
            
              <NavDropdown.Item as={Link} href="/catalog_grenadier">Grenadier</NavDropdown.Item>
            
              <NavDropdown.Item as={Link} href="/catalog_musso">Musso & Rexton</NavDropdown.Item>
            
              <NavDropdown.Item as={Link} href="/catalog_isuzu">Isuzu</NavDropdown.Item>
            
              <NavDropdown.Item as={Link} href="/catalog_iveco">Iveco</NavDropdown.Item>
            
            <NavDropdown title="Toyota" id="collasible-nav-dropdown-toyota" className="navbar-submenu-header">
              
                <NavDropdown.Item as={Link} href="/catalog_toyota?model=lc_70">LC 70</NavDropdown.Item>
              
                <NavDropdown.Item as={Link} href="/catalog_toyota?model=lc_80">LC 80</NavDropdown.Item>
              
                <NavDropdown.Item as={Link} href="/catalog_toyota?model=lc_90">LC 90</NavDropdown.Item>
              
                <NavDropdown.Item as={Link} href="/catalog_toyota?model=lc_100">LC 100</NavDropdown.Item>
              
                <NavDropdown.Item as={Link} href="/catalog_toyota?model=lc_150">LC 150</NavDropdown.Item>
              
                <NavDropdown.Item as={Link} href="/catalog_toyota?model=lc_200">LC 200</NavDropdown.Item>
              
                <NavDropdown.Item as={Link} href="/catalog_toyota?model=lc_250">LC 250</NavDropdown.Item>
              
                <NavDropdown.Item as={Link} href="/catalog_toyota?model=hilux">Hilux</NavDropdown.Item>
              
                <NavDropdown.Item as={Link} href="/catalog_toyota?model=tacoma">Tacoma</NavDropdown.Item>
              
            </NavDropdown>
            
              <NavDropdown.Item as={Link} href="/catalog_nissan">Nissan</NavDropdown.Item>
           
              <NavDropdown.Item as={Link} href="/catalog_mitsubishi">Mitsubishi</NavDropdown.Item>
            
              <NavDropdown.Item as={Link} href="/catalog_benz">Mercedes Benz</NavDropdown.Item>
            
              <NavDropdown.Item as={Link} href="/catalog_suzuki">Suzuki</NavDropdown.Item>
            
              <NavDropdown.Item as={Link} href="/catalog_volkswagen">Volkswagen</NavDropdown.Item>
            
              <NavDropdown.Item as={Link} href="/catalog_scaut">Scaut</NavDropdown.Item>
            
          </NavDropdown>
          
            <Nav.Link as={Link} href="/tjonaskodun">{Dictionary()[language]["navbar"]["inspection"]}</Nav.Link>
          
            <Nav.Link as={Link} href="/myndasafn">{Dictionary()[language]["navbar"]["gallery"]}</Nav.Link>
          
          <Nav.Link as={Link} href="#about">{Dictionary()[language]["navbar"]["about"]}</Nav.Link>
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
                    onClick={() => {  setLanguage('is'); }}/>
            )}
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;