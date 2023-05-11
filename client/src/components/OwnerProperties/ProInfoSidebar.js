import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiImage, FiInfo, FiHeart, FiStar, FiMail } from 'react-icons/fi';
import {useSelector} from "react-redux";

function ProInfoSidebar() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    const handleClick = (path) => {
        setActiveLink(path);
        navigate(path);
    };

    const userId = useSelector((state) => state.auth.userId);

    return (
        <>
            <div className="fixed flex h-screen w-64 flex-col rounded-tl-lg rounded-bl-lg bg-primaryGrey-600">
                <div className="flex flex-col justify-between">
                    <ul className="flex flex-col">
                        <li
                            className={`px-6 py-4 flex items-center hover:text-aqua-500 hover:cursor-pointer ${
                                activeLink === `/${userId}/properties/profile` ? 'text-aqua-500 bg-darkCu-900': ''
                            }`}
                            onClick={() => handleClick(`/${userId}/properties/profile`)}
                        >
                            <FiImage size={24} className="mr-2" />
                            My Gallery
                        </li>
                        <li
                            className={`px-6 py-4 flex items-center hover:text-aqua-500 hover:cursor-pointer ${
                                activeLink === `/${userId}/properties/personaldata` ? 'text-aqua-500 bg-darkCu-900': ''
                            }`}
                            onClick={() => handleClick(`/${userId}/properties/profile/personaldata`)}
                        >
                            <FiInfo size={24} className="mr-2" />
                            My Personal Data
                        </li>
                        <li
                            className={`px-6 py-4 flex items-center hover:text-aqua-500 hover:cursor-pointer ${
                                activeLink === `/${userId}/properties/profile/interests` ? 'text-aqua-500 bg-darkCu-900': ''
                            }`}
                            onClick={() => handleClick(`/${userId}/properties/profile/interests`)}
                        >
                            <FiStar size={24} className="mr-2" />
                            My Interests
                        </li>
                        <li
                            className={`px-6 py-4 flex items-center hover:text-aqua-500 hover:cursor-pointer ${
                                activeLink === `/${userId}/properties/profile/email` ? 'text-aqua-500 bg-darkCu-900': ''
                            }`}
                            onClick={() => handleClick(`/${userId}/properties/profile/email`)}
                        >
                            <FiMail size={24} className="mr-2" />
                            Email Preferences
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ProInfoSidebar;