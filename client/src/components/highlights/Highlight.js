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
        <Element>
            <div className="mx-auto w-full bg-primary-900 relative">
                <Element name="highlight" className="highlight pb-24">
                    <ScrollAnimation
                        animateIn='animate__fadeInUp'
                        animateOut='animate__fadeOutDown'
                        animateOnce={false}
                        delay={100}
                        duration={1.5}>
                        <h1 className="pt-24 mb-4 text-center text-6xl font-bold"
                            style={{
                                background: 'linear-gradient(to right, black, #A3E4D7)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>
                            Our New <span className="text-aqua-500">Roommates</span>
                        </h1>
                        <p className="pb-8 text-center text-xs">
                            Find here the most recent roommates that have joined our community.
                        </p>
                    </ScrollAnimation>
                </Element>
                <div className="flex items-center justify-center gap-12 pb-32">
                    <button
                        className="rounded-full border-2 p-2 text-gray-600 border-primaryGrey-700 hover:text-gray-900 active:bg-gray-200"
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
                                    animateIn="animate__fadeInUp"
                                    animateOnce={false}
                                    duration={1.5}
                                    delay={300 * index}
                                >
                                    <HighlightCard {...item} />
                                </ScrollAnimation>
                            ))}
                    </div>
                    <button
                        className="rounded-full border-2 p-2 text-gray-600 border-primaryGrey-700 hover:text-gray-900 active:bg-gray-200"
                        onClick={goToNext}
                        disabled={startIndex === profiles.length - 3}
                    >
                        <FiChevronRight size={24} />
                    </button>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{transform: "scaleY(-1)"}}>
                    <path fill="#ffffff" fillOpacity="1" d="M0,96L80,122.7C160,149,320,203,480,213.3C640,224,800,192,960,181.3C1120,171,1280,181,1360,186.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
            </div>
        </Element>
    );
};

export default Highlight;
