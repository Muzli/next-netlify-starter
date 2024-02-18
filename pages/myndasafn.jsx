import SimpleLayout from '../components/layout/simple';
import ImageGallery from '../components/imagegallery/imageGallery';
import { Container, Row, Col } from 'react-bootstrap';


export default function Myndasafn() {
    return (
        <SimpleLayout>
            <Container>
                <h1>Myndasafn</h1>
                <ImageGallery/>
            </Container>
        </SimpleLayout>
    );
}