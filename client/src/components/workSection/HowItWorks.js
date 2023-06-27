import React from 'react';
import Steps from "./Steps";
import ScrollAnimation from "react-animate-on-scroll";


const HowItWorks = () => {

    return (
        <div className="mx-auto w-full p-4 sm:p-8 bg-white flex flex-col items-center" style={{ marginTop: '-5rem'}}>
            <ScrollAnimation
                animateIn="animate__fadeInUp"
                animateOnce={false}
                duration={1.5}>
                <h1
                    className="pt-12 mb-4 text-center text-4xl sm:text-5xl md:text-6xl font-bold text-primary-700">How It <span className="text-aqua-500">Works</span>
                </h1>
                <p className="mb-8 text-center text-xs sm:text-sm md:text-base text-primary-700">Find out how to get started with ArendyEm.</p>
            </ScrollAnimation>
            <div className="flex flex-col items-center justify-center mx-auto">
                <Steps />
            </div>
        </div>
    );
};

export default HowItWorks;