import React, {useEffect, useRef, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserInfoById } from '../../actions/userActions';
import {Person, Wc} from '@material-ui/icons';
import {WorkOutlined} from "@mui/icons-material";
import interestsArray from "../../assets/data/insterestsArray";
import {Element} from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";
import useClickOutside from "../../hooks/useClickOutside";
import PhoneIcon from '@material-ui/icons/Phone';


const OwnerAsideRight = () => {
    const userId = useSelector((state) => state.auth.userId);
    const userInfo = useSelector((state) => state.user.userInfo) || {};
    const dispatch = useDispatch();

    const [showPhoneNumber, setShowPhoneNumber] = useState(false);
    const phoneNumberRef = useRef(null);

    useClickOutside(phoneNumberRef, () => setShowPhoneNumber(false));

    useEffect(() => {
        if (userId) {
            dispatch(fetchUserInfoById(userId));
        }
    }, [userId, dispatch]);

    const mainPicture = userInfo.pictures && userInfo.pictures.find((picture) => picture.isMain);

    const calculateAge = (dateOfBirth) => {
        const birthDate = new Date(dateOfBirth);
        const currentDate = new Date();
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        const monthDifference = currentDate.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return `${day} ${month}, ${year}`;
    };

    const getInterestIcon = (interestName) => {
        const interest = interestsArray.find((i) => i.name === interestName);
        return interest ? interest.icon : null;
    };
    let phoneNumbers = userInfo.properties?.map(property => property?.PhoneVerification?.phoneNumber);

    return (
        <Element className="col-span-2 mt-10">
            <ScrollAnimation
                animateIn="animate__fadeInRight"
                delay={100}
                animateOnce={true}
                className="grid grid-cols-1 gap-4">
                <div className="bg-white rounded-l-lg border">
                    {mainPicture && (
                        <img
                            className="object-cover w-full rounded-tl-lg"
                            src={`http://localhost:8000/${mainPicture.fileUrl}`}
                            alt="profile"
                            style={{ height: '280px', width: '100%' }}
                        />
                    )}
                    <div className='p-4'>
                        <div className='flex flex-row my-6'>
                        {userInfo.gender && (
                            <div className="flex items-center gap-2">
                                <Wc className="text-aqua-500" fontSize="small" />
                                <span>{userInfo.gender}</span>
                            </div>
                        )}
                        {userInfo.occupation && (
                            <div className="flex items-center gap-2">
                                <WorkOutlined className="text-gray-800" fontSize="small" />
                                <span className='text-sm text-gray-500'>{userInfo.occupation}</span>
                            </div>
                        )}
                        </div>
                        <div className='my-6'>
                            {userInfo.firstName && userInfo.dateOfBirth && (
                                <h1 className='text-2xl font-bold text-primary-700'>{userInfo.firstName}, {calculateAge(userInfo.dateOfBirth)}
                            </h1>
                            )}
                        </div>
                        <div className='my-6 flex flex-row'>
                            {userInfo.createdAt && (
                                <div className='flex flex-col border-l-primary-700 gap-2'>
                                    <p className='font-bold text-primary-700'>Member since</p>
                                    <p className='text-sm text-gray-500'>{formatDate(userInfo.createdAt)}</p>
                                </div>
                            )}
                        </div>

                        <div className='my-6'>
                            {userInfo.aboutMe && (
                                <div className='flex flex-col gap-2'>
                                    <p className='font-bold text-primary-700'>About me</p>
                                    <p className='text-sm text-gray-500'>{userInfo.aboutMe}</p>
                                </div>
                            )}
                        </div>
                        <div className="my-6">
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-primary-700">Interests</p>
                                <div className="flex flex-wrap gap-2">
                                    {userInfo.interests && userInfo.interests.map((interest) => (
                                        <div key={interest.id} className="flex items-center gap-2 border border-primary-600 rounded-2xl p-4">
                                            {getInterestIcon(interest.name)}
                                            <span className="text-sm text-gray-500">{interest.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="my-6" ref={phoneNumberRef}>
                            {phoneNumbers && phoneNumbers.length > 0 && (
                                <div className="flex flex-col gap-2">
                                    <p className="font-bold text-primary-700">Phone Numbers</p>
                                    {showPhoneNumber ? (
                                        phoneNumbers.map((phoneNumber, index) => (
                                            <p key={index} className='text-sm text-gray-500'>{phoneNumber}</p>
                                        ))
                                    ) : (
                                        <button className="flex items-center gap-2 text-sm text-white bg-primary-600 rounded-2xl p-4"
                                                onClick={() => setShowPhoneNumber(true)}>
                                            <PhoneIcon/>
                                            <span>Show phone numbers</span>
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </Element>
    );
};

export default OwnerAsideRight;
