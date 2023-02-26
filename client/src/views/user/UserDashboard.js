import React from 'react';
import SidebarMenu from "../../components/side-bar/SidebarMenu";
import DashContent from "../../components/dash-content/DashContent";


const UserDashboard = () => {

    return (
        <div className="bg-gradient-to-r from-primaryGrey-200 to-gray-900">
            <div className="flex flex-row min-h-screen text-center py-10 px-40 justify-between">
                <div className="flex flex-col justify-between">
                    <SidebarMenu />
                </div>
                <div className="flex flex-col justify-between">
                    <DashContent />
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
