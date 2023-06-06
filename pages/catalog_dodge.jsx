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

export default function Catalog() {
  
  return (
    <>
    <CustomNavbar />
      <main>        
        <Row className="align-items-start">
          <Col className="col-12 text-center mb-2">
            <h1>Dodge Ram</h1>
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
                  <td>Ram 2500</td>
                  <td>2003-2009</td>
                  <td>32"-33"</td>
                  <td>8"</td>
                  <td>192.000 kr.</td>
                </tr>
                <tr>
                  <td>Ram 2500</td>
                  <td>2003-2009</td>
                  <td>35"-37"</td>
                  <td>10"</td>
                  <td>204.000 kr.</td>
                </tr>
                <tr>
                  <td>Ram 2500</td>
                  <td>2003-2009</td>
                  <td>38"</td>
                  <td>12"-14"</td>
                  <td>228.000 kr.</td>
                </tr>
                <tr>
                  <td>Ram 3500</td>
                  <td>2010-2018</td>
                  <td>37"</td>
                  <td>10"</td>
                  <td>252.000 kr.</td>
                </tr>
                <tr>
                  <td>Ram 3500</td>
                  <td>2019-</td>
                  <td>37"-40"</td>
                  <td></td>
                  <td>264.000 kr.</td>
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