import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = ({ children }) => {
    const [index, setIndex] = useState(0);
    const length = children.length;

    const handlePrev = () => {
        setIndex((index - 2 + length) % length);
    };

    const handleNext = () => {
        setIndex((index + 2) % length);
    };

    return (
        <div className="relative p-20">
            <div className="flex overflow-hidden">
                <div
                    className="flex transform shadow-2xl transition duration-300 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {children}
                </div>
            </div>
            <button
                className="text-gray-600 hover:text-gray-900 p-2 border-primaryGrey-700 border-2
                left-0 absolute top-1/2 transform -translate-y-1/2 bg-primaryGrey-500
                rounded-full active:bg-gray-200 hover:bg-aqua-700"
                onClick={handlePrev}
            >
                <FiChevronLeft size={24} />
            </button>
            <button
                className="text-gray-600 hover:text-gray-900 p-2 border-primaryGrey-700 border-2 bg-primaryGrey-500
                right-0 absolute top-1/2 transform -translate-y-1/2
                rounded-full active:bg-gray-200 hover:bg-aqua-700"
                onClick={handleNext}
            >
                <FiChevronRight size={24} />
            </button>
        </div>
    );
};

export default Carousel;
