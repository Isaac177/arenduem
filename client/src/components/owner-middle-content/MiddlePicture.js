import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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

    return (
        <div className="my-4">
            {images.length > 0 && (
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
                        {images.map((image, index) => (
                            <div key={index}>
                                <img
                                    className="w-full h-auto mb-4 rounded-lg"
                                    src={`http://localhost:8000/${image}`}
                                    alt="room"
                                    style={{ height: 'auto', width: '100%', objectFit: 'contain' }}
                                />
                            </div>
                        ))}
                    </Carousel>
                    <div className="grid grid-cols-4 gap-4 mt-4 p-2 px-20" style={{marginTop: '-20px'}}>
                        {images.map((image, index) => (
                                <img
                                    key={index}
                                    className={`w-full h-auto rounded-lg cursor-pointer ${
                                        index === selectedImage ? 'border-4 border-green-500' : ''
                                    }`}
                                    src={`http://localhost:8000/${image}`}
                                    alt="room"
                                    style={{ height: '200px', width: '400px', objectFit: 'cover' }}
                                    onClick={() => handleThumbnailClick(index)}
                                />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MiddlePicture;
