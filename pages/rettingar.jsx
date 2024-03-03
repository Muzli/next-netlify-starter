import Link from 'next/link'
import SimpleLayout from '../components/layout/simple'
import { Container, Row, Col, SSRProvider } from 'react-bootstrap';

export default function Rettingar(initialData) {
  return (
    <SSRProvider>
      <SimpleLayout>
        <Container>
          <h1>Réttingar</h1>
          <p>Einhver texti</p>
        </Container>
      </SimpleLayout>
    </SSRProvider>
  )
}