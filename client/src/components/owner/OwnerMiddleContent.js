import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProperties } from '../../actions/propertyActions';
import MiddlePicture from '../owner-middle-content/MiddlePicture';
import TitleSection from "./TitleSection";
import PropertyDescription from "./PropertyDescription";
import PropertyAmenities from "./PropertyAmenity";
import HouseRules from "./HouseRules";
import TenantPreferences from "./TenantPreferences";
import PropertyServices from "./PropertyServices";
import PropertyAddress from "./PropertyAddress";
import PropertyAvailability from "./PropertyAvailability";
import PropertyPrice from "./PropertyPrice";

const OwnerMiddleContent = () => {
    const dispatch = useDispatch();
    const properties = useSelector((state) => state.property.property);
    const userId = useSelector((state) => state.auth.userId);

    useEffect(() => {
        if (userId) dispatch(getProperties());
    }, [dispatch, userId]);

    const firstProperty = properties && properties.properties && properties.properties.length > 0 ? properties.properties[0] : null;
    const propertyDetails = firstProperty ? firstProperty.PropertyDetail : null;
    const propertyPictures = propertyDetails ? propertyDetails.PropertyPictures : [];
    const images = propertyPictures.map((picture) => picture.fileUrl);

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
                <PropertyPrice  firstProperty={firstProperty} />
            </div>
        </div>
    );
};

export default OwnerMiddleContent;
