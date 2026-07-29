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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', minHeight: '60vh' }}>
              <h1 className="display-5 py-3">{Dictionary()[language]["navbar"]["inspection"]}</h1>
              <p>{Dictionary()[language]["damage_inspection"]["damage_inspection_text"]}</p>
              <h1 className="display-5 py-3">{Dictionary()[language]["damage_inspection"]["auto_body_repair"]}</h1>
              <p>{Dictionary()[language]["damage_inspection"]["auto_body_repair_text"]}</p>
              <h1 className="display-5 py-3">{Dictionary()[language]["damage_inspection"]["painting"]}</h1>
              <p>{Dictionary()[language]["damage_inspection"]["painting_text"]}</p>
            </div>
        </Col>
      </Row>
    </SimpleLayout>
  )
}