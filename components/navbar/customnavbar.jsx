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
      <Link href="/" passHref>
        <Navbar.Brand href="/" className="m-auto">
          <Image 
            src="/formverk_logo.png"
            width="120"
            height="70"
            className="d-inline-block align-top"
            alt="Formverk logo"/>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title={Dictionary()[language]["navbar"]["catalog"]} id="collasible-nav-dropdown">
            <Link href="/catalog_dodge" passHref>
              <NavDropdown.Item onClick={(e) => {e.preventDefault(); router.push('/catalog_dodge');}}>Dodge</NavDropdown.Item>
            </Link>
            <Link href="/catalog_chevrolet" passHref>
              <NavDropdown.Item onClick={(e) => {e.preventDefault(); router.push('/catalog_chevrolet');}}>Chevrolet</NavDropdown.Item>
            </Link>
            <Link href="/catalog_jeep" passHref>
              <NavDropdown.Item onClick={(e) => {e.preventDefault(); router.push('/catalog_jeep');}}>Jeep</NavDropdown.Item>
            </Link>
            <Link href="/catalog_ford" passHref>
              <NavDropdown.Item onClick={(e) => {e.preventDefault(); router.push('/catalog_ford');}}>Ford</NavDropdown.Item>
            </Link>
            <Link href="/catalog_grenadier" passHref>
              <NavDropdown.Item onClick={(e) => {e.preventDefault(); router.push('/catalog_grenadier');}}>Grenadier</NavDropdown.Item>
            </Link>
            <Link href="/catalog_musso" passHref>
              <NavDropdown.Item onClick={(e) => {e.preventDefault(); router.push('/catalog_musso');}}>Musso & Rexton</NavDropdown.Item>
            </Link>
            <Link href="/catalog_isuzu" passHref>
              <NavDropdown.Item onClick={(e) => {e.preventDefault(); router.push('/catalog_isuzu');}}>Isuzu</NavDropdown.Item>
            </Link>
            <Link href="/catalog_iveco" passHref>
              <NavDropdown.Item onClick={(e) => {e.preventDefault(); router.push('/catalog_iveco');}}>Iveco</NavDropdown.Item>
            </Link>
            <NavDropdown title="Toyota" id="collasible-nav-dropdown-toyota" className="navbar-submenu-header">
              <Link href="/catalog_toyota" passHref>
                <NavDropdown.Item onClick={(e) => {e.preventDefault(); router.push('/catalog_toyota?model=lc_70');}}>LC 70</NavDropdown.Item>
              </Link>
              <Link href="/catalog_toyota" passHref>
                <NavDropdown.Item onClick={(e) => {e.preventDefault(); router.push('/catalog_toyota?model=lc_80');}}>LC 80</NavDropdown.Item>
              </Link>
              <Link href="/catalog_toyota" passHref>
                <NavDropdown.Item onClick={(e) => {e.preventDefault(); router.push('/catalog_toyota?model=lc_90');}}>LC 90</NavDropdown.Item>
              </Link>
              <Link href="/catalog_toyota" passHref>
                <NavDropdown.Item onClick={(e) => {e.preventDefault(); router.push('/catalog_toyota?model=lc_100');}}>LC 100</NavDropdown.Item>
              </Link>
              <Link href="/catalog_toyota" passHref>
                <NavDropdown.Item onClick={(e) => {e.preventDefault(); router.push('/catalog_toyota?model=lc_150');}}>LC 150</NavDropdown.Item>
              </Link>
              <Link href="/catalog_toyota" passHref>
                <NavDropdown.Item onClick={(e) => {e.preventDefault(); router.push('/catalog_toyota?model=lc_200');}}>LC 200</NavDropdown.Item>
              </Link>
              <Link href="/catalog_toyota" passHref>
                <NavDropdown.Item onClick={(e) => {e.preventDefault(); router.push('/catalog_toyota?model=lc_250');}}>LC 250</NavDropdown.Item>
              </Link>
              <Link href="/catalog_toyota" passHref>
                <NavDropdown.Item onClick={(e) => {e.preventDefault(); router.push('/catalog_toyota?model=hilux');}}>Hilux</NavDropdown.Item>
              </Link>
              <Link href="/catalog_toyota" passHref>
                <NavDropdown.Item onClick={(e) => {e.preventDefault(); router.push('/catalog_toyota?model=tacoma');}}>Tacoma</NavDropdown.Item>
              </Link>
            </NavDropdown>
            <Link href="/catalog_nissan" passHref>
              <NavDropdown.Item onClick={(e) => {e.preventDefault(); router.push('/catalog_nissan');}}>Nissan</NavDropdown.Item>
            </Link>
            <Link href="/catalog_mitsubishi" passHref>
              <NavDropdown.Item onClick={(e) => {e.preventDefault(); router.push('/catalog_mitsubishi');}}>Mitsubishi</NavDropdown.Item>
            </Link>
            <Link href="/catalog_benz" passHref>
              <NavDropdown.Item onClick={(e) => {e.preventDefault(); router.push('/catalog_benz');}}>Mercedes Benz</NavDropdown.Item>
            </Link>
            <Link href="/catalog_suzuki" passHref>
              <NavDropdown.Item onClick={(e) => {e.preventDefault(); router.push('/catalog_suzuki');}}>Suzuki</NavDropdown.Item>
            </Link>
            <Link href="/catalog_volkswagen" passHref>
              <NavDropdown.Item onClick={(e) => {e.preventDefault(); router.push('/catalog_volkswagen');}}>Volkswagen</NavDropdown.Item>
            </Link>
            <Link href="/catalog_scaut" passHref>
              <NavDropdown.Item onClick={(e) => {e.preventDefault(); router.push('/catalog_scaut');}}>Scaut</NavDropdown.Item>
            </Link>
          </NavDropdown>
          <Link href="/tjonaskodun" passHref>
            <Nav.Link href="/tjonaskodun">{Dictionary()[language]["navbar"]["inspection"]}</Nav.Link>
          </Link>
          <Link href="/myndasafn" passHref>
            <Nav.Link href="/myndasafn">{Dictionary()[language]["navbar"]["gallery"]}</Nav.Link>
          </Link>
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
                    onClick={() => {  setLanguage('is'); }}/>
            )}
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;