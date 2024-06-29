import { useContext } from 'react';
import CustomNavbar from 'components/navbar/customnavbar'
import Footer from 'components/footer/footer'
import { Row, Col } from 'react-bootstrap';
import LanguageContext from '../utilities/Language/languageContext.js';
import Dictionary from '../utilities/Language/dictionary.js';
import Table from 'react-bootstrap/Table';

// Vörulistasíðan er með filter fyrir
// ->Tegund
// ->Árgerð
// ->Dekkjastærð
// ->Felgubreidd
// Og cards fyrir vörur

export default function CatalogChevrolet() {

  const { language } = useContext(LanguageContext);
  
  return (
    <>
      <CustomNavbar />
      <main>        
        <Row className="align-items-start me-0">
          <Col className="col-12 text-center mb-2">
            <h1>Chevrolet GMC</h1>
            <Table className="catalog-table">
              <thead>
                <tr>
                  <th className="p-1 p-md-3">{Dictionary()[language]["catalog"]["type"]}</th>
                  <th className="p-1 p-md-3">{Dictionary()[language]["catalog"]["year"]}</th>
                  <th className="p-1 p-md-3">{Dictionary()[language]["catalog"]["tire_size"]}</th>
                  <th className="p-1 p-md-3">{Dictionary()[language]["catalog"]["rim_width"]}</th>
                  <th className="p-1 p-md-3">{Dictionary()[language]["catalog"]["price"]}</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <td className="p-1 p-md-3">Silverado 2500</td>
                  <td className="p-1 p-md-3">2000-2006</td>
                  <td className="p-1 p-md-3">33"-35"</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Silverado 2500</td>
                  <td className="p-1 p-md-3">2000-2006</td>
                  <td className="p-1 p-md-3">38"-44"</td>
                  <td className="p-1 p-md-3">14"</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Silverado 3500</td>
                  <td className="p-1 p-md-3">2015-2018</td>
                  <td className="p-1 p-md-3">37"</td>
                  <td className="p-1 p-md-3">10"</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Silverado 3500</td>
                  <td className="p-1 p-md-3">2019-</td>
                  <td className="p-1 p-md-3">37"</td>
                  <td className="p-1 p-md-3">9"</td>
                  <td className="p-1 p-md-3">- kr.</td>
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
  )
}