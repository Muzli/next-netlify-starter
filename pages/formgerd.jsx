import SimpleLayout from '../components/layout/simple'
import { Container, Row, Col, SSRProvider } from 'react-bootstrap';

export default function Formgerd() {
  return (
    <SSRProvider>
      <SimpleLayout>
        <Container>
          <h1>Formgerð</h1>
          <p>Einhver texti</p>
        </Container>
      </SimpleLayout>
    </SSRProvider>
  )
}