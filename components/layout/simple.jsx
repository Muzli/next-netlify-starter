import CustomNavbar from '../navbar/customnavbar'
import Footer from '../footer/footer'
import HeroCarousel from '@components/carousel/heroCarousel';
import { Container, Row } from 'react-bootstrap';
import { React } from 'react'

export default function SimpleLayout(props) {
  return (
    <>
      <CustomNavbar />
      <main className="min-vh-100">
        <Row>
          <HeroCarousel>
            
          </HeroCarousel>
        </Row>
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