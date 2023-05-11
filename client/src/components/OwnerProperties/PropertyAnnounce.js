import React, { useEffect, useState } from 'react';
import AnnounceCard from '../dash-content/AnnounceCard';
import Separator from "../utils/Separator";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";

const PropertyAnnounce = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Get the logged-in user's userId
    const userId = useSelector((state) => state.auth.userId);

    // Get all users
    const allUsers = useSelector((state) => state.user.allUsers);
    const users = allUsers?.users;

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const showPropertyDetails = (propertyId) => {
        navigate(`/p/${propertyId}`);
    };

    // Find the logged-in user from the list of all users
    const loggedInUser = users?.find(user => user.id === userId);

    // Get the properties of the logged-in user
    const loggedInUserProperties = loggedInUser?.properties || [];

    // Get the profile picture and author details of the logged-in user
    const profilePicture = loggedInUser?.pictures?.find(picture => picture.isMain)?.fileUrl;
    const author = `${loggedInUser?.firstName} ${loggedInUser?.lastName ? loggedInUser.lastName.charAt(0) + '.' : ''}`;

    return (
        <>
            <Separator>
                <div className="mt-8 flex flex-col border-b">
                    <div className={`flex flex-row gap-6 flex-wrap p-12 animate-fade-in transform translate-y-0' : 'animate-fade-out transform translate-y-4'}`}>
                        {loggedInUserProperties.map((property, index) => {
                            const housePicture = property.PropertyDetail?.PropertyPictures[0]?.fileUrl;
                            const address = `${property.Address?.city}, ${property.Address?.street}`;
                            const budget = property.Price?.pricePerMonth;
                            const propertyType = property.propertyType?.replace(/['"]+/g, '').replace(/\b\w/g, l => l.toUpperCase());
                            const propertyTitle = property.PropertyDetail?.title.replace(/['"]+/g, '').toUpperCase();
                            const roommates = property.PropertyDetail?.roommates;
                            const billIncluded = property.Price?.billsIncluded ? 'Bills Included' : 'Bills Not Included';

                            return (
                                <AnnounceCard
                                    key={`${userId}-${index}`}
                                    housePicture={housePicture}
                                    profilePicture={profilePicture}
                                    address={address}
                                    author={author}
                                    budget={budget}
                                    propertyType={propertyType}
                                    showPropertyDetails={() => showPropertyDetails(property.id)}
                                    propertyTitle={propertyTitle}
                                    roommates={roommates}
                                    billIncluded={billIncluded}
                                />
                            );
                        })}
                    </div>
                </div>
            </Separator>
        </>
    );
};

export default PropertyAnnounce;
