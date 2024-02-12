import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './carouselImage';

function HeroCarousel() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Akur 1.jpeg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Benz 1.jpeg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Bronco 2.jpeg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Bronco 3.jpeg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Cherokee 1.jpeg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Expedition 1.jpeg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Ford 1.jpeg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Hilux 1.jpeg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Iveco 3.jpeg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Jeep 2.jpeg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Jimny 1.jpeg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Land Cruiser 1.jpeg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Patrol 3.jpeg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Rubicon 1.jpeg'/>                
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src='backgrounds/expo/Toyota 1.jpeg'/>                
            </Carousel.Item>
        </Carousel>
    );
}

export default HeroCarousel;