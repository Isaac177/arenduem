import React, {useState} from 'react';


const PropertyDescription = ({ property, propertyDetails }) => {
    const [description, setDescription] = useState(propertyDetails.description);


    return (
        <div className="bg-white p-6 my-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-aqua-500">Property Description</h2>
            <p className="text-sm text-gray-600">
                {property && propertyDetails.description}
            </p>
        </div>
    );
};

export default PropertyDescription;
