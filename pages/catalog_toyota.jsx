import { useContext } from 'react';
import { useRouter }  from 'next/router';
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

  const getModelName = (model) => {
    // Function to convert model name parameter to readable label
    switch (model) {
      case 'lc_70': return 'LC 70';
      case 'lc_80': return 'LC 80';
      case 'lc_90': return 'LC 90';
      case 'lc_100': return 'LC 100';
      case 'lc_150': return 'LC 150';
      case 'lc_200': return 'LC 200';
      case 'lc_250': return 'LC 250';
      case 'tacoma': return 'Tacoma';
      case 'hilux': return 'Hilux';
      default: return '';
    }
  } 

  const { language } = useContext(LanguageContext);
  const router = useRouter(); // Use useRouter to access query parameters
  const { model } = router.query; // Extract the 'model' parameter from the URL
  let modelName = model ? getModelName(model) : ''; // Convert to lowercase for consistency
  
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
            <h1>Toyota {modelName}</h1>
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
                {!model || model ==='lc_70' ? (
                  <>
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
                </>
                ) : null}
                {!model || model ==='lc_80' ? (
                  <>
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
                    <tr></tr>
                  </>
                ) : null}
                {!model || model ==='lc_90' ? (
                  <>
                    <tr>
                      <td className="p-1 p-md-3">Lc 90</td>
                      <td className="p-1 p-md-3"></td>
                      <td className="p-1 p-md-3">38"</td>
                      <td className="p-1 p-md-3"></td>
                      <td className="p-1 p-md-3">- kr.</td>
                    </tr>
                  </>
                ) : null}
                {!model || model ==='lc_100' ? (
                  <>
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
                  </>
                ) : null}
                {!model || model ==='lc_150' ? (
                  <>
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
                  </>
                ) : null}
                {!model || model ==='lc_200' ? (
                  <>
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
                  </>
                ) : null}
                {!model || model ==='lc_250' ? (
                  <>
                    <tr>
                      <td className="p-1 p-md-3">Lc 250</td>
                      <td className="p-1 p-md-3">2025-</td>
                      <td className="p-1 p-md-3">35" - 37"</td>
                      <td className="p-1 p-md-3"></td>
                      <td className="p-1 p-md-3">{Dictionary()[language]["catalog"]["contact_for_price"]}</td>
                    </tr>
                    <tr>
                      <td className="p-1 p-md-3">Lc 250</td>
                      <td className="p-1 p-md-3">2025-</td>
                      <td className="p-1 p-md-3">42"</td>
                      <td className="p-1 p-md-3"></td>
                      <td className="p-1 p-md-3">{Dictionary()[language]["catalog"]["contact_for_price"]}</td>
                    </tr>
                    <tr>
                      <td className="p-1 p-md-3">Lc 250</td>
                      <td className="p-1 p-md-3">2025-</td>
                      <td className="p-1 p-md-3">44"</td>
                      <td className="p-1 p-md-3"></td>
                      <td className="p-1 p-md-3">{Dictionary()[language]["catalog"]["contact_for_price"]}</td>
                    </tr>
                  </>
                ) : null}
                {!model || model ==='hilux' ? (
                  <>
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
                  </>
                ) : null}
                {!model || model ==='tacoma' ? (
                  <>
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
                  </>
                ) : null}
                
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