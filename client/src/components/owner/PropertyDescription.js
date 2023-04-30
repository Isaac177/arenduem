import React from 'react';

const PropertyDescription = ({ propertyDetails }) => {
    return (
        <div className="bg-white p-6 my-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">Property Description</h2>
            <p className="text-sm text-gray-600">
                {propertyDetails && propertyDetails.description}
            </p>
        </div>
    );
};

export default PropertyDescription;
