import React from 'react';
import Testimonials from './Testimonials';
import { Element } from 'react-scroll';
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const Wave = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" d="M0,96L80,122.7C160,149,320,203,480,213.3C640,224,800,192,960,181.3C1120,171,1280,181,1360,186.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    </svg>
);

const Testimony = () => {
    return (
        <Element className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" d="M0,96L80,122.7C160,149,320,203,480,213.3C640,224,800,192,960,181.3C1120,171,1280,181,1360,186.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>
            <div className="flex flex-wrap justify-around items-center p-4 py-24 bg-primary-900" style={{ marginTop: '-22rem' }}>
                <ScrollAnimation
                    animateIn="animate__fadeInUp"
                    animateOnce={false}
                    duration={1.5}>
                    <h1
                    className="text-6xl font-bold text-center pt-72">
                    <span style={{
                        background: 'linear-gradient(to right, white, #0F8E6E)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        What Our <span className="text-aqua-500">Users</span> Are Saying?
                    </span>
                </h1>
                </ScrollAnimation>

                <Testimonials />
            </div>
        </Element>
    );
};

export default Testimony;