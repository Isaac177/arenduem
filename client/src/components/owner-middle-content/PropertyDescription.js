import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";


const PropertyDescription = ({ property, propertyDetails }) => {

    return (
        <ScrollAnimation animateOnce={true} animateIn="animate__fadeIn" duration={2} className="bg-white p-4 sm:p-6 my-4 sm:my-6 rounded-lg  lg:w-full">
            <h2 className="text-lg sm:text-2xl font-semibold mb-4 text-aqua-500">Property Description</h2>
            <div className="w-full sm:max-w-prose mx-auto">
                <p className="text-xs sm:text-sm text-gray-600">
                    {property && propertyDetails.description}
                </p>
            </div>
        </ScrollAnimation>
    );
};

export default PropertyDescription;
