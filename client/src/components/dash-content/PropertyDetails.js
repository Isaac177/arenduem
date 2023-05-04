import React from 'react';
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
import { useSelector } from "react-redux";

const PropertyDetails = () => {
    const { propertyId } = useParams();
    const users = useSelector((state) => state.user.allUsers);

    const property = users
        .flatMap((user) => user.properties)
        .find((property) => property.id === Number(propertyId));

    const propertyDetails = property ? property.PropertyDetail : null;
    const propertyPictures = propertyDetails ? propertyDetails.PropertyPictures : [];
    const images = propertyPictures.map((picture) => picture.fileUrl);

    console.log('property', property)

    return (
        <div className='container mx-auto'>
            <div className='p-4 my-4'>
                {property && <MiddlePicture firstProperty={property} propertyDetails={propertyDetails} images={images} />}
            </div>
        <div className="col-span-8">
            <div style={{ width: '980px', margin: '0 auto' }}>
                {property && <TitleSection firstProperty={property} propertyDetails={propertyDetails} />}
                {property && <PropertyDescription firstProperty={property} propertyDetails={propertyDetails} />}
                {property && <PropertyAmenities firstProperty={property} />}
                {property && <HouseRules firstProperty={property} />}
                <div className='bg-white rounded-lg p-4 my-4'>
                    {property && <TenantPreferences firstProperty={property} />}
                    <div className="border-b-2 border-gray-200 my-4"></div>
                    {property && <PropertyServices firstProperty={property} />}
                    <div className="border-b-2 border-gray-200 my-4"></div>
                    {property && <PropertyAddress firstProperty={property} />}
                    <div className="border-b-2 border-gray-200 my-4"></div>
                    {property && <PropertyAvailability firstProperty={property} />}
                    <div className="border-b-2 border-gray-200 my-4"></div>
                    {property && <PropertyPrice firstProperty={property} />}
                </div>
            </div>
        </div>
        </div>
    );
};

export default PropertyDetails;
