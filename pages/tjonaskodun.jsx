import SimpleLayout from '../components/layout/simple'
import { Row, Col } from 'react-bootstrap';

export default function Tjonaskodun(initialData) {
  return (
    <SimpleLayout>
      <Row>
        <Col className='d-flex col-12 col-lg-6 position-relative'>
            <div className="align-items-center justify-content-center">
              <h1 className="display-2">Réttingar</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere posuere dui. Proin non porta est. Praesent a lacus vestibulum, laoreet elit mattis, rutrum mauris. Aliquam urna massa, tempus vel fermentum pulvinar, feugiat porttitor nibh.</p>
            </div>
        </Col>
        <Col className='d-flex col-12 col-lg-6 position-relative'>
            <div className="align-items-center justify-content-center">
              <h1 className="display-2">Sprautun</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere posuere dui. Proin non porta est. Praesent a lacus vestibulum, laoreet elit mattis, rutrum mauris. Aliquam urna massa, tempus vel fermentum pulvinar, feugiat porttitor nibh. Integer condimentum magna non odio scelerisque congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc sapien libero, suscipit et orci vel, elementum laoreet magna.</p>
            </div>
        </Col>
      </Row>
    </SimpleLayout>
  )
}