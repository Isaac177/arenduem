import React, {useContext, useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
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
import {useDispatch, useSelector} from "react-redux";
import {getUserProperties, updatePropertyDescription} from "../../actions/propertyActions";


const   OwnerMiddleContent = ({ userId, updateCurrentPropertyId }) => {
    const [property, setProperty] = useState(null);

    const dispatch = useDispatch();
    const properties = useContext(PropertyContext);
    const propertySuggestions = useSelector(state => state.property.propertySuggestions);
    const { propertyId } = useParams();

    useEffect(() => {
        if (properties && properties.properties) {
            const selectedPropertyId = updateCurrentPropertyId ? parseInt(updateCurrentPropertyId) : properties.properties[0].id;
            const selectedProperty = properties.properties.find(property => property.id === selectedPropertyId);

            if (selectedProperty) {
                console.log('Selected property:', selectedProperty);
                setProperty(selectedProperty);
            }
        }
    }, [updateCurrentPropertyId, properties]);

    const propertyDetails = property ? property.PropertyDetail : null;
    const propertyPictures = propertyDetails ? propertyDetails.PropertyPictures : [];
    const images = propertyPictures.map((picture) => picture.fileUrl);

    const propertySuggestionArray = Object.values(propertySuggestions);

    const handleUpdateDescription = (suggestion) => {
        dispatch(updatePropertyDescription(propertyId, suggestion.description));
        dispatch(getUserProperties());
    };

    console.log('propertyId:', propertyId);

    const navigate = useNavigate();

    return (
        <div style={{ margin: '0 auto' }} key={propertyId}>
            <div className='container p-4 my-4 flex items-center align-middle justify-between mx-auto'>
                {property && <MiddlePicture key={property.id} property={property} propertyDetails={propertyDetails} images={images} />}
            </div>
            <div className="grid grid-cols-12 gap-8 bg-white">
                <div className="col-span-8">
                    <div style={{ width: '980px', margin: '0 auto' }}>
                        {property && <TitleSection property={property} propertyDetails={propertyDetails} />}
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h2 className="font-bold text-xl mb-4">AI Check</h2>
                            <div className="flex flex-row gap-4">
                                {propertySuggestionArray.map((suggestion, index) => (
                                    <p key={index} className="text-xs text-amber-800">
                                        {suggestion.property} click{" "}
                                        <span className="text-aqua-500 cursor-pointer"
                                              onClick={() => navigate(`/owner/property/${propertyId}/update`)}
                                        >here</span> to update
                                    </p>
                                ))}
                            </div>
                        </div>
                        {property && <PropertyDescription property={property} propertyDetails={propertyDetails} />}
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h2 className="font-bold text-xl mb-4">AI Check for Descriptions</h2>
                            <div className="flex flex-row gap-4 flex-wrap">
                                {propertySuggestionArray.map((suggestion, i) => (
                                    <p key={i} className="text-xs text-amber-800">
                                        {suggestion.description} click{" "}
                                        <span className="text-aqua-500 cursor-pointer"
                                              onClick={() => handleUpdateDescription(suggestion)}
                                        >here</span> to update
                                    </p>
                                ))}
                            </div>
                        </div>
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
        </div>
    );
};

export default OwnerMiddleContent;
