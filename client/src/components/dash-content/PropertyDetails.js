import React, {useEffect, useMemo} from 'react';
import { useParams } from 'react-router-dom';
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
import {useDispatch, useSelector} from "react-redux";

const PropertyDetails = () => {
    const { propertyId } = useParams();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user?.allUsers) || [];

    const property = useMemo(() => {
        if (Array.isArray(users.users)) {
            return [].concat(...users.users.map((user) => user?.properties)).find((property) => property?.id === Number(propertyId));
        }
        return null;
    }, [users, propertyId]);

    const propertyDetails = property ? property?.PropertyDetail : null;
    const propertyPictures = propertyDetails ? propertyDetails?.PropertyPictures : [];
    const images = propertyPictures?.map((picture) => picture?.fileUrl);

    console.log('property', JSON.stringify(property));
    console.log('propertyId', propertyId);
    console.log('users', users);
    console.log('propertyDetails', propertyDetails);

    useEffect(() => {
        dispatch(storeUserIdInState(property.userId));
        dispatch(storePropertyIdInState(propertyId));
    }, [property]);

    const storeUserIdInState = (userId) => {
        return {
            type: 'STORE_USER_ID',
            payload: userId,
        };
    }

    const storePropertyIdInState = (propertyId) => {
        return {
            type: 'STORE_PROPERTY_ID',
            payload: propertyId,
        };
    }

    console.log('currentPropertyId', propertyId);
    return (
        <div className='container mx-auto'>
            <div className='p-4 my-4'>
                {property && <MiddlePicture property={property} propertyDetails={propertyDetails} images={images} />}
            </div>
        <div className="bg-white py-10 rounded-lg mb-4">
            <div style={{ width: '980px', margin: '0 auto' }}>
                {property && <TitleSection property={property} propertyDetails={propertyDetails} />}
                {property && <PropertyDescription property={property} propertyDetails={propertyDetails} />}
                {property && <PropertyAmenities property={property} />}
                {property && <HouseRules property={property} />}
                <div className='bg-white rounded-lg p-4 my-4'>
                    {property && <TenantPreferences property={property} />}
                    <div className="border-b-2 border-gray-200 my-4"></div>
                    {property && <PropertyServices property={property} />}
                    <div className="border-b-2 border-gray-200 my-4"></div>
                    {property && <PropertyAddress property={property} />}
                    <div className="border-b-2 border-gray-200 my-4"></div>
                    {property && <PropertyAvailability property={property} />}
                    <div className="border-b-2 border-gray-200 my-4"></div>
                    {property && <PropertyPrice property={property} />}
                </div>
            </div>
        </div>
        </div>
    );
};

export default PropertyDetails;
