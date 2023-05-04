import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TitleSection from "../owner-middle-content/TitleSection";
import MiddlePicture from '../owner-middle-content/MiddlePicture';
import PropertyDescription from "../owner-middle-content/PropertyDescription";
import PropertyAmenities from "../owner-middle-content/PropertyAmenity";
import HouseRules from "../owner-middle-content/HouseRules";
import TenantPreferences from "../owner-middle-content/TenantPreferences";
import PropertyServices from "../owner-middle-content/PropertyServices";
import PropertyAddress from "../owner-middle-content/PropertyAddress";
import PropertyAvailability from "../owner-middle-content/PropertyAvailability";
import PropertyPrice from "../owner-middle-content/PropertyPrice";
import PropertyContext from "./PropertyContext";
import { fetchSuggestions } from "../../actions/propertyActions";
import {useSelector} from "react-redux";

const OwnerMiddleContent = () => {
    const properties = useContext(PropertyContext);
    const location = useLocation();
    const propertyId = location.pathname.split('/')[2];

    const firstProperty = properties && properties.properties && properties.properties.length > 0 ? properties.properties[0] : null;
    const propertyDetails = firstProperty ? firstProperty.PropertyDetail : null;
    const propertyPictures = propertyDetails ? propertyDetails.PropertyPictures : [];
    const images = propertyPictures.map((picture) => picture.fileUrl);

    const propertySuggestions = useSelector(state => state.property.propertySuggestions);
    const propertySuggestionArray = Object.values(propertySuggestions);
    console.log('suggestion', propertySuggestionArray);

    propertySuggestionArray.map((suggestion) => {
        console.log("Property suggestion:", suggestion.property);
        console.log("Description suggestion:", suggestion.description);
    });


    return (
        <div className="col-span-8">
            <div style={{ width: '980px', margin: '0 auto' }}>
                {firstProperty && <TitleSection firstProperty={firstProperty} propertyDetails={propertyDetails}/>}
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h2 className="font-bold text-xl mb-4">AI Check</h2>
                    <div className="flex flex-row gap-4">
                        {propertySuggestionArray.map((suggestion, index) => (
                            <p key={index} className="text-small text-amber-800">
                                {suggestion.property} click{" "}
                                <span className="text-aqua-500 cursor-pointer">here</span> to update
                            </p>
                        ))}
                    </div>
                </div>
                {firstProperty && <MiddlePicture firstProperty={firstProperty} propertyDetails={propertyDetails} images={images} />}
                {firstProperty && <PropertyDescription firstProperty={firstProperty} propertyDetails={propertyDetails}/>}
                {
                    propertySuggestionArray.map((suggestion, i) => <p key={i} className='text-small text-amber-800'>{suggestion.description}</p>)
                }
                {firstProperty && <PropertyAmenities firstProperty={firstProperty} />}
                {firstProperty && <HouseRules firstProperty={firstProperty} />}
                <div className='bg-white rounded-lg p-4 my-4'>
                    {firstProperty && <TenantPreferences firstProperty={firstProperty} />}
                    <div className="border-b-2 border-gray-200 my-4"></div>
                    {firstProperty && <PropertyServices firstProperty={firstProperty} />}
                    <div className="border-b-2 border-gray-200 my-4"></div>
                    {firstProperty && <PropertyAddress firstProperty={firstProperty} />}
                    <div className="border-b-2 border-gray-200 my-4"></div>
                    {firstProperty && <PropertyAvailability firstProperty={firstProperty} />}
                    <div className="border-b-2 border-gray-200 my-4"></div>
                    {firstProperty && <PropertyPrice firstProperty={firstProperty} />}
                </div>
            </div>
        </div>
    );
};

export default OwnerMiddleContent;
