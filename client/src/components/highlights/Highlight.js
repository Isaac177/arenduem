import React, {useEffect, useState} from 'react';
import HighlightCard from './HighlightCard';
import profiles from '../../assets/data/profiles';
import { Element } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import apartSvg from '../../assets/img/apartSvg.svg';


const Highlight = () => {
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [startIndex]);

    const goToNext = () => {
        setStartIndex((startIndex + 1) % profiles.length);
    };

    return (
        <Element style={{ marginBottom: 0 }} name="highlight">
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
                                    background: 'linear-gradient(to right, white, #0F8E6E)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'}}>
                            Our New <span className="text-aqua-500">Roommates</span>
                        </h1>
                        <p className="pb-8 text-center text-xs">
                            Find here the most recent roommates that have joined our community.
                        </p>
                    </ScrollAnimation>
                </Element>
                <div className="flex items-center justify-center gap-24 pb-32">
                    <div className="flex flex-row gap-24">
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
                    <img src={apartSvg} className="absolute left-0 bottom-0 w-1/4" alt="apartSvg" style={{ opacity: 0.3}}/>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 270" style={{transform: "scaleY(-1)"}}>
                    <path fill="#ffffff" fillOpacity="1" d="M0,96L80,122.7C160,149,320,203,480,213.3C640,224,800,192,960,181.3C1120,171,1280,181,1360,186.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
            </div>
        </Element>
    );
};

export default Highlight;
