import CustomNavbar from 'components/navbar/customnavbar'
import Footer from 'components/footer/footer'
import { Row, Col, SSRProvider } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import BrandCarousel from '@components/carousel/brandCarousel';

// Vörulistasíðan er með filter fyrir
// ->Tegund
// ->Árgerð
// ->Dekkjastærð
// ->Felgubreidd
// Og cards fyrir vörur

export default function CatalogIveco() {
  
  return (
    <SSRProvider>
      <>
        <CustomNavbar />
        <main>
          <BrandCarousel brand="Iveco" number_of_images="1"/>    
          <Row className="align-items-start me-0">
            <Col className="col-12 text-center mb-2">
              <h1>Iveco</h1>
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
                      <td className="p-1 p-md-3">Pallbíll - Framkantar</td>
                      <td className="p-1 p-md-3">2017-</td>
                      <td className="p-1 p-md-3">37"-40"</td>
                      <td className="p-1 p-md-3"></td>
                      <td className="p-1 p-md-3">252.000 kr.</td>
                  </tr>
                  <tr>
                      <td className="p-1 p-md-3">Breyting á afturköntum</td>
                      <td className="p-1 p-md-3">2017-</td>
                      <td className="p-1 p-md-3">35"</td>
                      <td className="p-1 p-md-3"></td>
                      <td className="p-1 p-md-3">110.000 kr.</td>
                  </tr>
                  <tr>
                      <td className="p-1 p-md-3">Van</td>
                      <td className="p-1 p-md-3">2021-</td>
                      <td className="p-1 p-md-3">38"</td>
                      <td className="p-1 p-md-3">10"</td>
                      <td className="p-1 p-md-3">360.000 kr.</td>
                  </tr>
                  <tr>
                      <td className="p-1 p-md-3">Van</td>
                      <td className="p-1 p-md-3">2021-</td>
                      <td className="p-1 p-md-3">44"</td>
                      <td className="p-1 p-md-3"></td>
                      <td className="p-1 p-md-3">437.000 kr.</td>
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