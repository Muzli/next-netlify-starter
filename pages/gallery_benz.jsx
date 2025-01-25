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
        <h1 className="text-center mb-4">Mercedes Benz</h1>
        <Row>
          <Col className="col-lg-4 col-12 mb-4 mb-lg-0">
            <Photo producer="benz" filename="Econoline_front.jpeg"/>
          </Col>
        </Row>
      </Container>
    </SimpleLayout>
  );
}