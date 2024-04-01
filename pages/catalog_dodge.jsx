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

export default function Catalog() {
  
  return (
    <SSRProvider>
      <>
      <CustomNavbar />
        <main>        
          <Row className="align-items-start me-0">
            <Col className="col-12 text-center mb-2">
              <h1>Dodge Ram</h1>
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
                    <td className="p-1 p-md-3">Ram 2500</td>
                    <td className="p-1 p-md-3">2003-2009</td>
                    <td className="p-1 p-md-3">32"-33"</td>
                    <td className="p-1 p-md-3">8"</td>
                    <td className="p-1 p-md-3">192.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">Ram 2500</td>
                    <td className="p-1 p-md-3">2003-2009</td>
                    <td className="p-1 p-md-3">35"-37"</td>
                    <td className="p-1 p-md-3">10"</td>
                    <td className="p-1 p-md-3">204.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">Ram 2500</td>
                    <td className="p-1 p-md-3">2003-2009</td>
                    <td className="p-1 p-md-3">38"</td>
                    <td className="p-1 p-md-3">12"-14"</td>
                    <td className="p-1 p-md-3">228.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">Ram 3500</td>
                    <td className="p-1 p-md-3">2010-2018</td>
                    <td className="p-1 p-md-3">37"</td>
                    <td className="p-1 p-md-3">10"</td>
                    <td className="p-1 p-md-3">252.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">Ram 3500</td>
                    <td className="p-1 p-md-3">2019-</td>
                    <td className="p-1 p-md-3">37"-40"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">264.000 kr.</td>
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