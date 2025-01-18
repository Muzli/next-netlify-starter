import { Row, Col, Container } from 'react-bootstrap';  
import Photo from './photo';

function ImageGalleryTemplate({ producer, filenames }) {
    return (
        <Container>
            <Row>
                {filenames.map((filename, index) => (
                    <Col className="col-lg-4 col-12 mb-4 mb-lg-0">
                        <Photo producer={producer} filename={filename}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ImageGalleryTemplate;