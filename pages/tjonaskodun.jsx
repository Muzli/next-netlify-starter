import Link from 'next/link'
import SimpleLayout from '../components/layout/simple'
import { Container, Row, Col } from 'react-bootstrap';

export default function Tjonaskodun(initialData) {
  return (
    <SimpleLayout>
      <Container>
        <h1>Réttingar</h1>
        <p>Einhver texti</p>
        <h1>Sprautun</h1>
        <p>Einhver texti</p>
      </Container>
    </SimpleLayout>
  )
}