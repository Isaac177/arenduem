import React from 'react';
import OwnerHero from "../../components/ownerDashboard/OwnerHero";
import OwnerContent from "../../components/ownerDashboard/OwnerContent";
import ScrollAnimation from "react-animate-on-scroll";


const OwnerDashboard = () => {
    return (
        <ScrollAnimation
            animateIn="animate__fadeIn"
            duration={2}
            animateOnce
            style={{zIndex: -1}}
        >
            <OwnerHero />
            <OwnerContent />
        </ScrollAnimation>
    );
};

export default OwnerDashboard;