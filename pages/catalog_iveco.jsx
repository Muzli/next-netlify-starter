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

export default function CatalogIveco() {

  const { language } = useContext(LanguageContext);
  
  return (
    <>
      <CustomNavbar />
      <main>
        <BrandCarousel brand="Iveco" number_of_images="1"/>    
        <Row className="align-items-start me-0">
          <Col className="col-12 text-center mb-2">
            <h1>Iveco</h1>
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
                    <td className="p-1 p-md-3">{Dictionary()[language]["catalog"]["pickup"]} - {Dictionary()[language]["catalog"]["front_flares"]}</td>
                    <td className="p-1 p-md-3">2017-</td>
                    <td className="p-1 p-md-3">37"-40"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">252.000 kr.</td>
                </tr>
                <tr>
                    <td className="p-1 p-md-3">{Dictionary()[language]["catalog"]["rear_flares_modification"]}</td>
                    <td className="p-1 p-md-3">2017-</td>
                    <td className="p-1 p-md-3">35"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">110.000 kr.</td>
                </tr>
                <tr>
                    <td className="p-1 p-md-3">Van</td>
                    <td className="p-1 p-md-3">2021-</td>
                    <td className="p-1 p-md-3">38"</td>
                    <td className="p-1 p-md-3">10"</td>
                    <td className="p-1 p-md-3">360.000 kr.</td>
                </tr>
                <tr>
                    <td className="p-1 p-md-3">Van</td>
                    <td className="p-1 p-md-3">2021-</td>
                    <td className="p-1 p-md-3">44"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">437.000 kr.</td>
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