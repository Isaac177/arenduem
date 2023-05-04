import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProperties } from '../../actions/propertyActions';
import OwnerAsideLeft from "../owner/OwnerAsideLeft";
import OwnerMiddleContent from "../owner/OwnerMiddleContent";
import OwnerAsideRight from "../owner/OwnerAsideRight";
import PropertyContext from "../owner/PropertyContext";


const OwnerRooms = () => {
    const dispatch = useDispatch();
    const properties = useSelector((state) => state.property.properties);

    useEffect(() => {
        dispatch(getUserProperties());
    }, [dispatch]);

    return (
        <PropertyContext.Provider value={properties}>
            <div className="grid grid-cols-12 gap-8">
                <OwnerAsideLeft />
                <OwnerMiddleContent />
                <OwnerAsideRight />
            </div>
        </PropertyContext.Provider>
    );
};

export default OwnerRooms;