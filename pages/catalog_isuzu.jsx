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

export default function CatalogIsuzu() {
  
  return (
    <>
    <CustomNavbar />
      <main>        
        <Row className="align-items-start">
          <Col className="col-12 text-center mb-2">
            <h1>Isuzu</h1>
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
                    <td>D Max</td>
                    <td>2007-</td>
                    <td>35"</td>
                    <td>10"</td>
                    <td>252.000 kr.</td>
                </tr>
                <tr>
                    <td>D Max</td>
                    <td>2007-</td>
                    <td>35" Breiðari</td>
                    <td></td>
                    <td>252.000 kr.</td>
                </tr>
                <tr>
                    <td>D Max</td>
                    <td>2017-</td>
                    <td>33"-35"</td>
                    <td>10"</td>
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