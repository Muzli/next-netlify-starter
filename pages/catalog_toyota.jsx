import { useContext } from 'react';
import CustomNavbar from 'components/navbar/customnavbar'
import Footer from 'components/footer/footer'
import { Row, Col } from 'react-bootstrap';
import LanguageContext from '../utilities/Language/languageContext.js';
import Dictionary from '../utilities/Language/dictionary.js';
import Table from 'react-bootstrap/Table';
import BrandCarousel from '@components/carousel/brandCarousel';
import ProductRows from '../lib/product/productRows'; 
import { toyotaProducts } from '../lib/product/products/toyota';

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
        <BrandCarousel brand="Toyota" number_of_images="6"/> 
        <Row className="align-items-start mt-3 me-0  mb-2">
          <Col className="col-12 text-center">
            <a href="/gallery_toyota"><h3>{Dictionary()[language]["catalog"]["all_toyota_photos"]}</h3></a>
          </Col>
        </Row>
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
                <ProductRows
                  products={toyotaProducts}
                  language={language}
                />               
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