import React from 'react';
import SidebarMenu from "../../components/side-bar/SidebarMenu";
import CoverProfile from "../../components/profile/CoverProfile";
import {Routes, Route, useLocation} from "react-router-dom";
import LatestAnnouncements from "../../components/dash-content/LatestAnnouncements";
import ContentGallery from "../../components/profile/ContentGallery";
import PersonalData from "../../components/profile/PersonalData";
import QuickSearch from "../../components/dash-content/QuickSearch";
import PropertyDetails from "../../components/dash-content/PropertyDetails";
import ProOwnerAsideRight from "../../components/dash-content/ProOwnerAsideRight";
import {useSelector} from "react-redux";

const UserDashboard = () => {
    let location = useLocation();
    const currentPropertyId = useSelector(state => state.user.currentPropertyId);
    const propertyId = currentPropertyId ? currentPropertyId : '';

    console.log('currentPropertyId', currentPropertyId);
    return (
        <div className="bg-gray-200">
            <div className="grid grid-cols-12 gap-8 min-h-screen py-10">
                <aside className="col-span-2 flex flex-col justify-between">
                    <SidebarMenu />
                </aside>
                <div className="col-span-8 flex flex-col items-center justify-between">
                    <Routes>
                        <Route path="/" element={<LatestAnnouncements />} />
                        <Route path=":propertyId/" element={<PropertyDetails />} />
                        <Route path="/profile/*" element={<CoverProfile />}>
                            <Route path="gallery" element={<ContentGallery />} />
                            <Route path="personaldata" element={<PersonalData />} />
                        </Route>
                    </Routes>
                </div>
                <aside className="col-span-2 flex flex-col justify-between">
                    {/^\/user\/dashboard$/.test(location.pathname) ? <QuickSearch /> : null}
                    {location.pathname.includes(`/user/dashboard/${propertyId}`) ? <ProOwnerAsideRight /> :<QuickSearch /> }
                </aside>
            </div>
        </div>
    );
};

export default UserDashboard;
