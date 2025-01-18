import { useContext } from 'react';
import CustomNavbar from 'components/navbar/customnavbar'
import Footer from 'components/footer/footer'
import { Row, Col, Button } from 'react-bootstrap';
import LanguageContext from '../utilities/Language/languageContext.js';
import Dictionary from '../utilities/Language/dictionary.js';
import Table from 'react-bootstrap/Table';
import BrandCarousel from '@components/carousel/brandCarousel';
import { useRouter } from 'next/router';

// Vörulistasíðan er með filter fyrir
// ->Tegund
// ->Árgerð
// ->Dekkjastærð
// ->Felgubreidd
// Og cards fyrir vörur

export default function CatalogBenz() {

  const router = useRouter();

  const { language } = useContext(LanguageContext);
  
  return (
    <>
      <CustomNavbar />
      <main> 
        <BrandCarousel brand="Benz" number_of_images="1"/>
        <Row className="align-items-start mt-3 me-0  mb-2">
          <Col className="col-12 text-center">
            <Button onClick={(e) => {e.preventDefault(); router.push('/myndasafntemplate?producer=benz');}}><h5>{Dictionary()[language]["catalog"]["all_photos"]}</h5></Button>
          </Col>
        </Row>      
        <Row className="align-items-start me-0">
          <Col className="col-12 text-center mb-2">
            <h1>Mercedes Benz</h1>
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
                    <td className="p-1 p-md-3">Sprinter</td>
                    <td className="p-1 p-md-3">1995-2005</td>
                    <td className="p-1 p-md-3">35"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                    <td className="p-1 p-md-3">Sprinter</td>
                    <td className="p-1 p-md-3">2006-2017</td>
                    <td className="p-1 p-md-3">35"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                    <td className="p-1 p-md-3">Sprinter</td>
                    <td className="p-1 p-md-3">2006-2017</td>
                    <td className="p-1 p-md-3">44"-46"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                    <td className="p-1 p-md-3">Sprinter</td>
                    <td className="p-1 p-md-3">2018-</td>
                    <td className="p-1 p-md-3">35"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                    <td className="p-1 p-md-3">Sprinter</td>
                    <td className="p-1 p-md-3">2018-</td>
                    <td className="p-1 p-md-3">44"-46"</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                    <td className="p-1 p-md-3">Sprinter {Dictionary()[language]["catalog"]["door_adjustment_piece"]}</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">- kr.</td>
                </tr>
                <tr>
                    <td className="p-1 p-md-3">Sprinter {Dictionary()[language]["catalog"]["side_extension"]} 2 {Dictionary()[language]["general"]["pcs"]}</td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3"></td>
                    <td className="p-1 p-md-3">- kr.</td>
                </tr>                
              </tbody>
            </Table>
          </Col>
        </Row>
        </main>            
      <Row className="align-items-start me-0">
        <Footer/>
      </Row>
    </>
  )
}