import React, { useState } from 'react';
import HighlightCard from './HighlightCard';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import profiles from '../../assets/data/profiles';
import { Element } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


const Highlight = () => {
    const [startIndex, setStartIndex] = useState(0);

    const goToPrevious = () => {
        setStartIndex((startIndex - 1 + profiles.length) % profiles.length);
    };

    const goToNext = () => {
        setStartIndex((startIndex + 1) % profiles.length);
    };

    return (
        <div className="bg-primaryGrey-100 w-full mx-auto p-8">
            <Element name="highlight" className="highlight">
                <h1 className="text-6xl font-bold mb-4 text-center mt-12">
                    Our New <span className="text-aqua-500">Roommates</span>
                </h1>
                <p className="text-xl mb-8 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </Element>
            <div className="flex items-center justify-center gap-12">
                <button
                    className="text-gray-600 hover:text-gray-900 p-2 border-primaryGrey-700 border-2 rounded-full active:bg-gray-200"
                    onClick={goToPrevious}
                    disabled={startIndex === 0}
                >
                    <FiChevronLeft size={24} />
                </button>
                <div className="flex flex-row gap-4">
                    {profiles
                        .concat(profiles)
                        .slice(startIndex, startIndex + 3)
                        .map((item, index) => (
                            <ScrollAnimation
                                key={index}
                                animateIn="animate__fadeIn"
                                animateOnce
                            >
                                <HighlightCard {...item} />
                            </ScrollAnimation>
                        ))}
                </div>
                <button
                    className="text-gray-600 hover:text-gray-900 p-2 border-primaryGrey-700 border-2 rounded-full active:bg-gray-200"
                    onClick={goToNext}
                    disabled={startIndex === profiles.length - 3}
                >
                    <FiChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default Highlight;
