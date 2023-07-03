import React from 'react';
import {Routes, Route} from "react-router-dom";
import PropertySide from "./PropertySide";
import PropertyAnnounce from "./PropertyAnnounce";
import PropertyCover from "./PropertyCover";
import ProContentGallery from "./ProContentGallery";
import ProPersonalData from "./ProPersonalData";
import OwnerMiddleContent from "../owner/OwnerMiddleContent";
import OwnerAsideRight from "../owner/OwnerAsideRight";
import ScrollAnimation from "react-animate-on-scroll";



const PropertyDash = () => {
    return (
        <ScrollAnimation
            animateIn="animate__fadeIn"
            duration={2}
            animateOnce
            className="bg-gray-200">
            <div className="grid grid-cols-12 gap-8 min-h-screen py-10">
                <aside className="col-span-2 flex flex-col justify-between">
                    <PropertySide />
                </aside>
                <div className="col-span-8 flex flex-col items-center justify-between">
                    <Routes>
                        <Route path="/" element={<PropertyAnnounce />} />
                        <Route path=':propertyId/*' element={<OwnerMiddleContent />}/>
                        <Route path="/profile/*" element={<PropertyCover />}>
                            <Route path="gallery" element={<ProContentGallery />} />
                            <Route path="personaldata" element={<ProPersonalData />} />
                        </Route>
                    </Routes>
                </div>
                <OwnerAsideRight />
            </div>
        </ScrollAnimation>
    );
};

export default PropertyDash;