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

export default function CatalogMusso() {
  
  return (
    <SSRProvider>
      <>
        <CustomNavbar />
        <main>        
          <Row className="align-items-start">
            <Col className="col-12 text-center mb-2">
              <h1>Musso</h1>
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
                    <td>Rexton</td>
                    <td>2002-2017</td>
                    <td>33"-35"</td>
                    <td></td>
                    <td>252.000 kr.</td>
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