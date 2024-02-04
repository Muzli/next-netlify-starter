import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './carouselImage';

function HeroCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Akur 1.jpeg'/>
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Benz 1.jpeg'/>
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Bronco 2.jpeg'/>
            </Carousel.Item>
        </Carousel>
    );
}

export default HeroCarousel;