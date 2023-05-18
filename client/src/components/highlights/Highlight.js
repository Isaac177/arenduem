import React, { useState } from 'react';
import HighlightCard from './HighlightCard';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import profiles from '../../assets/data/profiles';
import { Element } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Carousel from 'react-round-carousel';

const Highlight = () => {
    const [startIndex, setStartIndex] = useState(0);

/*
    const goToPrevious = () => {
        setStartIndex((startIndex - 1 + profiles.length) % profiles.length);
    };

    const goToNext = () => {
        setStartIndex((startIndex + 1) % profiles.length);
    };
*/

    return (
        <div>
            <div className="mx-auto w-full p-8 bg-primaryGrey-100">
                <Element name="highlight" className="highlight my-24">
                    <ScrollAnimation
                        animateIn='animate__slideInUp'
                        animateOnce={false}
                        duration={1.5}>
                        <h1 className="mt-24 mb-4 text-center text-6xl font-bold">
                            Our New <span className="text-aqua-500">Roommates</span>
                        </h1>
                        <p className="mb-8 text-center text-xs">
                            Find here the most recent roommates that have joined our community.
                        </p>
                    </ScrollAnimation>
                </Element>
                <Carousel
                    className="carousel"
                    selectedIndex={startIndex}
                    onChangeIndex={setStartIndex}
                >
                    {profiles.map((item, index) => (
                        <HighlightCard key={index} {...item} />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Highlight;
