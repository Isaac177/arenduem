import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";


const PropertyDescription = ({ property, propertyDetails }) => {

    return (
        <ScrollAnimation animateOnce={true} animateIn="animate__fadeIn" duration={2}
            className="bg-white p-6 my-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-aqua-500">Property Description</h2>
            <p className="text-sm text-gray-600">
                {property && propertyDetails.description}
            </p>
        </ScrollAnimation>
    );
};

export default PropertyDescription;
