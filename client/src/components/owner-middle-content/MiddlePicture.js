import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProperties } from '../../actions/propertyActions';
import {apiBaseUrl} from '../../config/config';


const MiddlePicture = () => {
    const dispatch = useDispatch();
    const properties = useSelector((state) => state.property.property);
    console.log(properties)

    useEffect(() => {
        dispatch(getProperties());
    }, [dispatch]);

    const firstProperty = properties && properties.properties && properties.properties.length > 0 ? properties.properties[0] : null;
    const images = firstProperty ? firstProperty.PropertyDetail.pictures.map((picture) => picture.path) : []
   // const images = firstProperty ? firstProperty.PropertyDetail.pictures : []


    console.log(images)

    return (
        <div className="container">
            {images.length > 0 && (
                <div>
                    <img
                        className="w-full h-auto mb-4"
                        src={`localhost:8000/uploads/${images[0]}`}
                        alt="room"
                    />
                    <div className="grid grid-cols-4 gap-4">
                        {images.slice(1).map((image, index) => (
                            <img
                                key={index}
                                className="w-full h-auto"
                                src={`localhost:8000/uploads/${image}`}
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
