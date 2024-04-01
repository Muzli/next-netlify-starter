import CustomNavbar from '../navbar/customnavbar'
import Footer from '../footer/footer'
import { Container, Row } from 'react-bootstrap';
import { React } from 'react'

export default function SimpleLayout(props) {
  return (
    <>
      <CustomNavbar />
      <main className="min-vh-100">
        <Row className="gx-0 gx-sm-4">
          <Container>
            {props.children}          
          </Container> 
        </Row>
        <Row className="gx-0 gx-sm-4">
          <Footer/>
        </Row>         
      </main>          
    </>
  )
}