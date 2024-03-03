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

export default function CatalogScaut() {
  
  return (
    <SSRProvider>
      <>
        <CustomNavbar />
        <main>        
          <Row className="align-items-start">
            <Col className="col-12 text-center mb-2">
              <h1>Scaut</h1>
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
                      <td>Scaut</td>
                      <td>1975-</td>
                      <td>44"</td>
                      <td></td>
                      <td>348.000 kr.</td>
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