import { useContext } from 'react';
import SimpleLayout from '../components/layout/simple';
import ImageGallery from '../components/imagegallery/imageGallery';
import { Container } from 'react-bootstrap';
import LanguageContext from 'utilities/Language/languageContext.js';
import Dictionary from '../utilities/Language/dictionary.js';


export default function Myndasafn() {

  const { language } = useContext(LanguageContext);
  
  return (
    <SimpleLayout>
      <Container>
        <h1>{Dictionary()[language]["gallery"]["gallery"]}</h1>
        <p>{Dictionary()[language]["gallery"]["gallery_text"]}</p>
        <ImageGallery/>
      </Container>
    </SimpleLayout>
  );
}