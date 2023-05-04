import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProperties } from '../../actions/propertyActions';
import OwnerAsideLeft from "../owner/OwnerAsideLeft";
import OwnerMiddleContent from "../owner/OwnerMiddleContent";
import OwnerAsideRight from "../owner/OwnerAsideRight";
import PropertyContext from "../owner/PropertyContext";
import UpdatePopupForm from "../update-form/UpdatePopupForm";


const OwnerRooms = () => {
    const [selectedSuggestion, setSelectedSuggestion] = useState(null);
    const [isPopupFormOpen, setIsPopupFormOpen] = useState(false);
    const dispatch = useDispatch();
    const properties = useSelector((state) => state.property.properties);

    useEffect(() => {
        dispatch(getUserProperties());
    }, [dispatch]);
    const initialValues = {
        propertyType: "",
        propertyAddress: {
            country: "",
            city: "",
            street: "",
            floor: 0,
            apartmentNumber: 0,
        },
        propertyAmenities: {
            homeType: false,
            bedroom: false,
            bathroom: false,
            roommates: false,
            livingRoom: false,
            kitchen: false,
            wifi: false,
            tv: false,
            airConditioning: false,
            smokeFree: false,
            laundry: false,
            elevator: false,
            parking: false,
            balcony: false,
            privateBathroom: false,
            privateKitchen: false,
            desktop: false,
            closet: false,
        },
        houseRules: {
            noSmoking: false,
            pets: false,
            children: false,
            smoking: false,
            events: false,
            noDrinking: false,
        },
        propertyAvailability: {
            startDate: null,
            endDate: null,
            minStay: 0,
            maxStay: 0,
        },
        prices: {
            pricePerMonth: 0,
            billsIncluded: false,
            deposit: 0,
        },
        otherServices: {
            rentalContract: false,
            cleaningService: false,
            maintenance: false,
        },
        propertyDetails: {
            pictures: [],
            title: "",
            description: "",
            size: 0,
            bedrooms: 0,
            bathrooms: 0,
            roommates: 0,
            furnished: false,
            bedType: "",
        },
        preferences: {
            tenantGender: "",
            tenantMinimumAge: 1,
            tenantMaximumAge: 100,
            tenantOccupation: "",
            tenantDrinkingStatus: "",
            tenantSmokingStatus: "",
        },
        phoneVerification: {
            country: "",
            phoneNumber: "",
            verificationCode: "",
        },
    };

    const handleCallUpdatePopupForm = (suggestion) => {
        setSelectedSuggestion(suggestion);
        setIsPopupFormOpen(true);
    }

    return (
        <PropertyContext.Provider value={properties}>
                <OwnerMiddleContent handleCallUpdatePopupForm={handleCallUpdatePopupForm} />
             {isPopupFormOpen && (
                <UpdatePopupForm
                    property={selectedSuggestion?.propertyDetails}
                    initialValues={initialValues} // Add this line
                    onClose={() => setIsPopupFormOpen(false)}
                />
            )}
        </PropertyContext.Provider>
    );
};

export default OwnerRooms;