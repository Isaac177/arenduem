import React from 'react';
import Steps from "./Steps";
import ScrollAnimation from "react-animate-on-scroll";


const HowItWorks = () => {

    return (
        <div className="mx-auto w-full p-8 bg-white flex flex-col items-center" style={{ marginTop: '-5rem'}}>
            <ScrollAnimation
                animateIn="animate__fadeInUp"
                animateOut="animate__fadeOutDown"
                animateOnce={false}
                duration={1.5}>
                <h1
                className="pt-12 mb-4 text-center text-6xl font-bold text-primary-700">How It <span className="text-aqua-500">Works</span>
            </h1>
             <p className="mb-8 text-center text-xs text-primary-700">Find out how to get started with ArendyEm.</p>
            </ScrollAnimation>
            <div className="flex flex-col items-center justify-center mx-auto">
                <Steps />
            </div>
        </div>
    );
};

export default HowItWorks;