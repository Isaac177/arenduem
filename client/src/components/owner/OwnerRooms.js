import React from 'react';
import OwnerAsideLeft from "./OwnerAsideLeft";
import OwnerMiddleContent from "./OwnerMiddleContent";
import OwnerAsideRight from "./OwnerAsideRight";


const OwnerRooms = ({userId}) => {
    return (
        <div className="grid grid-cols-12 gap-4">
            <OwnerAsideLeft />
            <OwnerMiddleContent />
            <OwnerAsideRight />
        </div>
    );
};


export default OwnerRooms;