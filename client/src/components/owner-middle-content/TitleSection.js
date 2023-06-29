import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const TitleSection = ({ property, propertyDetails }) => {

    return (
        <ScrollAnimation
            animateIn="animate__fadeInUp"
            duration={2}
            animateOnce
        >
            <div className="flex flex-col sm:flex-row my-4 justify-between border-l-8 pb-4 border-aqua-500 bg-white rounded-lg p-4 shadow-lg">
                <div className='flex flex-col gap-4 mb-4 sm:mb-0'>
                    <p className="text-xs text-gray-500">{property && JSON.parse(property?.propertyType).toUpperCase()}</p>
                    <h1 className="text-2xl font-bold text-primary-700">{propertyDetails && propertyDetails?.title.toUpperCase()}</h1>
                    <p className="text-xs text-gray-500">Posted on {property && property?.createdAt.slice(0, 10)}</p>
                </div>
                <div className='flex gap-4 flex-col'>
                    <div className="relative flex flex-row gap-4">
                        <p className="text-xs text-gray-500">{property && property?.Address?.city}</p>
                    </div>
                    <h1 className="text-2xl font-bold text-aqua-500">{property && property?.Price?.pricePerMonth} kzt<span className="text-2xl text-gray-500">/month</span></h1>
                </div>
            </div>
        </ScrollAnimation>
    );
};

export default TitleSection;
