import SimpleLayout from '../components/layout/simple'
import { Container, Row, Col } from 'react-bootstrap';

// Make new versions of background images
// With 50-75% opacity
// Different sizes for different viewscreen sizes

export default function Home(initialData) {
  return (    
    <SimpleLayout>
    <Container> 
        <Row> 
          <Col className="d-flex col-12 col-lg-6 bg-secondary default-cell-height garage-background-img justify-content-center align-items-center position-relative">
            <div className="display-2 text-white">
              <a className="stretched-link index-link" href="/rettingar"><strong>Réttingar</strong></a>
            </div>
          </Col>
          <Col className="d-flex col-12 col-lg-6 bg-secondary default-cell-height paint-background-img justify-content-center align-items-center position-relative">
            <div className="display-2 text-white">
              <a className="stretched-link index-link" href="/sprautun"><strong>Sprautun</strong></a>
            </div>
          </Col>
        </Row>
        <Row> 
          <Col className="d-flex col-12 col-lg-6 bg-secondary default-cell-height lc-background-img justify-content-center align-items-center position-relative">
            <div className="display-2 text-white">
              <a className="stretched-link index-link" href="/brettakantar"><strong>Brettakantar</strong></a>
            </div>
          </Col>
          <Col className="d-flex col-12 col-lg-6 bg-secondary default-cell-height spoiler-background-img justify-content-center align-items-center position-relative">
            <div className="display-2 text-white">
              <a className="stretched-link index-link" href="/formgerd"><strong>Formgerð</strong></a>
            </div>
          </Col>
        </Row>
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
            <ul>
              <li>Opnunartími</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </SimpleLayout>
  )
}
