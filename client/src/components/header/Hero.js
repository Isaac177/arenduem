import React from 'react';
import roomHero from '../../assets/img/heroImg.png';
import HeroForm from "./HeroForm";

const Hero = () => {
    return (
        <div className="bg-cover bg-center h-screen backdrop-blur" style={{ backgroundImage: 'url(roomHero.jpeg)' }}>
            <div className="container mx-auto flex items-center h-full flex-row">
                <div className="w-full text-center">
                    <img className="heroImg mx-auto" src={roomHero} alt="heroImg" />
                </div>
                <div className="w-full text-white">
                    <h2 className="text-5xl font-medium mb-4">Find your <span className="text-aqua-500">
                        perfect roommate</span>, together at home</h2>
                    <p className="text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <HeroForm />
                </div>
            </div>
        </div>
    );
};

export default Hero;
