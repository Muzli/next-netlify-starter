import CustomNavbar from '../navbar/customnavbar'
import Footer from '../footer/footer'
import { Container } from 'react-bootstrap';
import { React } from 'react'

export default function SimpleLayout(props) {
  return (
    <>
      <CustomNavbar />
      <main>
        <Container>
          {props.children}
          <Footer />
        </Container>        
      </main>      
    </>
  )
}