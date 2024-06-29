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

export default function CatalogNissan() {

  const { language } = useContext(LanguageContext);
  
  return (
    <>
      <CustomNavbar />
      <main>
        <BrandCarousel brand="Nissan" number_of_images="1"/>     
        <Row className="align-items-start me-0">
          <Col className="col-12 text-center mb-2">
            <h1>Nissan</h1>
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
                    <td className="p-1 p-md-3">Navara dc</td>
                    <td className="p-1 p-md-3">1998-2004</td>
                    <td className="p-1 p-md-3">33"-35"</td>
                    <td className="p-1 p-md-3">10"</td>
                    <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                    <td className="p-1 p-md-3">Navara xc</td>
                    <td className="p-1 p-md-3">1998-20004</td>
                    <td className="p-1 p-md-3">33"-35"</td>
                    <td className="p-1 p-md-3">10"</td>
                    <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                    <td className="p-1 p-md-3">Navara</td>
                    <td className="p-1 p-md-3">2005-2017</td>
                    <td className="p-1 p-md-3">35"</td>
                    <td className="p-1 p-md-3">10"</td>
                    <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                    <td className="p-1 p-md-3">Navara</td>
                    <td className="p-1 p-md-3">2005-2017</td>
                    <td className="p-1 p-md-3">38"</td>
                    <td className="p-1 p-md-3">12"</td>
                    <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                    <td className="p-1 p-md-3">Navara</td>
                    <td className="p-1 p-md-3">2018-</td>
                    <td className="p-1 p-md-3">38"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                    <td className="p-1 p-md-3">Navara AT</td>
                    <td className="p-1 p-md-3">2018-</td>
                    <td className="p-1 p-md-3">35"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3"></td>
                </tr>
                <tr>
                    <td className="p-1 p-md-3">Patrol {Dictionary()[language]["catalog"]["newer"]}</td>
                    <td className="p-1 p-md-3">1998-2003</td>
                    <td className="p-1 p-md-3">44"-46</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                    <td className="p-1 p-md-3">Patrol {Dictionary()[language]["catalog"]["newer"]}</td>
                    <td className="p-1 p-md-3">2005-2010</td>
                    <td className="p-1 p-md-3">35"</td>
                    <td className="p-1 p-md-3">10"</td>
                    <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                    <td className="p-1 p-md-3">Patrol {Dictionary()[language]["catalog"]["newer"]}</td>
                    <td className="p-1 p-md-3">2005-2010</td>
                    <td className="p-1 p-md-3">44"</td>
                    <td className="p-1 p-md-3">14"-</td>
                    <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                    <td className="p-1 p-md-3">Pathfinder</td>
                    <td className="p-1 p-md-3">2005-</td>
                    <td className="p-1 p-md-3">35"</td>
                    <td className="p-1 p-md-3">10"</td>
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