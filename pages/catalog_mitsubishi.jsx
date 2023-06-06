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

export default function CatalogMitsubishi() {
  
  return (
    <>
    <CustomNavbar />
      <main>        
        <Row className="align-items-start">
          <Col className="col-12 text-center mb-2">
            <h1>Mitsubishi</h1>
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
                    <td>Pajero</td>
                    <td>2007-</td>
                    <td>33"-35"</td>
                    <td>10"</td>
                    <td>228.000 kr.</td>
                </tr>
                <tr>
                    <td>Pajero</td>
                    <td>2007-</td>
                    <td></td>
                    <td>Gangbretti</td>
                    <td>110.000 kr.</td>
                </tr>
                <tr>
                    <td>Pajero</td>
                    <td>2007-</td>
                    <td>38"</td>
                    <td></td>
                    <td>276.000 kr.</td>
                </tr>
                <tr>
                    <td>Pajero</td>
                    <td>2007-</td>
                    <td>44"</td>
                    <td></td>
                    <td>336.000 kr.</td>
                </tr>
                <tr>
                    <td>L200</td>
                    <td>2019-</td>
                    <td>35"</td>
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