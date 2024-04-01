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

export default function CatalogBenz() {
  
  return (
    <SSRProvider>
      <>
        <CustomNavbar />
        <main> 
          <BrandCarousel brand="Benz" number_of_images="1"/>       
          <Row className="align-items-start me-0">
            <Col className="col-12 text-center mb-2">
              <h1>Mercedes Benz</h1>
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
                      <td className="p-1 p-md-3">Sprinter</td>
                      <td className="p-1 p-md-3">1995-2005</td>
                      <td className="p-1 p-md-3">35"</td>
                      <td className="p-1 p-md-3"></td>
                      <td className="p-1 p-md-3">228.000 kr.</td>
                  </tr>
                  <tr>
                      <td className="p-1 p-md-3">Sprinter</td>
                      <td className="p-1 p-md-3">2006-2017</td>
                      <td className="p-1 p-md-3">35"</td>
                      <td className="p-1 p-md-3"></td>
                      <td className="p-1 p-md-3">228.000 kr.</td>
                  </tr>
                  <tr>
                      <td className="p-1 p-md-3">Sprinter</td>
                      <td className="p-1 p-md-3">2006-2017</td>
                      <td className="p-1 p-md-3">44"-46"</td>
                      <td className="p-1 p-md-3"></td>
                      <td className="p-1 p-md-3">336.000 kr.</td>
                  </tr>
                  <tr>
                      <td className="p-1 p-md-3">Sprinter</td>
                      <td className="p-1 p-md-3">2018-</td>
                      <td className="p-1 p-md-3">35"</td>
                      <td className="p-1 p-md-3"></td>
                      <td className="p-1 p-md-3">252.000 kr.</td>
                  </tr>
                  <tr>
                      <td className="p-1 p-md-3">Sprinter</td>
                      <td className="p-1 p-md-3">2018-</td>
                      <td className="p-1 p-md-3">44"-46"</td>
                      <td className="p-1 p-md-3"></td>
                      <td className="p-1 p-md-3">414.000 kr.</td>
                  </tr>
                  <tr>
                      <td className="p-1 p-md-3">Sprinter hurðafærslustykki</td>
                      <td className="p-1 p-md-3"></td>
                      <td className="p-1 p-md-3"></td>
                      <td className="p-1 p-md-3"></td>
                      <td className="p-1 p-md-3">110.000 kr.</td>
                  </tr>
                  <tr>
                      <td className="p-1 p-md-3">Sprinter hliðar útvíkkun 2 stk.</td>
                      <td className="p-1 p-md-3"></td>
                      <td className="p-1 p-md-3"></td>
                      <td className="p-1 p-md-3"></td>
                      <td className="p-1 p-md-3">230.000 kr.</td>
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
    </SSRProvider>
  )
}