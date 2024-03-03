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

export default function CatalogJeep() {
  
  return (
    <SSRProvider>
      <>
        <CustomNavbar />
        <main>
          <BrandCarousel brand="Jeep" number_of_images="4"/>        
          <Row className="align-items-start">
            <Col className="col-12 text-center mb-2">
              <h1>JEEP</h1>
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
                    <td>Grand Cherokee WJ</td>
                    <td>1999-2005</td>
                    <td>33"-35" Limited</td>
                    <td>10"</td>
                    <td>204.000 kr.</td>
                  </tr>
                  <tr>
                    <td>Grand Cherokee WJ</td>
                    <td>1999-2005</td>
                    <td>33"-35" Laredo</td>
                    <td>10"</td>
                    <td>204.000 kr.</td>
                  </tr>
                  <tr>
                    <td>Grand Cherokee WJ</td>
                    <td>1999-2005</td>
                    <td>38"-44"</td>
                    <td></td>
                    <td>252.000 kr.</td>
                  </tr>
                  <tr>
                    <td>Grand Cherokee WK</td>
                    <td>2006-2010</td>
                    <td>33"-35"</td>
                    <td></td>
                    <td>215.000 kr.</td>
                  </tr>
                  <tr>
                    <td>Grand Cherokee-Stórir kantar WJ/WK</td>
                    <td></td>
                    <td>44"-46"</td>
                    <td></td>
                    <td>252.000 kr.</td>
                  </tr>
                  <tr>
                    <td>Grand Cherokee WK2</td>
                    <td>2011-2021</td>
                    <td>35"</td>
                    <td></td>
                    <td>228.000 kr.</td>
                  </tr>
                  <tr>
                    <td>Wrangler JK</td>
                    <td>2007-2018</td>
                    <td>40"</td>
                    <td>+9 cm</td>
                    <td>414.000 kr.</td>
                  </tr>
                  <tr>
                    <td>Wrangler JK</td>
                    <td>2007-2018</td>
                    <td>44"</td>
                    <td>+21 E28 cm</td>
                    <td>472.000 kr.</td>
                  </tr>
                  <tr>
                    <td>Wrangler JL</td>
                    <td>2019-</td>
                    <td>37"</td>
                    <td>+4,5 cm</td>
                    <td>391.000 kr.</td>
                  </tr>
                  <tr>
                    <td>Wrangler JL</td>
                    <td>2019-</td>
                    <td>37"</td>
                    <td>+9 cm</td>
                    <td>414.000 kr.</td>
                  </tr>
                  <tr>
                    <td>Wrangler JL</td>
                    <td>2019-</td>
                    <td>37"</td>
                    <td>+12 cm</td>
                    <td>414.000 kr.</td>
                  </tr>
                  <tr>
                    <td>Wrangler JL</td>
                    <td>2019-</td>
                    <td>40"</td>
                    <td>+9 cm</td>
                    <td>414.000 kr.</td>
                  </tr>
                  <tr>
                    <td>Wrangler JL Pikkup</td>
                    <td>2019-</td>
                    <td>37"</td>
                    <td>+12 cm</td>
                    <td>414.000 kr.</td>
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