import CustomNavbar from 'components/navbar/customnavbar'
import Footer from 'components/footer/footer'
import { Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

// Vörulistasíðan er með filter fyrir
// ->Tegund
// ->Árgerð
// ->Dekkjastærð
// ->Felgubreidd
// Og cards fyrir vörur

export default function CatalogToyota() {
  
  return (
    <>
    <CustomNavbar />
      <main>        
        <Row className="align-items-start">
          <Col className="col-12 text-center mb-2">
            <h1>Toyota</h1>
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
                    <td>Lc 90</td>
                    <td></td>
                    <td>38"</td>
                    <td></td>
                    <td>252.000 kr.</td>
                </tr>
                <tr>
                    <td>Lc 70</td>
                    <td></td>
                    <td>35"</td>
                    <td>10"</td>
                    <td>228.000 kr.</td>
                </tr>
                <tr>
                    <td>Lc 70</td>
                    <td></td>
                    <td>38"</td>
                    <td>12"-14"</td>
                    <td>252.000 kr.</td>
                </tr>
                <tr>
                    <td>Lc 70</td>
                    <td></td>
                    <td>44"</td>
                    <td>14"</td>
                    <td>276.000 kr.</td>
                </tr>
                <tr>
                    <td>Lc 80</td>
                    <td>1990-2007</td>
                    <td>38"</td>
                    <td>12"-14"</td>
                    <td>252.000 kr.</td>
                </tr>
                <tr>
                    <td>Lc 80</td>
                    <td>1990-1997</td>
                    <td>38"-44"</td>
                    <td>13 cm færsla</td>
                    <td>252.000 kr.</td>
                </tr>
                <tr>
                    <td>Lc 80</td>
                    <td>1999-</td>
                    <td>44"-46"</td>
                    <td>11 cm færsla</td>
                    <td>348.000 kr.</td>
                </tr>
                <tr>
                    <td>Lc 80</td>
                    <td>1999-</td>
                    <td>44"-46"</td>
                    <td>Heilir aftan</td>
                    <td>348.000 kr.</td>
                </tr>
                <tr>
                    <td>Lc 100</td>
                    <td></td>
                    <td>35"</td>
                    <td></td>
                    <td>252.000 kr.</td>
                </tr>
                <tr>
                    <td>Lc 100</td>
                    <td></td>
                    <td>38"</td>
                    <td>16 cm breiðir</td>
                    <td>276.000 kr.</td>
                </tr>
                <tr>
                    <td>Lc 100</td>
                    <td></td>
                    <td>44"-46"</td>
                    <td>26 cm breiðir</td>
                    <td>348.000 kr.</td>
                </tr>
                <tr>
                    <td>Lc 100</td>
                    <td></td>
                    <td>44"-46"</td>
                    <td>Heilir afturkantar</td>
                    <td>348.000 kr.</td>
                </tr>
                <tr>
                    <td>Lc 150 (Breyting 2015 og 2018)</td>
                    <td>2008-</td>
                    <td>35"</td>
                    <td>10"</td>
                    <td>252.000 kr.</td>
                </tr>
                <tr>
                    <td>Lc 150 (Breyting 2015 og 2018)</td>
                    <td>2008-</td>
                    <td>38"</td>
                    <td>12"</td>
                    <td>276.000 kr.</td>
                </tr>
                <tr>
                    <td>Lc 150 (Breyting 2015 og 2018)</td>
                    <td>2008-</td>
                    <td>42"</td>
                    <td>12"</td>
                    <td>318.000 kr.</td>
                </tr>
                <tr>
                    <td>Lc 150 (Breyting 2015 og 2018)</td>
                    <td>2008-</td>
                    <td>44"</td>
                    <td>14"</td>
                    <td>437.000 kr.</td>
                </tr>
                <tr>
                    <td>Lc 150 nýtt útlit</td>
                    <td>2018-</td>
                    <td>42"</td>
                    <td>12"</td>
                    <td>360.000 kr.</td>
                </tr>
                <tr>
                    <td>Lc 150</td>
                    <td>2018-</td>
                    <td>44"</td>
                    <td>14"</td>
                    <td>437.000 kr.</td>
                </tr>
                <tr>
                    <td>Lc 200</td>
                    <td>2008-</td>
                    <td>35"</td>
                    <td>10"</td>
                    <td>252.000 kr.</td>
                </tr>
                <tr>
                    <td>Lc 200</td>
                    <td>2008-</td>
                    <td>Gangbretti</td>
                    <td></td>
                    <td>110.000 kr.</td>
                </tr>
                <tr>
                    <td>Hilux</td>
                    <td>1998-2007</td>
                    <td>33"-35"</td>
                    <td>10"</td>
                    <td>252.000 kr.</td>
                </tr>
                <tr>
                    <td>Hilux</td>
                    <td>1998-2007</td>
                    <td>38"</td>
                    <td>12"</td>
                    <td>290.000 kr.</td>
                </tr>
                <tr>
                    <td>Hilux</td>
                    <td>2007-2016</td>
                    <td>35"</td>
                    <td>10"</td>
                    <td>252.000 kr.</td>
                </tr>
                <tr>
                    <td>Hilux</td>
                    <td>2007-2016</td>
                    <td>38"</td>
                    <td>12"-</td>
                    <td>348.000 kr.</td>
                </tr>
                <tr>
                    <td>Hilux</td>
                    <td>2007-2016</td>
                    <td>44"</td>
                    <td>12"-</td>
                    <td>368.000 kr.</td>
                </tr>
                <tr>
                    <td>Hilux (nýtt bak 2020)</td>
                    <td>2017-</td>
                    <td>35"</td>
                    <td>10"</td>
                    <td>252.000 kr.</td>
                </tr>
                <tr>
                    <td>Hilux</td>
                    <td>2017-</td>
                    <td>38"-40"</td>
                    <td></td>
                    <td>276.000 kr.</td>
                </tr>
                <tr>
                    <td>Tacoma</td>
                    <td></td>
                    <td>35"-37"</td>
                    <td></td>
                    <td>252.000 kr.</td>
                </tr>
                <tr>
                    <td>Tacoma</td>
                    <td></td>
                    <td>35"-40"</td>
                    <td>Færsla</td>
                    <td>252.000 kr.</td>
                </tr>
                <tr>
                    <td>Tacoma</td>
                    <td></td>
                    <td>38"</td>
                    <td></td>
                    <td>276.000 kr.</td>
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
  )
}