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

export default function CatalogBenz() {
  
  return (
    <>
    <CustomNavbar />
      <main>        
        <Row className="align-items-start">
          <Col className="col-12 text-center mb-2">
            <h1>Mercedes Benz</h1>
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
                    <td>Sprinter</td>
                    <td>1995-2005</td>
                    <td>35"</td>
                    <td></td>
                    <td>228.000 kr.</td>
                </tr>
                <tr>
                    <td>Sprinter</td>
                    <td>2006-2017</td>
                    <td>35"</td>
                    <td></td>
                    <td>228.000 kr.</td>
                </tr>
                <tr>
                    <td>Sprinter</td>
                    <td>2006-2017</td>
                    <td>44"-46"</td>
                    <td></td>
                    <td>336.000 kr.</td>
                </tr>
                <tr>
                    <td>Sprinter</td>
                    <td>2018-</td>
                    <td>35"</td>
                    <td></td>
                    <td>252.000 kr.</td>
                </tr>
                <tr>
                    <td>Sprinter</td>
                    <td>2018-</td>
                    <td>44"-46"</td>
                    <td></td>
                    <td>414.000 kr.</td>
                </tr>
                <tr>
                    <td>Sprinter hurðafærslustykki</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>110.000 kr.</td>
                </tr>
                <tr>
                    <td>Sprinter hliðar útvíkkun 2 stk.</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>230.000 kr.</td>
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