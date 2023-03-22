import SimpleLayout from '../components/layout/simple'
import { Container, Row, Col } from 'react-bootstrap';

export default function Sprautun() {
  return (
    <SimpleLayout>
      <Container>
        <Row>
          <Col>1 of 2</Col>
        </Row>
      </Container>
    </SimpleLayout>
  )
}