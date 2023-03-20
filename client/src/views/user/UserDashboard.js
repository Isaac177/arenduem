import React from 'react';
import SidebarMenu from "../../components/side-bar/SidebarMenu";
import CoverProfile from "../../components/profile/CoverProfile";
import {useRoutes} from "react-router-dom";
import LatestAnnouncements from "../../components/dash-content/LatestAnnouncements";
import ContentGallery from "../../components/profile/ContentGallery";
import PersonalData from "../../components/profile/PersonalData";
import BeforeDash from "../../components/before-dash/BeforeDash";


const UserDashboard = () => {
    const routing = useRoutes([
        {
            path: "/",
            element: <LatestAnnouncements />
        },
        {
            path: "/profile/*",
            element: <CoverProfile />,
            children: [
                {
                    path: "gallery",
                    element: <ContentGallery />
                },
                {
                    path: "personaldata",
                    element: <PersonalData />
                }
            ]
        },
    ]);

    return (
        /*        <div className="bg-gradient-to-r from-primaryGrey-100 to-gray-600"> */
        <div className="bg-gray-200">
        <BeforeDash />
            <div className="flex flex-row min-h-screen py-10 gap-80">
                <aside className="flex flex-col justify-between">
                    <SidebarMenu />
                </aside>
                <div className="flex flex-col justify-between items-center">
                    {routing}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
