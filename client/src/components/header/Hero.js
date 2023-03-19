import React from 'react';
import HeroForm from "./HeroForm";

const Hero = () => {
    return (
        <div className='heroBg h-screen backdrop-blur ${styles.heroBg'>
            <div className='heroContent container mx-auto flex items-center h-full flex-row ${styles.heroContent'>
                <div className="w-1/2 text-white">
                    <h2 className="text-5xl font-bold mb-4">
                        Find your <span className="text-aqua-500">perfect roommate</span>, together at home
                    </h2>
                    <p className="text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <HeroForm />
                </div>
            </div>
        </div>
    );
};

export default Hero;
