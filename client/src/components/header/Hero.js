import React from 'react';
import { motion } from 'framer-motion';
import HeroForm from "./HeroForm";
import { Element } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';

const Hero = () => {
    return (
        <ScrollAnimation
            animateIn='animate__fadeIn'
            animateOnce={false}
            duration={1.5}
            className='heroBg h-screen backdrop-blur ${styles.heroBg}'
            transition={{ duration: 2 }}
        >
            <div className='heroContent container mx-auto flex items-center h-full flex-row ${styles.heroContent'>
                <div className="w-1/2 text-white">
                    <Element name="hero"
                        className="mb-4 text-5xl font-bold"
                             animateIn='animate__slideInLeft'
                                animateOnce={false}
                                duration={1.5}
                                transition={{ duration: 2 }}
                    >
                        Find your <span className="text-aqua-500">perfect roommate</span>, together at home
                    </Element>
                    <motion.p
                        className="mb-8 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 2 }}
                    >
                        Searching for the ideal roommate can be challenging. That's where we come in.
                        Our goal is to simplify your search and help you find a compatible roommate,
                        ensuring your shared living experience is as harmonious and enjoyable as possible.
                        Start your journey with us today
                    </motion.p>
                    <HeroForm />
                </div>
            </div>
        </ScrollAnimation>
    );
};

export default Hero;
