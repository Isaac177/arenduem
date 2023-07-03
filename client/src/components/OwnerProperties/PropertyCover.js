import React from 'react';
import Separator from "../utils/Separator";
import ProCoverSection from "./ProCoverSection";
import ProInfoSection from "./ProInfoSection";


const PropertyCover = () => {
    return (
        <div className='flex flex-col'>
            <ProCoverSection />
            <ProInfoSection />
        </div>
    );
};

export default PropertyCover;