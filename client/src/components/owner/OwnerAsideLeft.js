import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropertyContext from './PropertyContext';

const OwnerAsideLeft = ({ userId }) => {
    const [isActive, setIsActive] = useState(true);
    const properties = useContext(PropertyContext);

    const userProperties = properties && properties.properties
        ? properties.properties.filter(property => property.userId === userId)
        : [];

    return (
        <div className="col-span-2 bg-white mt-10">
            <div>
                <div className="grid grid-cols-1 gap-4">
                    {userProperties.length > 0 && userProperties.map((property, index) => {
                        const propertyImage = property.PropertyDetail.PropertyPictures[0].fileUrl;
                        const propertyTitle = property.PropertyDetail.title;

                        return (
                            <div key={index} className="flex flex-col gap-4 p-4">
                                <NavLink
                                    to={`/property/${property.id}`}
                                    className={`group relative block hover:opacity-100 ${
                                        isActive ? 'border-l-8 pb-4 border-aqua-500' : ''
                                    }`}
                                    onClick={() => setIsActive(true)}
                                >
                                    <div className="absolute bottom-0 w-full h-20 bg-gray-900 bg-opacity-70 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20 transform group-hover:translate-y-0 transition-all duration-300">
                                        <h2 className="text-lg font-bold text-center">{propertyTitle}</h2>
                                    </div>
                                    <img
                                        src={`http://localhost:8000/${propertyImage}`}
                                        alt="property"
                                        className="object-cover p-2 rounded-lg"
                                        style={{ height: '150px', width: '100%', borderRadius: '6px' }}
                                    />
                                </NavLink>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default OwnerAsideLeft;
