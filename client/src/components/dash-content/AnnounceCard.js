import React from 'react';
import { FiDollarSign, FiMapPin } from 'react-icons/fi';

const AnnounceCard = ({ housePicture, profilePicture, address, author, budget }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-2">
            <div className="mb-4">
                <img src={housePicture} alt="House" className="w-full h-32 object-cover rounded-lg" />
            </div>
            <div className="flex items-center mb-4">
                <img src={profilePicture} alt="Profile" className="w-10 h-10 rounded-full mr-2" />
                <span className="text-gray-600">{author}</span>
            </div>
            <div className="mb-4">
                <div className="flex items-center mb-2">
                    <FiMapPin size={16} className="text-gray-600 mr-2" />
                    <span className="text-gray-600 text-small">{address}</span>
                </div>
                <div className="flex items-center">
                    <FiDollarSign size={16} className="text-gray-600 mr-2" />
                    <span className="text-gray-600 text-small">{budget}</span>
                </div>
            </div>
            <div className="flex flex-row gap-2 justify-center">
                <button className="bg-aqua-500 text-white px-2 py-2 rounded-lg">View Details</button>
                <button className="bg-aqua-500 text-white px-2 py-2 rounded-lg">View Profile</button>
            </div>
        </div>
    );
};

export default AnnounceCard;
