import { Row, Col } from 'react-bootstrap';

function ImageGallery() {
    return (
        <Row>
            <Col className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <img src="backgrounds/expo/Akur 1.jpeg"
                    className="w-100 shadow-1-strong rounded mb-4"/>
                <img src="backgrounds/expo/Benz 1.jpeg"
                    className="w-100 shadow-1-strong rounded mb-4"/>
            </Col>
            <Col className="col-lg-4 mb-4 mb-lg-0">
                <img src="backgrounds/expo/Bronco 1.jpeg"
                    className="w-100 shadow-1-strong rounded mb-4"/>
                <img src="backgrounds/expo/Bronco 2.jpeg"
                    className="w-100 shadow-1-strong rounded mb-4"/>
            </Col>
            <Col className="col-lg-4 mb-4 mb-lg-0">
                <img src="backgrounds/expo/Bronco 3.jpeg"
                    className="w-100 shadow-1-strong rounded mb-4"/>
                <img src="backgrounds/expo/Cherokee 1.jpeg"
                    className="w-100 shadow-1-strong rounded mb-4"/>
            </Col>
        </Row>
    );
}

export default ImageGallery;