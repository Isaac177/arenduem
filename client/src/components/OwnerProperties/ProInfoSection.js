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
        /*<div className="flex flex-row justify-between bg-gradient-to-r
        from-primaryGrey-400 to-transparent rounded-l-lg w-full h-screen mb-20 overflow-auto">*/
        <div className="mb-20 flex h-screen w-full flex-row justify-between overflow-auto rounded-lg shadow-sm bg-primaryGrey-400">
            <div className="flex flex-col justify-between">
                <ProInfoSidebar />
            </div>
            <div className="flex w-3/4 flex-col justify-between">
                {routing}
            </div>
        </div>
    );
};

export default ProInfoSection;