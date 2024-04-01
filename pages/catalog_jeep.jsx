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
          <Row className="align-items-start me-0">
            <Col className="col-12 text-center mb-2">
              <h1>JEEP</h1>
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
                    <td className="p-1 p-md-3">Grand Cherokee WJ</td>
                    <td className="p-1 p-md-3">1999-2005</td>
                    <td className="p-1 p-md-3">33"-35" Limited</td>
                    <td className="p-1 p-md-3">10"</td>
                    <td className="p-1 p-md-3">204.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">Grand Cherokee WJ</td>
                    <td className="p-1 p-md-3">1999-2005</td>
                    <td className="p-1 p-md-3">33"-35" Laredo</td>
                    <td className="p-1 p-md-3">10"</td>
                    <td className="p-1 p-md-3">204.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">Grand Cherokee WJ</td>
                    <td className="p-1 p-md-3">1999-2005</td>
                    <td className="p-1 p-md-3">38"-44"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">252.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">Grand Cherokee WK</td>
                    <td className="p-1 p-md-3">2006-2010</td>
                    <td className="p-1 p-md-3">33"-35"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">215.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">Grand Cherokee-Stórir kantar WJ/WK</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">44"-46"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">252.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">Grand Cherokee WK2</td>
                    <td className="p-1 p-md-3">2011-2021</td>
                    <td className="p-1 p-md-3">35"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">228.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">Wrangler JK</td>
                    <td className="p-1 p-md-3">2007-2018</td>
                    <td className="p-1 p-md-3">40"</td>
                    <td className="p-1 p-md-3">+9 cm</td>
                    <td className="p-1 p-md-3">414.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">Wrangler JK</td>
                    <td className="p-1 p-md-3">2007-2018</td>
                    <td className="p-1 p-md-3">44"</td>
                    <td className="p-1 p-md-3">+21 E28 cm</td>
                    <td className="p-1 p-md-3">472.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">Wrangler JL</td>
                    <td className="p-1 p-md-3">2019-</td>
                    <td className="p-1 p-md-3">37"</td>
                    <td className="p-1 p-md-3">+4,5 cm</td>
                    <td className="p-1 p-md-3">391.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">Wrangler JL</td>
                    <td className="p-1 p-md-3">2019-</td>
                    <td className="p-1 p-md-3">37"</td>
                    <td className="p-1 p-md-3">+9 cm</td>
                    <td className="p-1 p-md-3">414.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">Wrangler JL</td>
                    <td className="p-1 p-md-3">2019-</td>
                    <td className="p-1 p-md-3">37"</td>
                    <td className="p-1 p-md-3">+12 cm</td>
                    <td className="p-1 p-md-3">414.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">Wrangler JL</td>
                    <td className="p-1 p-md-3">2019-</td>
                    <td className="p-1 p-md-3">40"</td>
                    <td className="p-1 p-md-3">+9 cm</td>
                    <td className="p-1 p-md-3">414.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">Wrangler JL Pikkup</td>
                    <td className="p-1 p-md-3">2019-</td>
                    <td className="p-1 p-md-3">37"</td>
                    <td className="p-1 p-md-3">+12 cm</td>
                    <td className="p-1 p-md-3">414.000 kr.</td>
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