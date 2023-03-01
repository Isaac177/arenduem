import React from 'react';
import LatestAnnouncements from "./LatestAnnouncements";
import {Route, Routes} from "react-router-dom";
import CoverProfile from "../profile/CoverProfile";


const DashContent = () => {
   return (
       <Routes>
           <Route path="/user/dashboard" element={<LatestAnnouncements />} />
           <Route path="/user/dashboard/profile" element={<CoverProfile />} />
       </Routes>
   );
};

export default DashContent;