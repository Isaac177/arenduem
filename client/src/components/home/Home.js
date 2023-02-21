import React from 'react';
import Hero from "../header/Hero";
import Highlight from "../highlights/Highlight";
import HowItWorks from "../workSection/HowItWorks";
import Footer from "../footer/Footer";



const Home = () => {
    return (
        <div>
            <Hero />
            <Highlight />
            <HowItWorks />
            <Footer />
        </div>
    )
};

export default Home;