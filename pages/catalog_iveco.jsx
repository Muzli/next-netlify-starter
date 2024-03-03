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
          <Row className="align-items-start">
            <Col className="col-12 text-center mb-2">
              <h1>Iveco</h1>
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
                      <td>Pallbíll - Framkantar</td>
                      <td>2017-</td>
                      <td>37"-40"</td>
                      <td></td>
                      <td>252.000 kr.</td>
                  </tr>
                  <tr>
                      <td>Breyting á afturköntum</td>
                      <td>2017-</td>
                      <td>35"</td>
                      <td></td>
                      <td>110.000 kr.</td>
                  </tr>
                  <tr>
                      <td>Van</td>
                      <td>2021-</td>
                      <td>38"</td>
                      <td>10"</td>
                      <td>360.000 kr.</td>
                  </tr>
                  <tr>
                      <td>Van</td>
                      <td>2021-</td>
                      <td>44"</td>
                      <td></td>
                      <td>437.000 kr.</td>
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