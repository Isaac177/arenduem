import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProperties } from '../../actions/propertyActions';
import OwnerMiddleContent from "../owner/OwnerMiddleContent";
import PropertyContext from "../owner/PropertyContext";
import UpdatePopupForm from "../update-form/UpdatePopupForm";
import ServerError from "../utils/ServerError";


const OwnerRooms = () => {
    const [noPropertiesError, setNoPropertiesError] = useState(null);
    const [selectedSuggestion, setSelectedSuggestion] = useState(null);
    const [isPopupFormOpen, setIsPopupFormOpen] = useState(false);
    const dispatch = useDispatch();
    const properties = useSelector((state) => state.property.properties);

    useEffect(() => {
        dispatch(getUserProperties());
    }, [dispatch]);

    useEffect(() => {
        if (!properties || properties.length === 0) {
            setNoPropertiesError('No properties found for this user.');
        } else {
            setNoPropertiesError(null);
        }
    }, [properties]);

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

    const userId = useSelector((state) => state.auth.user.id);
    console.log(userId)
    return (
        <PropertyContext.Provider value={properties}>
            {noPropertiesError ? (
                <ServerError errorMessage={noPropertiesError} />
            ) : (
                <>
                    <OwnerMiddleContent handleCallUpdatePopupForm={handleCallUpdatePopupForm} userId={userId}/>
                    {isPopupFormOpen && (
                        <UpdatePopupForm
                            property={selectedSuggestion?.propertyDetails}
                            initialValues={initialValues}
                            onClose={() => setIsPopupFormOpen(false)}
                        />
                    )}
                </>
            )}
        </PropertyContext.Provider>
    );

};

export default OwnerRooms;
