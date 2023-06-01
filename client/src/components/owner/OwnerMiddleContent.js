import React, {useEffect, useMemo, useState} from 'react';
import {useParams} from 'react-router-dom';
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
import {deleteProperty, getUserProperties, updatePropertyDescription} from "../../actions/propertyActions";
import {getAllUsers} from "../../actions/userActions";
import UpdatePopupForm from "../update-form/UpdatePopupForm";
import ScrollAnimation from "react-animate-on-scroll";
import DeleteModal from "../profile/DeleteModal";


const OwnerMiddleContent = () => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showUpdatePopup, setShowUpdatePopup] = useState(false);
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.user.allUsers);
    const propertySuggestions = useSelector(state => state.property.propertySuggestions);
    const { propertyId } = useParams();
    const userId = useSelector((state) => state.auth.user.id);

    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getUserProperties());
    }, [dispatch]);

    const property = useMemo(() => {
        if (allUsers && allUsers.users) {
            return allUsers.users
                .flatMap(user => user?.properties)
                .find(property => property?.id.toString() === propertyId);
        }
        return null;
    }, [allUsers, propertyId]);

    const propertyDetails = property ? property.PropertyDetail : null;
    const propertyPictures = property ? property.PropertyPictures : [];
    const images = propertyPictures?.map((picture) => picture?.fileUrl);

    const propertySuggestionArray = Object.values(propertySuggestions);

    const handleUpdateDescription = (suggestion) => {
        dispatch(updatePropertyDescription(propertyId, suggestion.description));
        dispatch(getUserProperties());
    };

    const handleOncloseForm = () => {
        setShowUpdatePopup(false);
        /*dispatch(getUserProperties());
        dispatch(getAllUsers());*/
    }

    console.log('suggest', propertySuggestions);

    console.log('parent property', property);

    const handleDelete = () => {
        dispatch(deleteProperty(userId, propertyId));
        setShowDeleteModal(false);
    };
    const handleCancel = () => {
        setShowDeleteModal(false);
    };
    return (
        <>
        <ScrollAnimation
            animateIn="animate__fadeIn"
            duration={2}
            animateOnce={true}
            style={{ margin: '0 auto' }} key={propertyId}>
            <div className='container p-4 my-4 flex items-center align-middle justify-between mx-auto'>
                {property && <MiddlePicture key={property.id} property={property} propertyDetails={propertyDetails} images={images} />}
            </div>
            <div className="grid grid-cols-12 gap-8 bg-white mx-auto p-12 rounded-lg">
                <div className="col-span-8">
                    <div style={{ width: '980px', margin: '0 auto' }}>
                        {property && <TitleSection property={property} propertyDetails={propertyDetails} />}
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h2 className="font-bold text-xl mb-4">AI Check</h2>
                            <div className="flex flex-row gap-4">
                                {propertySuggestionArray.map((suggestion, index) => (
                                    <div
                                        key={index} className="text-xs text-amber-800">
                                        {suggestion?.property} click{" "}
                                        <span className="text-aqua-500 cursor-pointer"
                                              onClick={() => setShowUpdatePopup(true)}
                                        >here</span> to update
                                    </div>
                                ))}
                            </div>
                        </div>
                        {property && <PropertyDescription property={property} propertyDetails={propertyDetails} />}
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h2 className="font-bold text-xl mb-4">AI Check for Descriptions</h2>
                            <div className="flex flex-row gap-4 flex-wrap">
                                {propertySuggestionArray.map((suggestion, i) => (
                                    <div
                                        key={i} className="text-xs text-amber-800">
                                        {suggestion?.description} click{" "}
                                        <span className="text-aqua-500 cursor-pointer"
                                              onClick={() => handleUpdateDescription(suggestion)}
                                        >here</span> to update
                                    </div>
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
                        <div className="col-span-4 flex gap-4">
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
                                    onClick={() => setShowDeleteModal(true)}>
                                Delete Property
                            </button>
                            {showDeleteModal && <DeleteModal
                                onDelete={handleDelete}
                                onCancel={handleCancel}
                                delSubText="Are you sure you want to delete this property?"
                            />}
                            <button className="bg-aqua-500 hover:bg-aqua-800 text-white font-bold py-2 px-4 rounded-lg"
                                    onClick={() => setShowUpdatePopup(true)}>
                                Update Property
                            </button>
                            {showUpdatePopup && <UpdatePopupForm
                                isOpen={showUpdatePopup}
                                onClose={handleOncloseForm}
                                property={property}
                            />}
                        </div>
                    </div>
                </div>
                </div>
        </ScrollAnimation>
            <UpdatePopupForm
                isOpen={showUpdatePopup}
                onClose={handleOncloseForm}
                property={property}
            />
        </>
            );
};

export default OwnerMiddleContent;
