import React from 'react';
import { FiDollarSign, FiMapPin } from 'react-icons/fi';

const AnnounceCard = ({ propertyTitle, housePicture, showPropertyDetails, profilePicture, address, author, budget, propertyType, billIncluded, roommates}) => {

    const BASE_URL = 'http://localhost:8000';
    return (
        <div className="w-72 text-xs cursor-pointer rounded-lg bg-white transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
        onClick={showPropertyDetails}>
            <div className="mb-2">
                <img src={`${BASE_URL}/${housePicture}`} alt="House" className="h-40 w-full rounded-t-lg object-cover" />
            </div>
            <div className="mb-2 p-2">
                <div className="mb-4 flex items-center h-6">
                    <img src={`${BASE_URL}/${profilePicture}`} alt="Profile" className="h-4 w-4 mr-2 rounded-full object-cover" />
                    <p className="text-gray-600">{author}</p>
                </div>
                <div className="mb-2 h-4">
                    <p className="text-gray-600 font-bold text-sm truncate">{propertyTitle}</p>
                </div>
                <div className="mb-4 flex flex-row justify-between items-center h-4">
                    <p className="text-gray-600 text-xs">{propertyType}</p>
                    <p className="text-gray-600 text-xs ml-2">{roommates} roommates</p>
                </div>
                <div className="mb-2">
                    <div className="mb-2 flex items-center h-4">
                        <FiMapPin size={12} className="mr-2 text-aqua-500" />
                        <span className="text-gray-600 text-small">{address}</span>
                    </div>
                    <div className="flex flex-row gap-2 items-center h-4">
                        <FiDollarSign size={12} className="text-aqua-500" />
                        <span className="text-gray-600 text-small font-bold">{budget} kzt/month</span>
                        <span className="text-gray-600 text-small font-bold">{billIncluded}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnnounceCard;
