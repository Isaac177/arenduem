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
        <div className="mb-20 flex h-screen w-full flex-row justify-between overflow-auto rounded-lg shadow-sm bg-primaryGrey-400">
            <div className="flex flex-col justify-between">
                <InfoSidebar />
            </div>
            <div className="flex w-3/4 flex-col justify-between">
                {routing}
            </div>
        </div>
    );
};

export default InfoSection;