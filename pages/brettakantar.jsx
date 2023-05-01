import SimpleLayout from '../components/layout/simple'
import { Container, Row, Col } from 'react-bootstrap';

// Vera með 2 dropdown lista vinstra megin
// Annar fyrir bílgerð
// Hinn fyrir dekkjastærð

// Vera með 2 lista af anchor links undir Brettakantar
// Annar fyrir bílgerð
// Hinn fyrir dekkjastærð
// Þegar smellt er á atriði í öðrum hvorum listanum 
// þá filterast hinn listinn eftir þeim vörum sem eru í boði

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