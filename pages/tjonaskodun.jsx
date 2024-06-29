import { useContext } from 'react';
import SimpleLayout from '../components/layout/simple'
import LanguageContext from 'utilities/Language/languageContext.js';
import Dictionary from '../utilities/Language/dictionary.js';
import { Row, Col } from 'react-bootstrap';

export default function Tjonaskodun() {

  const { language } = useContext(LanguageContext);

  return (
    <SimpleLayout>
      <Row>
        <Col className='px-5'>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
              <h1 className="display-2 py-3">{Dictionary()[language]["navbar"]["inspection"]}</h1>
              <p>{Dictionary()[language]["damage_inspection"]["damage_inspection_text"]}</p>
              <h1 className="display-2 py-3">Bílaréttingar</h1>
              <h1 className="display-2 py-3">Bílamálun</h1>
            </div>
        </Col>
      </Row>
    </SimpleLayout>
  )
}