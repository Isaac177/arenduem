import React from 'react';
import Steps from "./Steps";


const HowItWorks = () => {

    return (
        <div className="mx-auto w-full p-8">
            <h1 className="mt-12 mb-4 text-center text-6xl font-bold text-white">How It <span className="text-aqua-500">Works</span></h1>
            <p className="mb-8 text-center text-xl text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex flex-col items-center justify-center">
                <Steps />
            </div>
        </div>
    );
};

export default HowItWorks;