import React from 'react';
import CoverProfile from "./CoverProfile";
import Separator from "../utils/Separator";
import LatestAnnouncements from "./LatestAnnouncements";


const DashContent = () => {

    return (
        <div className="flex flex-col bg-gray-50 rounded-xl shadow-xl backdrop-filter
        backdrop-blur-md bg-opacity-60 sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-3/4 z-0"
        style={{width: "1080px"}}>
            <Separator>
                <CoverProfile />
            </Separator>
            <Separator>
                <LatestAnnouncements />
            </Separator>
        </div>
    );
};

export default DashContent;