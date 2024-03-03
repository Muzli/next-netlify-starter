import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './carouselImage';


// @param {string} custom_attributes        A Javascript object containing the custom attributes of the brand 
// @param {string} custom_attributes.brand  The brand of cars to be displayed in the carousel
//                                          (e.g. 'Ford', 'Land cruiser' etc.)
//                                          The brand is used to import the images from the correct folder,
//                                          so the folder name must match the brand name. 
// @param {string} custom_attributes.number_of_images   The number of images to be displayed in the carousel
// @returns {JSX.Element} - A carousel with images of the brand 
function BrandCarousel(custom_attributes){
    const int_number_of_images = parseInt(custom_attributes.number_of_images);
    const images = Array.from({length: custom_attributes.number_of_images}, (_, i) => `backgrounds/expo/${custom_attributes.brand}/carousel_${i + 1}.jpg`);
    return (
        <Carousel slide={false}>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <CarouselImage src={image}/>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default BrandCarousel;