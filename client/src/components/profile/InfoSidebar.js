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
            <div className="fixed flex flex-col h-1/3 w-64 rounded-tl-lg bg-primaryGrey-600">
                <div className="flex flex-col justify-between h-full">
                <ul className="flex flex-col h-full">
                    <li
                        className={`px-6 py-4 flex items-center hover:text-aqua-500 hover:cursor-pointer ${
                            activeLink === '/user/dashboard/profile' ? 'text-aqua-500 bg-darkCu-900': ''
                        }`}
                        onClick={() => handleClick('/user/dashboard/profile')}
                    >
                        <FiImage size={24} className="mr-2" />
                        My Gallery
                    </li>
                    <li
                        className={`px-6 py-4 flex items-center hover:text-aqua-500 hover:cursor-pointer ${
                            activeLink === '/user/dashboard/profile/personaldata' ? 'text-aqua-500 bg-darkCu-900': ''
                        }`}
                        onClick={() => handleClick('/user/dashboard/profile/personaldata')}
                    >
                        <FiInfo size={24} className="mr-2" />
                        My Personal Data
                    </li>
                    <li
                        className={`px-6 py-4 flex items-center hover:text-aqua-500 hover:cursor-pointer ${
                            activeLink === '/user/dashboard/profile/interests' ? 'text-aqua-500 bg-darkCu-900': ''
                        }`}
                        onClick={() => handleClick('/user/dashboard/profile/interests')}
                    >
                        <FiStar size={24} className="mr-2" />
                        My Interests
                    </li>
                    <li
                        className={`px-6 py-4 flex items-center hover:text-aqua-500 hover:cursor-pointer ${
                            activeLink === '/user/dashboard/profile/matches' ? 'text-aqua-500 bg-darkCu-900': ''
                        }`}
                        onClick={() => handleClick('/user/dashboard/profile/matches')}
                    >
                        <FiHeart size={24} className="mr-2" />
                        My Matches
                    </li>
                    <li
                        className={`px-6 py-4 flex items-center hover:text-aqua-500 hover:cursor-pointer ${
                            activeLink === '/user/dashboard/profile/email' ? 'text-aqua-500 bg-darkCu-900': ''
                        }`}
                        onClick={() => handleClick('/user/dashboard/profile/email')}
                    >
                        <FiMail size={24} className="mr-2" />
                        My Email
                    </li>
                </ul>
                </div>
            </div>
        </>
    );
}

export default InfoSidebar;
