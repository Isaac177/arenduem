import React from 'react';
import Separator from "../utils/Separator";
import CoverSection from "./CoverSection";
import InfoSection from "./InfoSection";


const CoverProfile = () => {
    return (
        <div className='flex flex-col'>
        <Separator>
            <CoverSection />
        </Separator>
            <Separator>
                <InfoSection />
            </Separator>
        </div>
    );
};

export default CoverProfile;