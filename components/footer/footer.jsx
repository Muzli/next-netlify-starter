import { Container, Row, Col } from 'react-bootstrap'
import { React, useContext } from 'react';
import LanguageContext from '../../utilities/Language/languageContext.js';
import Dictionary from 'utilities/Language/dictionary';

function Footer() {

  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <Container>
      <Row>
        <Col id="about" className="d-flex col-12 justify-content-center align-items-center mt-3">
          <Row>
            <Col className="col-12 text-center">
              Formverk ehf. Bæjarflöt 6, 112 Reykjavík
            </Col>
            <Col className="col-12 text-center">
              {Dictionary()[language]["footer"]["phone"]}: 567 7660
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex col-12 justify-content-center align-items-center">
          <a href="https://ja.is/kort/?d=hashid%3AxdLZX&x=363571&y=407520&type=map&nz=13.70" target="_blank">{Dictionary()[language]["footer"]["location"]}</a>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex col-12 justify-content-center align-items-center">
          <p>{Dictionary()[language]["footer"]["opening_hours"]}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;