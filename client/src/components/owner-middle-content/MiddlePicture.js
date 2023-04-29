import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProperties } from '../../actions/propertyActions';
import {apiBaseUrl} from '../../config/config';


const MiddlePicture = () => {
    const dispatch = useDispatch();
    const properties = useSelector((state) => state.property.property);
    const userId = useSelector((state) => state.auth.userId);
    console.log(properties)

    useEffect(() => {
        if (userId)
        dispatch(getProperties());
    }, [dispatch, userId]);

    const firstProperty = properties && properties.properties && properties.properties.length > 0 ? properties.properties[0] : null;
    const propertyDetails = firstProperty ? firstProperty.PropertyDetail : null;
    const propertyPictures = propertyDetails ? propertyDetails.PropertyPictures : [];
    const images = propertyPictures.map((picture) => picture.fileUrl);


    console.log(images)

    return (
        <div className="container">
            {images.length > 0 && (
                <div>
                    <img
                        className="w-full h-auto mb-4"
                        src={`http://localhost:8000/${images[0]}`}
                        alt="room"
                    />
                    <div className="grid grid-cols-4 gap-4">
                        {images.slice(1).map((image, index) => (
                            <img
                                key={index}
                                className="w-full h-auto"
                                src={`http://localhost:8000/${image}`}
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
