import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ScrollAnimation from "react-animate-on-scroll";

const defaultImages = [
    'https://via.placeholder.com/640x360?text=Default+Image+1',
    'https://via.placeholder.com/640x360?text=Default+Image+2',
    'https://via.placeholder.com/640x360?text=Default+Image+3',
];


const MiddlePicture = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const carouselRef = React.useRef();

    const handleCarouselChange = (currentIndex) => {
        setSelectedImage(currentIndex);
    };

    const handleThumbnailClick = (index) => {
        setSelectedImage(index);
        carouselRef.current.moveTo(index);
    };

    const displayImages = images?.length > 0 ? images : defaultImages;

    return (
        <div className="my-4">
            <div>
                <Carousel
                    ref={carouselRef}
                    selectedItem={selectedImage}
                    showArrows={true}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    showIndicators={false}
                    onChange={handleCarouselChange}
                >
                    {displayImages.map((image, index) => (
                        <ScrollAnimation
                            key={index}
                            animateIn="animate__fadeIn"
                            delay={index * 800}
                            duration={1}
                            animateOnce={true}
                        >
                            <img
                                className="w-full h-auto mb-4 rounded-lg"
                                src={images?.length > 0 ? `http://localhost:8000/${image}` : image}
                                alt="room"
                                style={{ height: 'auto', width: '100%', objectFit: 'contain' }}
                            />
                        </ScrollAnimation>
                    ))}
                </Carousel>
                <div className="grid grid-cols-4 gap-4 mt-4 p-2 px-20" style={{ marginTop: '-20px' }}>
                    {displayImages.map((image, index) => (
                        <ScrollAnimation
                            key={index}
                            animateIn="animate__fadeIn"
                            delay={index * 800}
                            duration={2}
                            animateOnce={true}
                        >
                        <img
                            key={index}
                            className={`w-full h-auto rounded-lg cursor-pointer ${
                                index === selectedImage ? 'border-4 border-green-500' : ''
                            }`}
                            src={images?.length > 0 ? `http://localhost:8000/${image}` : image}
                            alt="room"
                            style={{ height: '200px', width: '400px', objectFit: 'cover' }}
                            onClick={() => handleThumbnailClick(index)}
                        />
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MiddlePicture;
