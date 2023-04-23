import React from 'react';
import HeroForm from "./HeroForm";

const Hero = () => {
    return (
        <div className='heroBg h-screen backdrop-blur ${styles.heroBg'>
            <div className='heroContent container mx-auto flex items-center h-full flex-row ${styles.heroContent'>
                <div className="w-1/2 text-white">
                    <h2 className="mb-4 text-5xl font-bold">
                        Find your <span className="text-aqua-500">perfect roommate</span>, together at home
                    </h2>
                    <p className="mb-8 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <HeroForm />
                </div>
            </div>
        </div>
    );
};

export default Hero;
