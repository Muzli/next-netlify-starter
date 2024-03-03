import SimpleLayout from '../components/layout/simple';
import { Container, Row, Col, SSRProvider } from 'react-bootstrap';

// Vörulistasíðan er með filter fyrir
// ->Tegund
// ->Árgerð
// ->Dekkjastærð
// ->Felgubreidd
// Og cards fyrir vörur

export default function Catalog() {
  return (
    <SSRProvider>
      <SimpleLayout>
        <Container>
          <Row>
            <Col className="col-12 text-center mb-2">
              <h1>Brettakantar fyrir [Framleiðandi]</h1>
            </Col>
          </Row>
        </Container>
      </SimpleLayout>
    </SSRProvider>
  )
}