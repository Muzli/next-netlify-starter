import SimpleLayout from '../components/layout/simple'
import { Row, Col } from 'react-bootstrap';

// Make new versions of background images
// With 50-75% opacity
// Different sizes for different viewscreen sizes

export default function Home(initialData) {
  return (    
    <SimpleLayout>    
      <Row>
        <Col className="d-flex col-12 col-lg-6 bg-secondary default-cell-height lc-background-img justify-content-center align-items-center position-relative">
          <div className="display-2 text-white">
            <a className="stretched-link index-link" href="/brettakantar"><strong>Brettakantar</strong></a>
          </div>
        </Col>
        <Col className="d-flex col-12 col-lg-6 bg-secondary default-cell-height garage-background-img justify-content-center align-items-center position-relative">
          <div className="display-2 text-white">
            <a className="stretched-link index-link" href="/tjonaskodun"><strong>Tjónaskoðun</strong></a>
          </div>
        </Col>          
      </Row>
      <Row>
        <Col id='coop-index-header' className="d-flex col-12 mt-3 text-lg-center justify-content-center justify-content-lg-start">
          <h1>Samstarfsaðilar</h1>
        </Col>
      </Row>
      <Row>
        <Col className="col-12">
          <ul>
            <li>Aðili 1</li>
            <li>Aðili 2</li> 
            <li>Aðili 3</li>
            <li>Aðili 4</li>
            <li>Aðili 5</li>
            <li>Aðili 6</li> 
          </ul>
        </Col>
      </Row>
    </SimpleLayout>
  )
}
