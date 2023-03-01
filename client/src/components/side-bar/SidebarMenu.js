import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {
    FiHome,
    FiMessageCircle,
    FiEye,
    FiHeart,
    FiStar,
    FiLogOut,
    FiSettings,
    FiHelpCircle,
    FiLock, FiUser
} from 'react-icons/fi';

function SidebarMenu() {
    let location = useLocation();
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    return (
        <>
        <div className="fixed flex flex-col border-r border-primaryGrey-900 h-screen">
            <ul className="flex flex-col w-full">
                <li
                    className={`px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500 hover:cursor-pointer 
                        ${
                        activeLink === '/user/dashboard'
                            ? 'border-l-4 border-aqua-500 bg-gray-50 text-aqua-500'
                            : ''
                    }`}
                >
                    <Link to="/user/dashboard/" className="flex">
                    <FiHome size={24} className="mr-2" />
                    Home
                    </Link>
                </li>
                <li className={`px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500 hover:cursor-pointer 
                ${location.pathname === '/user/dashboard/profile' ? 'border-l-4 border-aqua-500 bg-gray-50 text-aqua-500' : ''}`}>
                    <Link to="/user/dashboard/profile" className='flex'>
                    <FiUser size={24} className="mr-2" />
                    Profile
                    </Link>
                </li>
                <li className={`px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500 hover:cursor-pointer
                ${location.pathname === '/user/dashboard/settings' ? 'border-l-4 border-aqua-500 bg-gray-50 text-aqua-500' : ''}`}>
                    <Link to="/user/messages" className='flex'>
                    <FiMessageCircle size={24} className="mr-2" />
                    Messages
                    </Link>
                </li>
                <li className={`px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500 hover:cursor-pointer
                ${location.pathname === '/user/dashboard/settings' ? 'border-l-4 border-aqua-500 bg-gray-50 text-aqua-500' : ''}`}>
                    <Link to="/user/visitors" className='flex'>
                    <FiEye size={24} className="mr-2" />
                    Visitors
                    </Link>
                </li>
                <li className={`px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500 hover:cursor-pointer
                ${location.pathname === '/user/dashboard/settings' ? 'border-l-4 border-aqua-500 bg-gray-50 text-aqua-500' : ''}`}>
                    <Link to="/user/favourites" className='flex'>
                    <FiHeart size={24} className="mr-2" />
                    Favourites
                    </Link>
                </li>
                <li className={`px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500 hover:cursor-pointer
                ${location.pathname === '/user/dashboard/settings' ? 'border-l-4 border-aqua-500 bg-gray-50 text-aqua-500' : ''}`}>
                   <Link to="/user/matches" className='flex'>
                    <FiStar size={24} className="mr-2" />
                    Matches
                    </Link>
                </li>
                <li className={`px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500 hover:cursor-pointer
                ${location.pathname === '/user/dashboard/settings' ? 'border-l-4 border-aqua-500 bg-gray-50 text-aqua-500' : ''}`}>
                    <Link to="/user/settings" className='flex'>
                    <FiSettings size={24} className="mr-2" />
                    Settings
                    </Link>
                </li>
                <li className={`px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500 hover:cursor-pointer
                ${location.pathname === '/user/dashboard/settings' ? 'border-l-4 border-aqua-500 bg-gray-50 text-aqua-500' : ''}`}>
                    <Link to="/user/help" className='flex'>
                    <FiHelpCircle size={24} className="mr-2" />
                    Help
                    </Link>
                </li>
                <li className={`px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500 hover:cursor-pointer
                ${location.pathname === '/user/dashboard/settings' ? 'border-l-4 border-aqua-500 bg-gray-50 text-aqua-500' : ''}`}>
                    <Link to="/user/privacy" className='flex'>
                    <FiLock size={24} className="mr-2" />
                    Privacy Policy
                    </Link>
                </li>
                <li className="px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500
                hover:cursor-pointer">
                    <Link to="/user/logout" className='flex'>
                    <FiLogOut size={24} className="mr-2" />
                    Logout
                    </Link>
                </li>
            </ul>
        </div>
    </>
    );
}

export default SidebarMenu;
