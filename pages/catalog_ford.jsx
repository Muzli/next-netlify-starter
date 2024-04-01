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
          <Row className="align-items-start me-0">
            <Col className="col-12 text-center mb-2">
              <h1>Ford</h1>
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
                    <td className="p-1 p-md-3">F150 - Hærri afturkantur</td>
                    <td className="p-1 p-md-3">2018-2020</td>
                    <td className="p-1 p-md-3">37"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">252.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">F150</td>
                    <td className="p-1 p-md-3">2018-2020</td>
                    <td className="p-1 p-md-3">42" </td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">276.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">F150</td>
                    <td className="p-1 p-md-3">2018-2020</td>
                    <td className="p-1 p-md-3">44"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">414.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">F150</td>
                    <td className="p-1 p-md-3">2021-</td>
                    <td className="p-1 p-md-3">37"-40"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">276.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">F150</td>
                    <td className="p-1 p-md-3">2021-</td>
                    <td className="p-1 p-md-3">44"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">437.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">F350</td>
                    <td className="p-1 p-md-3">1999-2006</td>
                    <td className="p-1 p-md-3">44"-49"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">348.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">F350</td>
                    <td className="p-1 p-md-3">2007-</td>
                    <td className="p-1 p-md-3">44"-49"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">348.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">F350</td>
                    <td className="p-1 p-md-3">2007-</td>
                    <td className="p-1 p-md-3">54"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">384.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">F350</td>
                    <td className="p-1 p-md-3">2012-2016</td>
                    <td className="p-1 p-md-3">37"-40"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">252.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">F350</td>
                    <td className="p-1 p-md-3">2017-</td>
                    <td className="p-1 p-md-3">37"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">252.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">F350</td>
                    <td className="p-1 p-md-3">2017-</td>
                    <td className="p-1 p-md-3">40"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">276.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">F350</td>
                    <td className="p-1 p-md-3">2017-</td>
                    <td className="p-1 p-md-3">42"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">336.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">F350</td>
                    <td className="p-1 p-md-3">2017-</td>
                    <td className="p-1 p-md-3">44"-46"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">414.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">Excursion</td>
                    <td className="p-1 p-md-3">1999-</td>
                    <td className="p-1 p-md-3">44"-49"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">348.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">Econoline</td>
                    <td className="p-1 p-md-3">1990-</td>
                    <td className="p-1 p-md-3">44"-49"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">348.000 kr.</td>
                  </tr>
                  <tr>
                    <td className="p-1 p-md-3">Ranger</td>
                    <td className="p-1 p-md-3">2020-</td>
                    <td className="p-1 p-md-3">35"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">252.000 kr.</td>
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