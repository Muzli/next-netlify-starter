import SimpleLayout from '../components/layout/simple'
import { Container, Row, Col, SSRProvider } from 'react-bootstrap';

export default function Sprautun() {
  return (
    <SSRProvider>
      <SimpleLayout>
        <Container>
          <h1>Sprautun</h1>
          <p>Einhver texti</p>
        </Container>
      </SimpleLayout>
    </SSRProvider>
  )
}