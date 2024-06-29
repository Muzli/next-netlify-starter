import { useContext } from 'react';
import CustomNavbar from 'components/navbar/customnavbar'
import Footer from 'components/footer/footer'
import { Row, Col } from 'react-bootstrap';
import LanguageContext from '../utilities/Language/languageContext.js';
import Dictionary from '../utilities/Language/dictionary.js';
import Table from 'react-bootstrap/Table';
import BrandCarousel from '@components/carousel/brandCarousel';

// Vörulistasíðan er með filter fyrir
// ->Tegund
// ->Árgerð
// ->Dekkjastærð
// ->Felgubreidd
// Og cards fyrir vörur

export default function CatalogToyota() {

  const { language } = useContext(LanguageContext);
  
  return (
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
                  <th className="p-1 p-md-3">{Dictionary()[language]["catalog"]["type"]}</th>
                  <th className="p-1 p-md-3">{Dictionary()[language]["catalog"]["year"]}</th>
                  <th className="p-1 p-md-3">{Dictionary()[language]["catalog"]["tire_size"]}</th>
                  <th className="p-1 p-md-3">{Dictionary()[language]["catalog"]["rim_width"]}</th>
                  <th className="p-1 p-md-3">{Dictionary()[language]["catalog"]["price"]}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-1 p-md-3">Lc 90</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">38"</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 70</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">35"</td>
                  <td className="p-1 p-md-3">10"</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 70</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">38"</td>
                  <td className="p-1 p-md-3">12"-14"</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 70</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">44"</td>
                  <td className="p-1 p-md-3">14"</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 80</td>
                  <td className="p-1 p-md-3">1990-2007</td>
                  <td className="p-1 p-md-3">38"</td>
                  <td className="p-1 p-md-3">12"-14"</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 80</td>
                  <td className="p-1 p-md-3">1990-1997</td>
                  <td className="p-1 p-md-3">38"-44"</td>
                  <td className="p-1 p-md-3">13 cm {Dictionary()[language]["catalog"]["adjustment"]}</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 80</td>
                  <td className="p-1 p-md-3">1999-</td>
                  <td className="p-1 p-md-3">44"-46"</td>
                  <td className="p-1 p-md-3">11 cm {Dictionary()[language]["catalog"]["adjustment"]}</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 80</td>
                  <td className="p-1 p-md-3">1999-</td>
                  <td className="p-1 p-md-3">44"-46"</td>
                  <td className="p-1 p-md-3">{Dictionary()[language]["catalog"]["whole_rear"]}</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 100</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">35"</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 100</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">38"</td>
                  <td className="p-1 p-md-3">16 cm {Dictionary()[language]["catalog"]["wide"]}</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 100</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">44"-46"</td>
                  <td className="p-1 p-md-3">26 cm {Dictionary()[language]["catalog"]["wide"]}</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 100</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">44"-46"</td>
                  <td className="p-1 p-md-3">{Dictionary()[language]["catalog"]["whole_rear"]}</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 150 ({Dictionary()[language]["catalog"]["modification"]} 2015 {Dictionary()[language]["general"]["and"]} 2018)</td>
                  <td className="p-1 p-md-3">2008-</td>
                  <td className="p-1 p-md-3">35"</td>
                  <td className="p-1 p-md-3">10"</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 150 ({Dictionary()[language]["catalog"]["modification"]} 2015 {Dictionary()[language]["general"]["and"]} 2018)</td>
                  <td className="p-1 p-md-3">2008-</td>
                  <td className="p-1 p-md-3">38"</td>
                  <td className="p-1 p-md-3">12"</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 150 ({Dictionary()[language]["catalog"]["modification"]} 2015 {Dictionary()[language]["general"]["and"]} 2018)</td>
                  <td className="p-1 p-md-3">2008-</td>
                  <td className="p-1 p-md-3">42"</td>
                  <td className="p-1 p-md-3">12"</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 150 ({Dictionary()[language]["catalog"]["modification"]} 2015 {Dictionary()[language]["general"]["and"]} 2018)</td>
                  <td className="p-1 p-md-3">2008-</td>
                  <td className="p-1 p-md-3">44"</td>
                  <td className="p-1 p-md-3">14"</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 150 {Dictionary()[language]["catalog"]["new_look"]}</td>
                  <td className="p-1 p-md-3">2018-</td>
                  <td className="p-1 p-md-3">42"</td>
                  <td className="p-1 p-md-3">12"</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 150</td>
                  <td className="p-1 p-md-3">2018-</td>
                  <td className="p-1 p-md-3">44"</td>
                  <td className="p-1 p-md-3">14"</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 200</td>
                  <td className="p-1 p-md-3">2008-</td>
                  <td className="p-1 p-md-3">35"</td>
                  <td className="p-1 p-md-3">10"</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Lc 200</td>
                  <td className="p-1 p-md-3">2008-</td>
                  <td className="p-1 p-md-3">{Dictionary()[language]["catalog"]["running_board"]}</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Hilux</td>
                  <td className="p-1 p-md-3">1998-2007</td>
                  <td className="p-1 p-md-3">33"-35"</td>
                  <td className="p-1 p-md-3">10"</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Hilux</td>
                  <td className="p-1 p-md-3">1998-2007</td>
                  <td className="p-1 p-md-3">38"</td>
                  <td className="p-1 p-md-3">12"</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Hilux</td>
                  <td className="p-1 p-md-3">2007-2016</td>
                  <td className="p-1 p-md-3">35"</td>
                  <td className="p-1 p-md-3">10"</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Hilux</td>
                  <td className="p-1 p-md-3">2007-2016</td>
                  <td className="p-1 p-md-3">38"</td>
                  <td className="p-1 p-md-3">12"-</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Hilux</td>
                  <td className="p-1 p-md-3">2007-2016</td>
                  <td className="p-1 p-md-3">44"</td>
                  <td className="p-1 p-md-3">12"-</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Hilux ({Dictionary()[language]["catalog"]["new_rear"]} 2020)</td>
                  <td className="p-1 p-md-3">2017-</td>
                  <td className="p-1 p-md-3">35"</td>
                  <td className="p-1 p-md-3">10"</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Hilux</td>
                  <td className="p-1 p-md-3">2017-</td>
                  <td className="p-1 p-md-3">38"-40"</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Tacoma</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">35"-37"</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Tacoma</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">35"-40"</td>
                  <td className="p-1 p-md-3">{Dictionary()[language]["catalog"]["adjustment"]}</td>
                  <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                  <td className="p-1 p-md-3">Tacoma</td>
                  <td className="p-1 p-md-3"></td>
                  <td className="p-1 p-md-3">38"</td>
                  <td className="p-1 p-md-3"></td>
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