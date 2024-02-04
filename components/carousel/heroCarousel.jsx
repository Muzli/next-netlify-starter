import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './carouselImage';

function HeroCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Akur 1.jpeg'/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Benz 1.jpeg'/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HeroCarousel;