import SimpleLayout from '../components/layout/simple'
import MakerIndexCard from '../components/layout/makerindexcard'
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
        <Row>
          <Col className="col-12 text-center mb-2">
            <h1>Framleiðendur</h1>
          </Col>
        </Row>
        <Row>
          <MakerIndexCard url='/catalog?maker=dodge_ram' title='Dodge' />
          <MakerIndexCard url='/catalog?maker=chevrolet_gmc' title='Chevrolet' />
          <MakerIndexCard url='/catalog?maker=jeep' title='Jeep' />
          <MakerIndexCard url='/catalog?maker=ford' title='Ford' />
          <MakerIndexCard url='/catalog?maker=musso' title='Musso' />
          <MakerIndexCard url='/catalog?maker=isuzu' title='Isuzu' />
          <MakerIndexCard url='/catalog?maker=land_rover' title='Land Rover' />
          <MakerIndexCard url='/catalog?maker=iveco' title='Iveco' />
          <MakerIndexCard url='/catalog?maker=toyota' title='Toyota' />
          <MakerIndexCard url='/catalog?maker=nissan' title='Nissan' />
          <MakerIndexCard url='/catalog?maker=mitsubishi' title='Mitsubishi' />
          <MakerIndexCard url='/catalog?maker=benz' title='Mercedes Benz' />
          <MakerIndexCard url='/catalog?maker=suzuki' title='Suzuki' />
          <MakerIndexCard url='/catalog?maker=volkswagen' title='Volkswagen' />
          <MakerIndexCard url='/catalog?maker=scaut' title='Scaut' />
        </Row>
        <Row className="mt-5">
          <Col className="col-12 text-center">
            <h1>Mótagerð</h1>
            <p>Frumstykkjasmíð og mótagerð er í höndum Formverks.</p>
          </Col>
        </Row>
      </Container>
    </SimpleLayout>
  )
}