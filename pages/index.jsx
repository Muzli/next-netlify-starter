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
          <Col className="d-flex col-xs-12 col-l-6 bg-secondary default-cell-height garage-background-img justify-content-center align-items-center">
            <div className="display-2 text-white">
              <strong>Réttingar</strong>
            </div>
          </Col>
          <Col className="d-flex col-xs-12 col-l-6 bg-secondary default-cell-height paint-background-img justify-content-center align-items-center">
            <div className="display-2 text-white">
              <strong>Sprautun</strong>
            </div>
          </Col>
        </Row>
        <Row> 
          <Col className="d-flex col-xs-12 col-l-6 bg-secondary default-cell-height lc-background-img justify-content-center align-items-center">
            <div className="display-2 text-white">
              <strong>Brettakantar</strong>
            </div>
          </Col>
          <Col className="d-flex col-xs-12 col-l-6 bg-secondary   default-cell-height spoiler-background-img justify-content-center align-items-center">
            <div className="display-2 text-white">
              <strong>Formgerð</strong>
            </div>
          </Col>
        </Row>
      </Container>
    </SimpleLayout>
  )
}
