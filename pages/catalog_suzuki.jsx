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

export default function CatalogSuzuki() {
  
  return (
    <SSRProvider>
      <>
        <CustomNavbar />
        <main>    
          <BrandCarousel brand="Suzuki" number_of_images="1"/>    
          <Row className="align-items-start">
            <Col className="col-12 text-center mb-2">
              <h1>Suzuki</h1>
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
                      <td>Jimny</td>
                      <td>2000-2012</td>
                      <td>35"</td>
                      <td></td>
                      <td>210.000 kr.</td>
                  </tr>
                  <tr>
                      <td>Jimny</td>
                      <td>2012-2017</td>
                      <td>35"</td>
                      <td></td>
                      <td>210.000 kr.</td>
                  </tr>
                  <tr>
                      <td>Jimny</td>
                      <td>2018-</td>
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