import SimpleLayout from '../components/layout/simple';
import ImageGallery from '../components/imagegallery/imageGallery';
import { Container, Row, Col, SSRProvider } from 'react-bootstrap';


export default function Myndasafn() {
    return (
      <SSRProvider>
        <SimpleLayout>
          <Container>
            <h1>Myndasafn</h1>
            <p>Myndir frá 40 ára afmælissýningu Ferðaklúbbsins 4x4 í Fífunni 15.-17. september 2023</p>
            <ImageGallery/>
          </Container>
        </SimpleLayout>
      </SSRProvider>
    );
}