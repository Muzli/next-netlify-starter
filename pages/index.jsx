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
          <Col className="d-flex col-xs-12 col-l-6 bg-primary default-cell-height garage-background-img justify-content-center align-items-center">
            <div>
              Réttingar
            </div>
          </Col>
          <Col className="d-flex col-xs-12 col-l-6 bg-secondary default-cell-height paint-background-img justify-content-center align-items-center">
            <div>
              Sprautun
            </div>
          </Col>
        </Row>
        <Row> 
          <Col className="d-flex col-xs-12 col-l-6 bg-success default-cell-height lc-background-img justify-content-center align-items-center">
            <div>
              Brettakantar
            </div>
          </Col>
          <Col className="d-flex col-xs-12 col-l-6 bg-danger default-cell-height spoiler-background-img justify-content-center align-items-center">
            <div>
              Formgerð
            </div>
          </Col>
        </Row>
      </Container>
    </SimpleLayout>
  )
}
