import CustomNavbar from '../navbar/customnavbar'
import Footer from '../footer/footer'
import { Container, Row } from 'react-bootstrap';
import { React } from 'react'

export default function SimpleLayout(props) {
  return (
    <>
      <CustomNavbar />
      <main class="min-vh-100">
        <Row>
          <Container>
            {props.children}          
          </Container> 
        </Row>
        <Row>
          <Footer/>
        </Row>         
      </main>          
    </>
  )
}