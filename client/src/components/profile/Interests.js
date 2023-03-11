import React, { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { IoIosCheckmarkCircleOutline, IoIosCloseCircleOutline } from 'react-icons/io';
import { FaGuitar, FaHiking, FaBook, FaFilm, FaGamepad } from 'react-icons/fa';
import { MdSportsBasketball } from 'react-icons/md';
import { HiPhotograph } from 'react-icons/hi';

const Interests = () => {
    const [editing, setEditing] = useState(false);
    const [selectedInterests, setSelectedInterests] = useState([
        'Playing guitar',
        'Hiking',
        'Reading books',
        'Watching movies',
        'Playing video games',
        'Playing basketball',
        'Photography',
    ]);
    const [newInterests, setNewInterests] = useState('');

    const toggleEditing = () => {
        setEditing(!editing);
        setNewInterests('');
    };

    const handleInputChange = (e) => {
        setNewInterests(e.target.value);
    };

    const addInterest = () => {
        if (newInterests.trim() !== '') {
            setSelectedInterests([...selectedInterests, newInterests]);
            setNewInterests('');
        }
    };

    const removeInterest = (interest) => {
        setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    };

    return (
        <div className="text-center mt-4 pl-10">
            <div className="flex items-center gap-8 mb-4">
                <h1 className="text-2xl font-bold text-aqua-500">Interests</h1>
                <button onClick={toggleEditing}>
                    <AiOutlineEdit
                        fill='aquamarine'
                        className="w-6 h-6 text-gray-500 hover:text-gray-700" />
                </button>
            </div>
            {editing ? (
                <div className="mt-4">
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Add an interest"
                            value={newInterests}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 mr-2 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aqua-500"
                        />
                        <button onClick={addInterest}>
                            <IoIosCheckmarkCircleOutline
                                className="w-6 h-6 text-green-500 hover:text-green-700" />
                        </button>
                    </div>
                    <ul className="mt-2 space-y-2">
                        {selectedInterests.map((interest, index) => (
                            <li key={index} className="flex items-center">
                                <button onClick={() => removeInterest(interest)}>
                                    <IoIosCloseCircleOutline className="w-6 h-6 text-red-500 hover:text-red-700" />
                                </button>
                                <p className="ml-2">{interest}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <ul className="mt-4 space-y-2">
                    {selectedInterests.map((interest, index) => (
                        <li key={index} className="flex items-center">
                            {interest === 'Playing guitar' && <FaGuitar className="w-6 h-6 text-gray-500" />}
                            {interest === 'Hiking' && <FaHiking className="w-6 h-6 text-gray-500" />}
                            {interest === 'Reading books' && <FaBook className="w-6 h-6 text-gray-500" />}
                            {interest === 'Watching movies' && <FaFilm className="w-6 h-6 text-gray-500" />}
                            {interest === 'Playing video games' && <FaGamepad className="w-6 h-6 text-gray-500" />}
                            {interest === 'Playing basketball' && <MdSportsBasketball className="w-6 h-6 text-gray-500" />}
                            {interest === 'Photography' && <HiPhotograph className="w-6 h-6 text-gray-500" />}
                            <p className="ml-2">{interest}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


export default Interests;