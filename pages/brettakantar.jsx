import SimpleLayout from '../components/layout/simple'
import { Container, Row, Col } from 'react-bootstrap';

export default function Brettakantar() {
  return (
    <SimpleLayout>
      <Container>
        <h1>Vörulisti</h1>
        <p>Einhver texti/listi/hlekkir</p>
        <h1>Mótagerð</h1>
        <p>Frumstykkjasmíð og mótagerð er í höndum Formverks.</p>
      </Container>
    </SimpleLayout>
  )
}