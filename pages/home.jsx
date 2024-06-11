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
                <Col id='coop-index-header' className="d-flex col-12 mt-3 text-lg-center justify-content-center justify-content-lg-start">
                    <h1>{Dictionary()[language]["home"]["co_operators"]}</h1>
                </Col>
            </Row>
            <Row>
                <Col className="col-6 col-lg-3">
                    Aðili 1
                </Col>
                <Col className="col-6 col-lg-3">
                    Aðili 2
                </Col>
                <Col className="col-6 col-lg-3">
                    Aðili 3
                </Col>
                <Col className="col-6 col-lg-3">
                    Aðili 4
                </Col>
                <Col className="col-6 col-lg-3">
                    Aðili 5
                </Col>
                <Col className="col-6 col-lg-3">
                    Aðili 6
                </Col>
            </Row>
        </SimpleLayout>
      )

};
