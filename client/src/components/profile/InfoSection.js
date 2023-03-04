import React from 'react';
import ContentGallery from "./ContentGallery";
import {useRoutes} from "react-router-dom";
import InfoSidebar from "./InfoSidebar";
import PersonalData from "./PersonalData";



const InfoSection = () => {
    const routing = useRoutes([
        {
            path: "/",
            element: <ContentGallery />
        },
        {
            path: "/personaldata",
            element: <PersonalData />
        }
        ]);
    return (
        <div className="flex flex-row justify-between bg-gradient-to-r from-primaryGrey-400 to-transparent rounded-l-lg">
            <div className="flex flex-col justify-between">
                <InfoSidebar />
            </div>
            <div className="flex flex-col justify-between w-3/4">
                {routing}
            </div>
        </div>
    );
};

export default InfoSection;