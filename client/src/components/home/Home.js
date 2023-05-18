import React from 'react';
import Hero from "../header/Hero";
import Highlight from "../highlights/Highlight";
import HowItWorks from "../workSection/HowItWorks";
import Testimony from "../testimonials/Testimony";




const Home = () => {
    return (
        <div>
            <Hero />
            <Highlight />
            <HowItWorks />
            <Testimony />
        </div>
    )
};

export default Home;