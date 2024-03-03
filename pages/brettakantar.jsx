import SimpleLayout from '../components/layout/simple'
import MakerIndexCard from '../components/layout/makerindexcard'
import { Container, Row, Col, SSRProvider } from 'react-bootstrap';

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
    <SSRProvider>
      <>
        <SimpleLayout>
          <Container>
            <Row>
              <Col className="col-12 text-center mb-2">
                <h1>Framleiðendur</h1>
              </Col>
            </Row>
            <Row>
              <MakerIndexCard url='/catalog_dodge' title='Dodge' />
              <MakerIndexCard url='/catalog_chevrolet' title='Chevrolet' />
              <MakerIndexCard url='/catalog_jeep' title='Jeep' />
              <MakerIndexCard url='/catalog_ford' title='Ford' />
              <MakerIndexCard url='/catalog_musso' title='Musso' />
              <MakerIndexCard url='/catalog_isuzu' title='Isuzu' />
              <MakerIndexCard url='/catalog_landrover' title='Land Rover' />
              <MakerIndexCard url='/catalog_iveco' title='Iveco' />
              <MakerIndexCard url='/catalog_toyota' title='Toyota' />
              <MakerIndexCard url='/catalog_nissan' title='Nissan' />
              <MakerIndexCard url='/catalog_mitsubishi' title='Mitsubishi' />
              <MakerIndexCard url='/catalog_benz' title='Mercedes Benz' />
              <MakerIndexCard url='/catalog_suzuki' title='Suzuki' />
              <MakerIndexCard url='/catalog_volkswagen' title='Volkswagen' />
              <MakerIndexCard url='/catalog_scaut' title='Scaut' />
            </Row>
            <Row className="mt-5">
              <Col className="col-12 text-center">
                <h1>Mótagerð</h1>
                <p>Frumstykkjasmíð og mótagerð er í höndum Formverks.</p>
              </Col>
            </Row>
          </Container>
        </SimpleLayout>
      </>
    </SSRProvider>
  )
}