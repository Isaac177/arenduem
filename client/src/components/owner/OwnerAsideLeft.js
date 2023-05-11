import React, { useContext, useState } from 'react';
import {NavLink, useNavigate, useParams} from 'react-router-dom';
import PropertyContext from './PropertyContext';

const OwnerAsideLeft = ({ userId }) => {
    const properties = useContext(PropertyContext);
    const { propertyId } = useParams();

    const userProperties = properties && properties?.properties
        ? properties?.properties?.filter(property => property.userId === userId)
        : [];

    const defaultImage = 'https://via.placeholder.com/640x360?text=Default+Image+1';

        return (
        <div className="col-span-2 bg-white mt-10">
            <div className="grid grid-cols-1 gap-4">
                {userProperties.length > 0 && userProperties.map((property, index) => {
                    const propertyImage = property?.PropertyDetail?.PropertyPictures[0]?.fileUrl;
                    const propertyTitle = property?.PropertyDetail?.title;

                    return (
                        <div key={index} className="flex flex-col gap-4 p-4">
                            <NavLink
                                to={`/${userId}/properties/${property.id}`}
                                className={`group relative block flex flex-col gap-4 p-4 hover:opacity-100 ${
                                    propertyId === property.id.toString() ? 'border-l-8 pb-4 border-aqua-500' : ''
                                }`}
                                key={index}
                            >
                                <div className="absolute bottom-0 w-full h-20 bg-gray-900 bg-opacity-70
                                    flex justify-center items-center text-white opacity-0 group-hover:opacity-100
                                    transition-opacity duration-300 ease-in-out z-20 transform group-hover:translate-y-0
                                    transition-all duration-300">
                                    <h2 className="text-lg font-bold text-center">{propertyTitle}</h2>
                                </div>
                                <img
                                    src={propertyImage ? `http://localhost:8000/${propertyImage}` : defaultImage}
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
    );
};


export default OwnerAsideLeft;
