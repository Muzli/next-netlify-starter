import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './carouselImage';

function HeroCarousel() {
    return (
        <Carousel slide={false}>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Akur 1 - carousel.jpg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Bronco 2 - carousel.jpg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Cherokee 1 - carousel.jpg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Expedition 1 - carousel.jpg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Ford 1 - carousel.jpg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Hilux 1 - carousel.jpg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Iveco 3 - carousel.jpg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Jeep 2 - carousel.jpg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Patrol 3 - carousel.jpg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Rubicon 1 - carousel.jpg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Toyota 1 - carousel.jpg'/>                
            </Carousel.Item>
        </Carousel>
    );
}

export default HeroCarousel;