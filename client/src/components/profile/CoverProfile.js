import React from 'react';
import Separator from "../utils/Separator";
import CoverSection from "./CoverSection";
import InfoSection from "./InfoSection";


const CoverProfile = () => {
    return (
        <>
        <Separator>
            <CoverSection />
        </Separator>
            <Separator>
                <InfoSection />
            </Separator>
        </>
    );
};

export default CoverProfile;