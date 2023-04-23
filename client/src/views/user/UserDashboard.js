import React from 'react';
import SidebarMenu from "../../components/side-bar/SidebarMenu";
import CoverProfile from "../../components/profile/CoverProfile";
import {useRoutes} from "react-router-dom";
import LatestAnnouncements from "../../components/dash-content/LatestAnnouncements";
import ContentGallery from "../../components/profile/ContentGallery";
import PersonalData from "../../components/profile/PersonalData";


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
        /*        <div className="bg-gradient-to-r to-gray-600 from-primaryGrey-100"> */
        <div className="bg-gray-200">
            <div className="flex min-h-screen flex-row gap-80 py-10">
                <aside className="flex flex-col justify-between">
                    <SidebarMenu />
                </aside>
                <div className="flex flex-col items-center justify-between">
                    {routing}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
