import React, { useEffect } from 'react';
import AnnounceCard from "./AnnounceCard";
import Separator from "../utils/Separator";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";

const LatestAnnouncements = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.user?.allUsers);
    const users = allUsers?.users;

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const showPropertyDetails = (propertyId) => {
        navigate(`/user/dashboard/${propertyId}`);
    };
    return (
        <>
            <Separator>
                <div className="mt-8 flex border-b">
                    <div
                        className={`flex-col flex lg:flex-row gap-6 flex-wrap p-12 animate-fade-in translate-y-0' : 'animate-fade-out transform translate-y-4'}`}>
                        {users && users?.map((user, index) => {
                            const profilePicture = user?.pictures?.find(picture => picture.isMain)?.fileUrl;
                            const author = `${user?.firstName} ${user?.lastName ? user?.lastName.charAt(0) + '.' : ''}`;

                            return user.properties.map((property, propertyIndex) => {
                                const housePicture = property?.PropertyPictures?.[0]?.fileUrl;
                                const address = `${property?.Address?.city}, ${property.Address?.street}`;
                                const budget = property?.Price?.pricePerMonth;
                                const propertyType = property?.propertyType?.replace(/['"]+/g, '').replace(/\b\w/g, l => l.toUpperCase());
                                const propertyTitle = property?.PropertyDetail?.title.replace(/['"]+/g, '').toUpperCase();
                                const roommates = property?.PropertyDetail?.roommates;
                                const billIncluded = property?.Price?.billsIncluded ? 'Bills Included' : 'Bills Not Included';


                                return (
                                    <AnnounceCard
                                        key={`${index}-${propertyIndex}`}
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
                            });
                        })}
                    </div>
                </div>
            </Separator>
        </>
    );
};

export default LatestAnnouncements;
