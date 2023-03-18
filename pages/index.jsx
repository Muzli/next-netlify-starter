import SimpleLayout from '../components/layout/simple'
import { Container, Row, Col } from 'react-bootstrap';

export default function Home(initialData) {
  return (    
    <SimpleLayout>
    <Container> 
        <Row> 
          <Col className="col-xs-12 col-l-6 bg-primary default-cell-height garage-background-img"></Col>
          <Col className="col-xs-12 col-l-6 bg-secondary default-cell-height paint-background-img"></Col>
        </Row>
        <Row> 
          <Col className="col-xs-12 col-l-6 bg-success default-cell-height lc-background-img"></Col>
          <Col className="col-xs-12 col-l-6 bg-danger default-cell-height spoiler-background-img"></Col>
        </Row>
      </Container>
    </SimpleLayout>
  )
}
