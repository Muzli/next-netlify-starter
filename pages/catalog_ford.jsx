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

export default function CatalogFord() {
  
  return (
    <SSRProvider>
      <>
        <CustomNavbar />
        <main>
        <BrandCarousel brand="Ford" number_of_images="7"/>      
          <Row className="align-items-start">
            <Col className="col-12 text-center mb-2">
              <h1>Ford</h1>
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
                    <td>F150 - Hærri afturkantur</td>
                    <td>2018-2020</td>
                    <td>37"</td>
                    <td></td>
                    <td>252.000 kr.</td>
                  </tr>
                  <tr>
                    <td>F150</td>
                    <td>2018-2020</td>
                    <td>42" </td>
                    <td></td>
                    <td>276.000 kr.</td>
                  </tr>
                  <tr>
                    <td>F150</td>
                    <td>2018-2020</td>
                    <td>44"</td>
                    <td></td>
                    <td>414.000 kr.</td>
                  </tr>
                  <tr>
                    <td>F150</td>
                    <td>2021-</td>
                    <td>37"-40"</td>
                    <td></td>
                    <td>276.000 kr.</td>
                  </tr>
                  <tr>
                    <td>F150</td>
                    <td>2021-</td>
                    <td>44"</td>
                    <td></td>
                    <td>437.000 kr.</td>
                  </tr>
                  <tr>
                    <td>F350</td>
                    <td>1999-2006</td>
                    <td>44"-49"</td>
                    <td></td>
                    <td>348.000 kr.</td>
                  </tr>
                  <tr>
                    <td>F350</td>
                    <td>2007-</td>
                    <td>44"-49"</td>
                    <td></td>
                    <td>348.000 kr.</td>
                  </tr>
                  <tr>
                    <td>F350</td>
                    <td>2007-</td>
                    <td>54"</td>
                    <td></td>
                    <td>384.000 kr.</td>
                  </tr>
                  <tr>
                    <td>F350</td>
                    <td>2012-2016</td>
                    <td>37"-40"</td>
                    <td></td>
                    <td>252.000 kr.</td>
                  </tr>
                  <tr>
                    <td>F350</td>
                    <td>2017-</td>
                    <td>37"</td>
                    <td></td>
                    <td>252.000 kr.</td>
                  </tr>
                  <tr>
                    <td>F350</td>
                    <td>2017-</td>
                    <td>40"</td>
                    <td></td>
                    <td>276.000 kr.</td>
                  </tr>
                  <tr>
                    <td>F350</td>
                    <td>2017-</td>
                    <td>42"</td>
                    <td></td>
                    <td>336.000 kr.</td>
                  </tr>
                  <tr>
                    <td>F350</td>
                    <td>2017-</td>
                    <td>44"-46"</td>
                    <td></td>
                    <td>414.000 kr.</td>
                  </tr>
                  <tr>
                    <td>Excursion</td>
                    <td>1999-</td>
                    <td>44"-49"</td>
                    <td></td>
                    <td>348.000 kr.</td>
                  </tr>
                  <tr>
                    <td>Econoline</td>
                    <td>1990-</td>
                    <td>44"-49"</td>
                    <td></td>
                    <td>348.000 kr.</td>
                  </tr>
                  <tr>
                    <td>Ranger</td>
                    <td>2020-</td>
                    <td>35"</td>
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