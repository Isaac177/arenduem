import React from 'react';
import HeroForm from "./HeroForm";
import ScrollAnimation from 'react-animate-on-scroll';

const Hero = () => {
    return (
        <ScrollAnimation
            animateIn='animate__fadeIn'
            animateOnce={false}
            duration={1.5}
            delay={100}
            className='heroBg h-screen backdrop-blur ${styles.heroBg}'
            transition={{ duration: 2 }}
        >
            <div className='heroContent container mx-auto flex items-center h-full flex-col md:flex-row ${styles.heroContent} pt-8'>
                <div className="w-full md:w-1/2 text-white px-4 md:px-0">
                    <ScrollAnimation
                        name="hero"
                        animateIn='animate__fadeInLeft'
                        animateOut='animate__fadeOutRight'
                        animateOnce={false}
                        duration={1.5}
                        delay={200}
                        transition={{ duration: 2 }}>
                        <h1 className="mb-4 text-3xl md:text-5xl font-bold">
                            Find your <span className="text-aqua-500">perfect roommate</span>, together at home
                        </h1>
                        <p className="mb-8 text-xs md:text-sm">
                            Searching for the ideal roommate can be challenging. That's where we come in.
                            Our goal is to simplify your search and help you find a compatible roommate,
                            ensuring your shared living experience is as harmonious and enjoyable as possible.
                            Start your journey with us today
                        </p>
                        <HeroForm />
                    </ScrollAnimation>
                </div>
            </div>
        </ScrollAnimation>
    );
};

export default Hero;
