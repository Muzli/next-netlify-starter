import { useContext } from 'react';
import CustomNavbar from 'components/navbar/customnavbar'
import Footer from 'components/footer/footer'
import { Row, Col } from 'react-bootstrap';
import LanguageContext from '../utilities/Language/languageContext.js';
import Dictionary from '../utilities/Language/dictionary.js';
import Table from 'react-bootstrap/Table';
import ProductRows from '../lib/product/productRows'; 
import { dodgeProducts } from '../lib/product/products/dodge';

// Vörulistasíðan er með filter fyrir
// ->Tegund
// ->Árgerð
// ->Dekkjastærð
// ->Felgubreidd
// Og cards fyrir vörur

export default function CatalogDodge() {

  const { language } = useContext(LanguageContext);
  
  return (
    <>
      <CustomNavbar />
        <main>        
          <Row className="align-items-start me-0">
            <Col className="col-12 text-center mb-2">
              <h1>Dodge Ram</h1>
              <Table className="catalog-table">
                <thead>
                  <tr>
                    <th className="p-1 p-md-3"></th>
                    <th className="p-1 p-md-3">{Dictionary()[language]["catalog"]["type"]}</th>
                    <th className="p-1 p-md-3">{Dictionary()[language]["catalog"]["year"]}</th>
                    <th className="p-1 p-md-3">{Dictionary()[language]["catalog"]["tire_size"]}</th>
                    <th className="p-1 p-md-3">{Dictionary()[language]["catalog"]["rim_width"]}</th>
                    <th className="p-1 p-md-3">{Dictionary()[language]["catalog"]["price"]}</th>
                  </tr>
                </thead>
                <tbody>
                  <ProductRows
                    products={dodgeProducts}
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