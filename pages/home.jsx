import { React, useContext } from 'react';
import SimpleLayout from '../components/layout/simple'
import IndexCard from '../components/layout/indexcard'
import IndexCardDouble from '../components/layout/indexcarddouble';
import LanguageContext from 'utilities/Language/languageContext.js';
import Dictionary from '../utilities/Language/dictionary.js';
import { Row, Col } from 'react-bootstrap';

export default function Home() {

    const { language } = useContext(LanguageContext);

    return (          
        <SimpleLayout>
            <Row>
                <IndexCard backgroundClass='indexcard lc-background-img' url='/brettakantar' title={Dictionary()[language]['navbar']['catalog']} />
                <span className="col-lg-1"/>
                <IndexCard backgroundClass='indexcard garage-background-img' url='/tjonaskodun' title={Dictionary()[language]["navbar"]["inspection"]} />        
            </Row>
            <Row className="margin-top">
                <IndexCardDouble backgroundClass='indexcard expo-background-img' url='/myndasafn' title={Dictionary()[language]["navbar"]["gallery"]} />
            </Row>
            <Row>
                <Col id='coop-index-header' className="d-flex col-12 mt-3 text-lg-center justify-content-center">
                    <h4>{Dictionary()[language]["home"]["co_operators"]}</h4>
                </Col>
            </Row>
        </SimpleLayout>
      )

};
