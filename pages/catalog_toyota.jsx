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

export default function CatalogToyota() {
  
  return (
    <SSRProvider>
      <>
        <CustomNavbar />
        <main>       
          <BrandCarousel brand="Toyota" number_of_images="4"/> 
          <Row className="align-items-start me-0">
          <Col className="col-12 text-center mb-2">
            <h1>Toyota</h1>
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
                  <td className="p-1 p-md-3">Lc 90</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">38"</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">252.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 70</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">35"</td>
                  <td className="p-1 p-md-3">10"</td>
                  <td className="p-1 p-md-3">228.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 70</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">38"</td>
                  <td className="p-1 p-md-3">12"-14"</td>
                  <td className="p-1 p-md-3">252.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 70</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">44"</td>
                  <td className="p-1 p-md-3">14"</td>
                  <td className="p-1 p-md-3">276.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 80</td>
                  <td className="p-1 p-md-3">1990-2007</td>
                  <td className="p-1 p-md-3">38"</td>
                  <td className="p-1 p-md-3">12"-14"</td>
                  <td className="p-1 p-md-3">252.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 80</td>
                  <td className="p-1 p-md-3">1990-1997</td>
                  <td className="p-1 p-md-3">38"-44"</td>
                  <td className="p-1 p-md-3">13 cm færsla</td>
                  <td className="p-1 p-md-3">252.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 80</td>
                  <td className="p-1 p-md-3">1999-</td>
                  <td className="p-1 p-md-3">44"-46"</td>
                  <td className="p-1 p-md-3">11 cm færsla</td>
                  <td className="p-1 p-md-3">348.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 80</td>
                  <td className="p-1 p-md-3">1999-</td>
                  <td className="p-1 p-md-3">44"-46"</td>
                  <td className="p-1 p-md-3">Heilir aftan</td>
                  <td className="p-1 p-md-3">348.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 100</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">35"</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">252.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 100</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">38"</td>
                  <td className="p-1 p-md-3">16 cm breiðir</td>
                  <td className="p-1 p-md-3">276.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 100</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">44"-46"</td>
                  <td className="p-1 p-md-3">26 cm breiðir</td>
                  <td className="p-1 p-md-3">348.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 100</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">44"-46"</td>
                  <td className="p-1 p-md-3">Heilir afturkantar</td>
                  <td className="p-1 p-md-3">348.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 150 (Breyting 2015 og 2018)</td>
                  <td className="p-1 p-md-3">2008-</td>
                  <td className="p-1 p-md-3">35"</td>
                  <td className="p-1 p-md-3">10"</td>
                  <td className="p-1 p-md-3">252.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 150 (Breyting 2015 og 2018)</td>
                  <td className="p-1 p-md-3">2008-</td>
                  <td className="p-1 p-md-3">38"</td>
                  <td className="p-1 p-md-3">12"</td>
                  <td className="p-1 p-md-3">276.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 150 (Breyting 2015 og 2018)</td>
                  <td className="p-1 p-md-3">2008-</td>
                  <td className="p-1 p-md-3">42"</td>
                  <td className="p-1 p-md-3">12"</td>
                  <td className="p-1 p-md-3">318.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 150 (Breyting 2015 og 2018)</td>
                  <td className="p-1 p-md-3">2008-</td>
                  <td className="p-1 p-md-3">44"</td>
                  <td className="p-1 p-md-3">14"</td>
                  <td className="p-1 p-md-3">437.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 150 nýtt útlit</td>
                  <td className="p-1 p-md-3">2018-</td>
                  <td className="p-1 p-md-3">42"</td>
                  <td className="p-1 p-md-3">12"</td>
                  <td className="p-1 p-md-3">360.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 150</td>
                  <td className="p-1 p-md-3">2018-</td>
                  <td className="p-1 p-md-3">44"</td>
                  <td className="p-1 p-md-3">14"</td>
                  <td className="p-1 p-md-3">437.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 200</td>
                  <td className="p-1 p-md-3">2008-</td>
                  <td className="p-1 p-md-3">35"</td>
                  <td className="p-1 p-md-3">10"</td>
                  <td className="p-1 p-md-3">252.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 200</td>
                  <td className="p-1 p-md-3">2008-</td>
                  <td className="p-1 p-md-3">Gangbretti</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">110.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Hilux</td>
                  <td className="p-1 p-md-3">1998-2007</td>
                  <td className="p-1 p-md-3">33"-35"</td>
                  <td className="p-1 p-md-3">10"</td>
                  <td className="p-1 p-md-3">252.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Hilux</td>
                  <td className="p-1 p-md-3">1998-2007</td>
                  <td className="p-1 p-md-3">38"</td>
                  <td className="p-1 p-md-3">12"</td>
                  <td className="p-1 p-md-3">290.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Hilux</td>
                  <td className="p-1 p-md-3">2007-2016</td>
                  <td className="p-1 p-md-3">35"</td>
                  <td className="p-1 p-md-3">10"</td>
                  <td className="p-1 p-md-3">252.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Hilux</td>
                  <td className="p-1 p-md-3">2007-2016</td>
                  <td className="p-1 p-md-3">38"</td>
                  <td className="p-1 p-md-3">12"-</td>
                  <td className="p-1 p-md-3">348.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Hilux</td>
                  <td className="p-1 p-md-3">2007-2016</td>
                  <td className="p-1 p-md-3">44"</td>
                  <td className="p-1 p-md-3">12"-</td>
                  <td className="p-1 p-md-3">368.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Hilux (nýtt bak 2020)</td>
                  <td className="p-1 p-md-3">2017-</td>
                  <td className="p-1 p-md-3">35"</td>
                  <td className="p-1 p-md-3">10"</td>
                  <td className="p-1 p-md-3">252.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Hilux</td>
                  <td className="p-1 p-md-3">2017-</td>
                  <td className="p-1 p-md-3">38"-40"</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">276.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Tacoma</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">35"-37"</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">252.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Tacoma</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">35"-40"</td>
                  <td className="p-1 p-md-3">Færsla</td>
                  <td className="p-1 p-md-3">252.000 kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Tacoma</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">38"</td>
                  <td className="p-1 p-md-3"></td>
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