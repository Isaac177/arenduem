import React from 'react';
import ContentGallery from "./ContentGallery";
import {useRoutes} from "react-router-dom";
import InfoSidebar from "./InfoSidebar";
import PersonalData from "./PersonalData";
import Interests from "./Interests";
import EmailPreferences from "./EmailPreferences";



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
        },
        {
            path: "/email",
            element: <EmailPreferences />
        }
        ]);
    return (
        /*<div className="flex flex-row justify-between bg-gradient-to-r
        from-primaryGrey-400 to-transparent rounded-l-lg w-full h-screen mb-20 overflow-auto">*/
        <div className="flex flex-row justify-between bg-primaryGrey-400 shadow-sm rounded-lg w-full h-screen mb-20 overflow-auto">
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