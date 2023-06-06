import CustomNavbar from 'components/navbar/customnavbar'
import Footer from 'components/footer/footer'
import { Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

// Vörulistasíðan er með filter fyrir
// ->Tegund
// ->Árgerð
// ->Dekkjastærð
// ->Felgubreidd
// Og cards fyrir vörur

export default function CatalogLandRover() {
  
  return (
    <>
    <CustomNavbar />
      <main>        
        <Row className="align-items-start">
          <Col className="col-12 text-center mb-2">
            <h1>Land Rover</h1>
            <Table>
              <thead>
                <tr>
                  <th>Tegund</th>
                  <th>Árgerð</th>
                  <th>Dekkjastærð</th>
                  <th>Felgubreidd</th>
                  <th>Verð</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>130 Pikkup</td>
                    <td></td>
                    <td>33"-35"</td>
                    <td>10"</td>
                    <td>276.000 kr.</td>
                </tr>
                <tr>
                    <td>110 Station</td>
                    <td></td>
                    <td>33"-35"</td>
                    <td></td>
                    <td>276.000 kr.</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>        
      </main>            
      <Row>
        <Footer/>
      </Row>
    </>
  )
}