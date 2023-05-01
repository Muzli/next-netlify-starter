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
          <Col className="col-12 text-lg-center">
            <h1>Framleiðendur</h1>
          </Col>
        </Row>
        <Row>
          <MakerIndexCard backgroundClass='lc-background-img' url='/catalog?maker=dodge_ram' title='Dodge' />
          <MakerIndexCard backgroundClass='lc-background-img' url='/catalog?maker=chevrolet_gmc' title='Chevrolet' />
          <MakerIndexCard backgroundClass='lc-background-img' url='/catalog?maker=jeep' title='Jeep' />
          <MakerIndexCard backgroundClass='lc-background-img' url='/catalog?maker=ford' title='Ford' />
          <MakerIndexCard backgroundClass='lc-background-img' url='/catalog?maker=musso' title='Musso' />
          <MakerIndexCard backgroundClass='lc-background-img' url='/catalog?maker=isuzu' title='Isuzu' />
          <MakerIndexCard backgroundClass='lc-background-img' url='/catalog?maker=land_rover' title='Land Rover' />
          <MakerIndexCard backgroundClass='lc-background-img' url='/catalog?maker=iveco' title='Iveco' />
          <MakerIndexCard backgroundClass='lc-background-img' url='/catalog?maker=toyota' title='Toyota' />
          <MakerIndexCard backgroundClass='lc-background-img' url='/catalog?maker=nissan' title='Nissan' />
          <MakerIndexCard backgroundClass='lc-background-img' url='/catalog?maker=mitsubishi' title='Mitsubishi' />
          <MakerIndexCard backgroundClass='lc-background-img' url='/catalog?maker=benz' title='Mercedes Benz' />
          <MakerIndexCard backgroundClass='lc-background-img' url='/catalog?maker=suzuki' title='Suzuki' />
          <MakerIndexCard backgroundClass='lc-background-img' url='/catalog?maker=volkswagen' title='Volkswagen' />
          <MakerIndexCard backgroundClass='lc-background-img' url='/catalog?maker=scaut' title='Scaut' />
        </Row>
        <p>Einhver texti/listi/hlekkir</p>
        <h1>Mótagerð</h1>
        <p>Frumstykkjasmíð og mótagerð er í höndum Formverks.</p>
      </Container>
    </SimpleLayout>
  )
}