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
              <p>Þú getur komið við hjá okkur í tjónaskoðun til að fá umsögn og kostnaðarmat vegna viðgerðar eða tjóns sem þú hefur orðið fyrir.</p>
            </div>
        </Col>
      </Row>
    </SimpleLayout>
  )
}