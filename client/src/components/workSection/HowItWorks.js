import React from 'react';
import Steps from "./Steps";


const HowItWorks = () => {

    return (
        <div className="w-full mx-auto p-8">
            <h1 className="text-6xl font-bold mb-4 text-center text-white mt-12">How It <span className="text-aqua-500">Works</span></h1>
            <p className="text-xl mb-8 text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex flex-col items-center justify-center">
                <Steps />
            </div>
        </div>
    );
};

export default HowItWorks;