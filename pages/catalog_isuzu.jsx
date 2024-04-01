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

export default function CatalogIsuzu() {
  
  return (
    <SSRProvider>
      <>
        <CustomNavbar />
        <main>        
          <Row className="align-items-start me-0">
            <Col className="col-12 text-center mb-2">
              <h1>Isuzu</h1>
              <Table className="catalog-table">
                <thead>
                  <tr>
                    <th className="p-1 p-md-3">Tegund</th>
                    <th className="p-1 p-md-3">Árgerð</th>
                    <th className="p-1 p-md-3">Dekkjastærð</th>
                    <th className="p-1 p-md-3">Felgubreidd</th>
                    <th className="p-1 p-md-3">Verð</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td className="p-1 p-md-3">D Max</td>
                      <td className="p-1 p-md-3">2007-</td>
                      <td className="p-1 p-md-3">35"</td>
                      <td className="p-1 p-md-3">10"</td>
                      <td className="p-1 p-md-3">252.000 kr.</td>
                  </tr>
                  <tr>
                      <td className="p-1 p-md-3">D Max</td>
                      <td className="p-1 p-md-3">2007-</td>
                      <td className="p-1 p-md-3">35" Breiðari</td>
                      <td className="p-1 p-md-3"></td>
                      <td className="p-1 p-md-3">252.000 kr.</td>
                  </tr>
                  <tr>
                      <td className="p-1 p-md-3">D Max</td>
                      <td className="p-1 p-md-3">2017-</td>
                      <td className="p-1 p-md-3">33"-35"</td>
                      <td className="p-1 p-md-3">10"</td>
                      <td className="p-1 p-md-3">276.000 kr.</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>        
        </main>            
        <Row className="gx-0 gx-sm-4">
          <Footer/>
        </Row>
      </>
    </SSRProvider>
  )
}