import CustomNavbar from 'components/navbar/customnavbar'
import Footer from 'components/footer/footer'
import { Row, Col, SSRProvider } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

// Vörulistasíðan er með filter fyrir
// ->Tegund
// ->Árgerð
// ->Dekkjastærð
// ->Felgubreidd
// Og cards fyrir vörur

export default function CatalogChevrolet() {
  
  return (
    <SSRProvider>
      <>
        <CustomNavbar />
        <main>        
          <Row className="align-items-start">
            <Col className="col-12 text-center mb-2">
              <h1>Chevrolet GMC</h1>
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
                    <td>Silverado 2500</td>
                    <td>2000-2006</td>
                    <td>33"-35"</td>
                    <td></td>
                    <td>216.000 kr.</td>
                  </tr>
                  <tr>
                    <td>Silverado 2500</td>
                    <td>2000-2006</td>
                    <td>38"-44"</td>
                    <td>14"</td>
                    <td>264.000 kr.</td>
                  </tr>
                  <tr>
                    <td>Silverado 3500</td>
                    <td>2015-2018</td>
                    <td>37"</td>
                    <td>10"</td>
                    <td>252.000 kr.</td>
                  </tr>
                  <tr>
                    <td>Silverado 3500</td>
                    <td>2019-</td>
                    <td>37"</td>
                    <td>9"</td>
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
    </SSRProvider>
  )
}