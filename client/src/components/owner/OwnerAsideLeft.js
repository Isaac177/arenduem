import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import PropertyContext from './PropertyContext';
import {House} from "@material-ui/icons";

const OwnerAsideLeft = () => {
    const [isActive, setIsActive] = useState(true);
    const properties = useContext(PropertyContext);
    const propertyImage = properties && properties.properties && properties.properties.length > 0 ? properties.properties[0].PropertyDetail.PropertyPictures[0].fileUrl : null;
    const propertyTitle = properties && properties.properties && properties.properties.length > 0 ? properties.properties[0].PropertyDetail.title : null;

    return (
        <div  className="col-span-2 bg-white mt-10">
            <div>
                {/*<div className="flex items-center p-4 border border-b mb-8">
                    <House className="mr-2 text-aqua-500" fontSize="large" />
                    <h1 className="text-xl font-bold text-primary-700">Your Properties</h1>
                </div>*/}
                <div className="grid grid-cols-1 gap-4">
                    {properties && properties.properties && properties.properties.length > 0 && (
                        <Link
                            to={`/property/${properties.properties[0].id}`}
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
                                style={{ height: '150px', width: '100%' }}
                            />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OwnerAsideLeft;
