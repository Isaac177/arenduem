import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProperties } from '../../actions/propertyActions';

const MiddlePicture = () => {
    const dispatch = useDispatch();
    const properties = useSelector((state) => state.property.properties);

    useEffect(() => {
        dispatch(getProperties());
    }, [dispatch]);

    const firstProperty = properties && properties.length > 0 ? properties[0] : null;
    const images = firstProperty ? firstProperty.PropertyDetail.pictures : [];

    console.log(properties);

    return (
        <div className="container">
            {images.length > 0 && (
                <div>
                    <img
                        className="w-full h-auto mb-4"
                        src={images[0].preview}
                        alt="room"
                    />
                    <div className="grid grid-cols-4 gap-4">
                        {images.slice(1).map((image, index) => (
                            <img
                                key={index}
                                className="w-full h-auto"
                                src={image.preview}
                                alt="room"
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MiddlePicture;
