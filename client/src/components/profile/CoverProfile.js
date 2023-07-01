import React from 'react';
import Separator from "../utils/Separator";
import CoverSection from "./CoverSection";
import InfoSection from "./InfoSection";


const CoverProfile = () => {
    return (
        <div className='flex flex-col'>
            <CoverSection />
            <InfoSection />
        </div>
    );
};

export default CoverProfile;