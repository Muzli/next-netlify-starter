import SimpleLayout from '../components/layout/simple'
import { Container, Row, Col } from 'react-bootstrap';

export default function Home(initialData) {
  return (    
    <SimpleLayout>
    <Container> 
        <Row> 
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row> 
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </SimpleLayout>
  )
}
