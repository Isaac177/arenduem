import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiImage, FiInfo, FiHeart, FiStar, FiMail} from 'react-icons/fi';

function InfoSidebar() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    return (
        <>
            <div className="fixed flex flex-col border-r border-primaryGrey-900 h-screen">
                <ul className="flex flex-col w-full">
                    <li className={`px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500 hover:cursor-pointer 
            ${activeLink === '/user/dashboard' || activeLink === '/user/dashboard/home'
                        ? 'border-l-4 border-aqua-500 bg-gray-50 text-aqua-500'
                        : ''}`}
                    >
                        <Link to="/user/dashboard/" className="flex">
                            <FiImage size={24} className="mr-2" />
                            My Gallery
                        </Link>
                    </li>
                    <li className={`px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500 hover:cursor-pointer 
                        ${activeLink === '/user/dashboard/personaldata'
                        ? 'border-l-4 border-aqua-500 bg-gray-50 text-aqua-500'
                        : ''}`}
                    >
                        <Link to="/user/dashboard/personaldata" className="flex">
                            <FiInfo size={24} className="mr-2" />
                            My Personal Data
                        </Link>
                    </li>
                    <li className={`px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500 hover:cursor-pointer
                    ${activeLink === '/user/dashboard/aboutme'
                        ? 'border-l-4 border-aqua-500 bg-gray-50 text-aqua-500'
                        : ''}`}
                    >
                        <Link to="/user/dashboard/aboutme" className="flex">
                            <FiHeart size={24} className="mr-2" />
                            About Me
                        </Link>
                    </li>
                    <li className={`px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500 hover:cursor-pointer
                        ${activeLink === '/user/dashboard/interests'
                        ? 'border-l-4 border-aqua-500 bg-gray-50 text-aqua-500'
                        : ''}`}
                    >
                        <Link to="/user/dashboard/interests" className="flex">
                            <FiStar size={24} className="mr-2" />
                            My Interests
                        </Link>
                    </li>
                    <li className={`px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500 hover:cursor-pointer
                        ${activeLink === '/user/dashboard/matches'
                        ? 'border-l-4 border-aqua-500 bg-gray-50 text-aqua-500'
                        : ''}`}
                    >
                        <Link to="/user/dashboard/matches" className="flex">
                            <FiHeart size={24} className="mr-2" />
                            My Matches
                        </Link>
                    </li>
                    <li className={`px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500 hover:cursor-pointer
                        ${activeLink === '/user/dashboard/email'
                        ? 'border-l-4 border-aqua-500 bg-gray-50 text-aqua-500'
                        : ''}`}
                    >
                        <Link to="/user/dashboard/email" className="flex">
                            <FiMail size={24} className="mr-2" />
                            My Email
                        </Link>
                    </li>
        </ul>
            </div>
        </>
    );
}

export default InfoSidebar;
