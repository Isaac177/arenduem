import React from 'react';
import Separator from "../utils/Separator";
import ProCoverSection from "./ProCoverSection";
import ProInfoSection from "./ProInfoSection";


const PropertyCover = () => {
    return (
        <>
            <Separator>
                <ProCoverSection />
            </Separator>
            <Separator>
                <ProInfoSection />
            </Separator>
        </>
    );
};

export default PropertyCover;