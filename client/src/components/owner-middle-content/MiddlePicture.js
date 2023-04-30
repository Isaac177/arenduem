import React from 'react';
import TitleSection from "../owner/TitleSection";

const MiddlePicture = ({ firstProperty, propertyDetails, images }) => {
    return (
        <div className="container">
            {images.length > 0 && (
                <div>
                    <img
                        className="w-full h-auto mb-4 rounded-lg"
                        src={`http://localhost:8000/${images[0]}`}
                        alt="room"
                    />
                    <div className="grid grid-cols-4 gap-4">
                        {images.slice(1).map((image, index) => (
                            <img
                                key={index}
                                className="w-full h-auto rounded-lg"
                                src={`http://localhost:8000/${image}`}
                                alt="room"
                                style={{ height: '200px', width: '400px', objectFit: 'cover' }}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MiddlePicture;
