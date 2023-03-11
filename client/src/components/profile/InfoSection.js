import React from 'react';
import ContentGallery from "./ContentGallery";
import {useRoutes} from "react-router-dom";
import InfoSidebar from "./InfoSidebar";
import PersonalData from "./PersonalData";
import Interests from "./Interests";



const InfoSection = () => {
    const routing = useRoutes([
        {
            path: "/",
            element: <ContentGallery />
        },
        {
            path: "/personaldata",
            element: <PersonalData />
        },
        {
            path: "/interests",
            element: <Interests />
        }
        ]);
    return (
        <div className="flex flex-row justify-between bg-gradient-to-r
        from-primaryGrey-400 to-transparent rounded-l-lg w-full h-full mb-20">
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