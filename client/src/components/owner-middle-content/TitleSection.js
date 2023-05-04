import React from 'react';

const TitleSection = ({ firstProperty, propertyDetails }) => {

    return (
        <>
            <div className="flex my-4 flex-row justify-between border-l-8 pb-4 border-aqua-500 bg-white rounded-lg p-4">
                <div className='row flex flex-col gap-4'>
                    <p className="text-sm text-gray-500">{firstProperty && JSON.parse(firstProperty.propertyType).toUpperCase()}</p>
                    <h1 className="text-2xl font-bold text-primary-700">{propertyDetails && propertyDetails.title}</h1>
                    <p className="text-sm text-gray-500">Posted on {firstProperty && firstProperty.createdAt.slice(0, 10)}</p>
                </div>
                <div className='row flex gap-4 flex-col'>
                    <div className="relative flex flex-row gap-4">
                        <p className="text-sm text-gray-500">{firstProperty && firstProperty.Address.city}</p>
                    </div>
                    <h1 className="text-2xl font-bold text-aqua-500">{firstProperty && firstProperty.Price.pricePerMonth} kzt<span className="text-2xl text-gray-500">/month</span></h1>
                </div>
            </div>
        </>
    );
};

export default TitleSection;
