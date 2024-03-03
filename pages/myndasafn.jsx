import SimpleLayout from '../components/layout/simple';
import ImageGallery from '../components/imagegallery/imageGallery';
import { Container, Row, Col, SSRProvider } from 'react-bootstrap';


export default function Myndasafn() {
    return (
      <SSRProvider>
        <SimpleLayout>
          <Container>
            <h1>Myndasafn</h1>
            <ImageGallery/>
          </Container>
        </SimpleLayout>
      </SSRProvider>
    );
}