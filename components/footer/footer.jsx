import { Container, Row, Col } from 'react-bootstrap'
import { React } from 'react'

function Footer() {
  return (
    <Container style={{height: '10vh'}}>
      <Row>
        <Col id="about" className="d-flex col-12 justify-content-center align-items-center mt-3">
          <Row>
            <Col className="col-12 text-center">
              Formverk ehf. Bæjarflöt 6, 112 Reykjavík
            </Col>
            <Col className="col-12 text-center">
              Sími: 567 7660 / 898 6471
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex col-12 justify-content-center align-items-center">
          <a href="https://ja.is/kort/?d=hashid%3AxdLZX&x=363571&y=407520&type=map&nz=13.70" target="_blank">Staðsetning á korti já.is</a>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex col-12 justify-content-center align-items-center">
          <p>Opnunartími</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;