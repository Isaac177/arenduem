import React from 'react';
import { FiDollarSign, FiMapPin } from 'react-icons/fi';

const AnnounceCard = ({ housePicture, profilePicture, address, author, budget }) => {
    return (
        <div className="cursor-pointer rounded-lg bg-white p-2 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <div className="mb-4">
                <img src={housePicture} alt="House" className="h-32 w-full rounded-lg object-cover" />
            </div>
            <div className="mb-4 flex items-center">
                <img src={profilePicture} alt="Profile" className="mr-2 h-10 w-10 rounded-full" />
                <span className="text-gray-600">{author}</span>
            </div>
            <div className="mb-4">
                <div className="mb-2 flex items-center">
                    <FiMapPin size={16} className="mr-2 text-gray-600" />
                    <span className="text-gray-600 text-small">{address}</span>
                </div>
                <div className="flex items-center">
                    <FiDollarSign size={16} className="mr-2 text-gray-600" />
                    <span className="text-gray-600 text-small">{budget}</span>
                </div>
            </div>
            <div className="flex flex-row justify-center gap-2">
                <button className="rounded-lg px-2 py-2 text-white bg-aqua-500">View Details</button>
                <button className="rounded-lg px-2 py-2 text-white bg-aqua-500">View Profile</button>
            </div>
        </div>
    );
};

export default AnnounceCard;
