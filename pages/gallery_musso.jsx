import { useContext } from 'react';
import SimpleLayout from '../components/layout/simple';
import Photo from '../components/imagegallerytemplate/photo';
import { Container, Row, Col } from 'react-bootstrap';
import LanguageContext from 'utilities/Language/languageContext.js';
import Dictionary from '../utilities/Language/dictionary.js';


export default function GalleryBenz() {

  const { language } = useContext(LanguageContext);
  
  return (
    <SimpleLayout>
      <Container>
        <h1 className="text-center mb-4">Musso & Rexton</h1>
        <Row>
          <Col className="col-lg-4 col-12 mb-4 mb-lg-0">
            <Photo producer="Musso" filename="carousel_1.jpg"/>
          </Col>
          <Col className="col-lg-4 col-12 mb-4 mb-lg-0">
            <Photo producer="Musso" filename="carousel_2.jpg"/>
          </Col>
          <Col className="col-lg-4 col-12 mb-4 mb-lg-0">
            <Photo producer="Musso" filename="carousel_3.jpg"/>
          </Col>
        </Row>
        <Row>
          <Col className="col-lg-4 col-12 mb-4 mb-lg-0">
            <Photo producer="Musso" filename="carousel_4.jpg"/>
          </Col>
          <Col className="col-lg-4 col-12 mb-4 mb-lg-0">
            <Photo producer="Musso" filename="carousel_5.jpg"/>
          </Col>
          <Col className="col-lg-4 col-12 mb-4 mb-lg-0">
            <Photo producer="Musso" filename="carousel_6.jpg"/>
          </Col>
        </Row>
      </Container>
    </SimpleLayout>
  );
}