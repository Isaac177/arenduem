import React, { useEffect, useState } from 'react';
import AnnounceCard from "./AnnounceCard";
import Separator from "../utils/Separator";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../actions/userActions";
import {useNavigate} from "react-router-dom";

const LatestAnnouncements = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.allUsers);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const showPropertyDetails = (propertyId) => {
        navigate(`/p/${propertyId}`);
    };
    return (
        <>
            <Separator>
                <div className="mt-8 flex flex-col border-b">
                    <div
                        className={`flex flex-row gap-6 flex-wrap p-12 animate-fade-in transform translate-y-0' : 'animate-fade-out transform translate-y-4'}`}>
                        {users && users.map((user, index) => {
                            const housePicture = user.properties[0]?.PropertyDetail?.PropertyPictures[0]?.fileUrl;
                            const profilePicture = user.pictures?.find(picture => picture.isMain)?.fileUrl;
                            const address = `${user.properties[0]?.Address.city}, ${user.properties[0]?.Address.street}`;
                            const author = `${user.firstName} ${user.lastName}`;
                            const budget = user.properties[0]?.Price?.pricePerMonth;
                            const propertyType = user.properties[0]?.propertyType.replace(/['"]+/g, '').replace(/\b\w/g, l => l.toUpperCase());

                            return (
                                <>
                                <AnnounceCard
                                    key={index}
                                    housePicture={housePicture}
                                    profilePicture={profilePicture}
                                    address={address}
                                    author={author}
                                    budget={budget}
                                    propertyType={propertyType}
                                    showPropertyDetails={() => showPropertyDetails(user.properties[0]?.id)}
                                />
                            <AnnounceCard
                                key={index}
                                housePicture={housePicture}
                                profilePicture={profilePicture}
                                address={address}
                                author={author}
                                budget={budget}
                                propertyType={propertyType}
                                showPropertyDetails={() => showPropertyDetails(user.properties[0]?.id)}
                            />
                            <AnnounceCard
                                key={index}
                                housePicture={housePicture}
                                profilePicture={profilePicture}
                                address={address}
                                author={author}
                                budget={budget}
                                propertyType={propertyType}
                                showPropertyDetails={() => showPropertyDetails(user.properties[0]?.id)}
                            />
                                    <AnnounceCard
                                        key={index}
                                        housePicture={housePicture}
                                        profilePicture={profilePicture}
                                        address={address}
                                        author={author}
                                        budget={budget}
                                        propertyType={propertyType}
                                        showPropertyDetails={() => showPropertyDetails(user.properties[0]?.id)}
                                    />
                                    <AnnounceCard
                                        key={index}
                                        housePicture={housePicture}
                                        profilePicture={profilePicture}
                                        address={address}
                                        author={author}
                                        budget={budget}
                                        propertyType={propertyType}
                                        showPropertyDetails={() => showPropertyDetails(user.properties[0]?.id)}
                                    />
                                    <AnnounceCard
                                        key={index}
                                        housePicture={housePicture}
                                        profilePicture={profilePicture}
                                        address={address}
                                        author={author}
                                        budget={budget}
                                        propertyType={propertyType}
                                        showPropertyDetails={() => showPropertyDetails(user.properties[0]?.id)}
                                    />
                                    <AnnounceCard
                                        key={index}
                                        housePicture={housePicture}
                                        profilePicture={profilePicture}
                                        address={address}
                                        author={author}
                                        budget={budget}
                                        propertyType={propertyType}
                                        showPropertyDetails={() => showPropertyDetails(user.properties[0]?.id)}
                                    />
                                    </>
                            )
                        })}
                    </div>
                </div>
            </Separator>
        </>
    );
};

export default LatestAnnouncements;
