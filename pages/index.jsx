import SimpleLayout from '../components/layout/simple'
import IndexCard from '../components/layout/indexcard'
import { Row, Col, SSRProvider } from 'react-bootstrap';

// Make new versions of background images
// With 50-75% opacity
// Different sizes for different viewscreen sizes

// Nota mynd af crúsernum hans pabba fyrir bakgrunn brettakanta
// Pabbi sendir mynd, muna að afmá bílnúmer
// Myndin sem við erum með núna getur kannski virkað ágætlega 
// ef letrið er ekki miðjað í reitnum heldur yfir himninum

// Fyrir tjónaskoðun, taka einhverja fína mynd innan úr verkstæði
// Muna að afmá bílnúmer ef einhver sjást á mynd

// Bæta leitarreit í haus til að leita í vörulista

// Vill pabbi að verðin komi fram í vörulistanum?

export default function Home(initialData) {
  return (   
    <SSRProvider> 
      <SimpleLayout>    
        <Row>
          <IndexCard backgroundClass='lc-background-img' url='/brettakantar' title='Brettakantar' />
          <IndexCard backgroundClass='garage-background-img' url='/tjonaskodun' title='Tjónaskoðun' />        
        </Row>
        <Row>
          <Col id='coop-index-header' className="d-flex col-12 mt-3 text-lg-center justify-content-center justify-content-lg-start">
            <h1>Samstarfsaðilar</h1>
          </Col>
        </Row>
        <Row>
          <Col className="col-6 col-lg-3">
            Aðili 1
          </Col>
          <Col className="col-6 col-lg-3">
            Aðili 2
          </Col>
          <Col className="col-6 col-lg-3">
            Aðili 3
          </Col>
          <Col className="col-6 col-lg-3">
            Aðili 4
          </Col>
          <Col className="col-6 col-lg-3">
            Aðili 5
          </Col>
          <Col className="col-6 col-lg-3">
            Aðili 6
          </Col>
        </Row>
      </SimpleLayout>
    </SSRProvider>
  )
}
