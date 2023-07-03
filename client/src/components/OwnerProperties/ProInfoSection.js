import React from 'react';
import {useRoutes} from "react-router-dom";
import Interests from "../profile/Interests";
import EmailPreferences from "../profile/EmailPreferences";
import ProContentGallery from "./ProContentGallery";
import ProPersonalData from "./ProPersonalData";
import ProInfoSidebar from "./ProInfoSidebar";


const ProInfoSection = () => {
    const routing = useRoutes([
        {
            path: "/",
            element: <ProContentGallery />
        },
        {
            path: "/personaldata",
            element: <ProPersonalData />
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
                <ProInfoSidebar />
            </div>
            <div className="flex lg:w-3/4 flex-col justify-between">
                {routing}
            </div>
        </div>
    );
};

export default ProInfoSection;