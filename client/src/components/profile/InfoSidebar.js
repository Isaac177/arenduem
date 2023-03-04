import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiImage, FiInfo, FiHeart, FiStar, FiMail } from 'react-icons/fi';

function InfoSidebar() {
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

    return (
        <>
            <div className="fixed flex flex-col h-screen w-64 h-1/3 rounded-lg">
                <ul className="flex flex-col w-full">
                    <li
                        className={`px-6 py-4 flex items-center hover:text-aqua-500 hover:cursor-pointer ${
                            activeLink === '/user/dashboard/profile' ? 'border-l-4 border-aqua-500 bg-gray-50 text-aqua-500' : ''
                        }`}
                        onClick={() => handleClick('/user/dashboard/profile')}
                    >
                        <FiImage size={24} className="mr-2" />
                        My Gallery
                    </li>
                    <li
                        className={`px-6 py-4 flex items-center hover:text-aqua-500 hover:cursor-pointer ${
                            activeLink === '/user/dashboard/profile/personaldata' ? 'border-l-4 border-aqua-500 bg-gray-50 text-aqua-500' : ''
                        }`}
                        onClick={() => handleClick('/user/dashboard/profile/personaldata')}
                    >
                        <FiInfo size={24} className="mr-2" />
                        My Personal Data
                    </li>
                    <li
                        className={`px-6 py-4  flex items-center hover:text-aqua-500 hover:cursor-pointer ${
                            activeLink === '/user/dashboard/profile/aboutme' ? 'border-l-4 border-aqua-500 bg-gray-50 text-aqua-500' : ''
                        }`}
                        onClick={() => handleClick('/user/dashboard/profile/aboutme')}
                    >
                        <FiHeart size={24} className="mr-2" />
                        About Me
                    </li>
                    <li
                        className={`px-6 py-4 flex items-center hover:text-aqua-500 hover:cursor-pointer ${
                            activeLink === '/user/dashboard/profile/interests' ? 'border-l-4 border-aqua-500 bg-gray-50 text-aqua-500' : ''
                        }`}
                        onClick={() => handleClick('/user/dashboard/profile/interests')}
                    >
                        <FiStar size={24} className="mr-2" />
                        My Interests
                    </li>
                    <li
                        className={`px-6 py-4 flex items-center hover:text-aqua-500 hover:cursor-pointer ${
                            activeLink === '/user/dashboard/profile/matches' ? 'border-l-4 border-aqua-500 bg-gray-50 text-aqua-500' : ''
                        }`}
                        onClick={() => handleClick('/user/dashboard/profile/matches')}
                    >
                        <FiHeart size={24} className="mr-2" />
                        My Matches
                    </li>
                    <li
                        className={`px-6 py-4 flex items-center hover:text-aqua-500 hover:cursor-pointer ${
                            activeLink === '/user/dashboard/profile/email' ? 'border-l-4 border-aqua-500 bg-gray-50 text-aqua-500' : ''
                        }`}
                        onClick={() => handleClick('/user/dashboard/profile/email')}
                    >
                        <FiMail size={24} className="mr-2" />
                        My Email
                    </li>
                </ul>
            </div>
        </>
    );
}

export default InfoSidebar;
