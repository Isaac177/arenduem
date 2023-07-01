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
        <div className="mb-20 flex h-screen flex-row justify-between overflow-auto rounded-lg shadow-sm bg-primaryGrey-400"
            style={{width: window.innerWidth < 640 ? '24rem' : '1080px'}}
        >
            <div className="flex flex-col justify-between">
                <InfoSidebar />
            </div>
            <div className="flex lg:w-3/4 flex-col justify-between">
                {routing}
            </div>
        </div>
    );
};

export default InfoSection;