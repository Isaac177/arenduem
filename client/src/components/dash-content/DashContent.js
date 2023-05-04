import React from 'react';
import LatestAnnouncements from "./LatestAnnouncements";
import {Route, Routes} from "react-router-dom";
import CoverProfile from "../profile/CoverProfile";
import PropertyDetails from "../dash-content/PropertyDetails";



const DashContent = () => {
   return (
       <Routes>
           <Route path="/user/dashboard" element={<LatestAnnouncements />} />
           <Route path="/user/dashboard/profile" element={<CoverProfile />} />
           <Route path="/user/dashboard/property-details/:propertyId" element={<PropertyDetails />} />
       </Routes>
   );
};

export default DashContent;