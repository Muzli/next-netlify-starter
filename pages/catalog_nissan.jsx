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

export default function CatalogNissan() {
  
  return (
    <SSRProvider>
      <>
        <CustomNavbar />
        <main>
          <BrandCarousel brand="Nissan" number_of_images="1"/>     
          <Row className="align-items-start">
            <Col className="col-12 text-center mb-2">
              <h1>Nissan</h1>
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
                      <td>Navara dc</td>
                      <td>1998-2004</td>
                      <td>33"-35"</td>
                      <td>10"</td>
                      <td>252.000 kr.</td>
                  </tr>
                  <tr>
                      <td>Navara xc</td>
                      <td>1998-20004</td>
                      <td>33"-35"</td>
                      <td>10"</td>
                      <td>252.000 kr.</td>
                  </tr>
                  <tr>
                      <td>Navara</td>
                      <td>2005-2017</td>
                      <td>35"</td>
                      <td>10"</td>
                      <td>252.000 kr.</td>
                  </tr>
                  <tr>
                      <td>Navara</td>
                      <td>2005-2017</td>
                      <td>38"</td>
                      <td>12"</td>
                      <td>252.000 kr.</td>
                  </tr>
                  <tr>
                      <td>Navara</td>
                      <td>2018-</td>
                      <td>38"</td>
                      <td></td>
                      <td>276.000 kr.</td>
                  </tr>
                  <tr>
                      <td>Navara AT</td>
                      <td>2018-</td>
                      <td>35"</td>
                      <td></td>
                      <td></td>
                  </tr>
                  <tr>
                      <td>Patrol nýrri</td>
                      <td>1998-2003</td>
                      <td>44"-46</td>
                      <td></td>
                      <td>336.000 kr.</td>
                  </tr>
                  <tr>
                      <td>Patrol nýrri</td>
                      <td>2005-2010</td>
                      <td>35"</td>
                      <td>10"</td>
                      <td>252.000 kr.</td>
                  </tr>
                  <tr>
                      <td>Patrol nýrri</td>
                      <td>2005-2010</td>
                      <td>44"</td>
                      <td>14"-</td>
                      <td>336.000 kr.</td>
                  </tr>
                  <tr>
                      <td>Pathfinder</td>
                      <td>2005-</td>
                      <td>35"</td>
                      <td>10"</td>
                      <td>228.000 kr.</td>
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