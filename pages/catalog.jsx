import SimpleLayout from '../components/layout/simple';
import { Container, Row, Col } from 'react-bootstrap';

// Vörulistasíðan er með filter fyrir
// ->Tegund
// ->Árgerð
// ->Dekkjastærð
// ->Felgubreidd
// Og cards fyrir vörur

export default function Catalog() {
  return (
    <SimpleLayout>
      <Container>
        <Row>
          <Col className="col-12 text-center mb-2">
            <h1>Brettakantar fyrir [Framleiðandi]</h1>
          </Col>
        </Row>
      </Container>
    </SimpleLayout>
  )
}