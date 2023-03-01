import React from 'react';
import SidebarMenu from "../../components/side-bar/SidebarMenu";
import CoverProfile from "../../components/profile/CoverProfile";
import {useRoutes} from "react-router-dom";
import LatestAnnouncements from "../../components/dash-content/LatestAnnouncements";


const UserDashboard = () => {
    const routing = useRoutes([
        {
            path: "/",
            element: <LatestAnnouncements />
        },
        {
            path: "/profile",
            element: <CoverProfile />
        }
    ]);

    return (
        <div className="bg-gradient-to-r from-primaryGrey-100 to-gray-600">
            <div className="flex flex-row min-h-screen text-center py-10 px-40 justify-between">
                <div className="flex flex-col justify-between">
                    <SidebarMenu />
                </div>
                <div className="flex flex-col justify-between">
                    {routing}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
