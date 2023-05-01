import SimpleLayout from '../components/layout/simple'
import { Container, Row, Col } from 'react-bootstrap';

// Vera með grid fyrir bílaframleiðendur
// 5 cols 3 rows á desktop
// 3 cols 5 rows á mobile

// Hver reitur er takki sem loadar vörulistasíðu
// með vörum frá viðkomandi framleiðanda

// Vörulistasíðan er með filter fyrir
// ->Tegund
// ->Árgerð
// ->Dekkjastærð
// ->Felgubreidd
// Og cards fyrir vörur

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