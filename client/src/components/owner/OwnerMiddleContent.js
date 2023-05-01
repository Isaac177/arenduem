import React, {useContext} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import MiddlePicture from '../owner-middle-content/MiddlePicture';
import TitleSection from "../owner-middle-content/TitleSection";
import PropertyDescription from "../owner-middle-content/PropertyDescription";
import PropertyAmenities from "../owner-middle-content/PropertyAmenity";
import HouseRules from "../owner-middle-content/HouseRules";
import TenantPreferences from "../owner-middle-content/TenantPreferences";
import PropertyServices from "../owner-middle-content/PropertyServices";
import PropertyAddress from "../owner-middle-content/PropertyAddress";
import PropertyAvailability from "../owner-middle-content/PropertyAvailability";
import PropertyPrice from "../owner-middle-content/PropertyPrice";
import PropertyContext from "./PropertyContext";

const OwnerMiddleContent = () => {
    const properties = useContext(PropertyContext);
    const location = useLocation();
    const propertyId = location.pathname.split('/')[2]; // Get property ID from the URL

    const firstProperty = properties && properties.properties && properties.properties.length > 0 ? properties.properties[0] : null;
    const propertyDetails = firstProperty ? firstProperty.PropertyDetail : null;
    const propertyPictures = propertyDetails ? propertyDetails.PropertyPictures : [];
    const images = propertyPictures.map((picture) => picture.fileUrl);
    console.log('firstProperty', firstProperty);

    return (
        <div className="col-span-8">
            <TitleSection firstProperty={firstProperty} propertyDetails={propertyDetails} />
            <MiddlePicture firstProperty={firstProperty} propertyDetails={propertyDetails} images={images} />
            <PropertyDescription propertyDetails={propertyDetails} />
            <PropertyAmenities firstProperty={firstProperty} />
            <HouseRules firstProperty={firstProperty} />
            <div className='bg-white rounded-lg p-4 my-4'>
                <TenantPreferences firstProperty={firstProperty} />
                <div className="border-b-2 border-gray-200 my-4"></div>
                <PropertyServices firstProperty={firstProperty} />
                <div className="border-b-2 border-gray-200 my-4"></div>
                <PropertyAddress firstProperty={firstProperty} />
                <div className="border-b-2 border-gray-200 my-4"></div>
                <PropertyAvailability firstProperty={firstProperty} />
                <div className="border-b-2 border-gray-200 my-4"></div>
                <PropertyPrice firstProperty={firstProperty} />
            </div>
        </div>
    );
};

export default OwnerMiddleContent;
