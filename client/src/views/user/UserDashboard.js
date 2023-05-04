import React from 'react';
import SidebarMenu from "../../components/side-bar/SidebarMenu";
import CoverProfile from "../../components/profile/CoverProfile";
import {Routes, Route} from "react-router-dom";
import LatestAnnouncements from "../../components/dash-content/LatestAnnouncements";
import ContentGallery from "../../components/profile/ContentGallery";
import PersonalData from "../../components/profile/PersonalData";
import PropertyDetails from "../../components/dash-content/PropertyDetails";

const UserDashboard = () => {
    return (
        <div className="bg-gray-200">
            <div className="flex min-h-screen flex-row gap-80 py-10">
                <aside className="flex flex-col justify-between">
                    <SidebarMenu />
                </aside>
                <div className="flex flex-col items-center justify-between">
                    <Routes>
                        <Route path="/" element={<LatestAnnouncements />} />
                        <Route path="/user/property-details/:propertyId" element={<PropertyDetails />} />
                        <Route path="/profile/*" element={<CoverProfile />}>
                            <Route path="gallery" element={<ContentGallery />} />
                            <Route path="personaldata" element={<PersonalData />} />
                        </Route>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
