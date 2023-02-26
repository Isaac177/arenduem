import React  from 'react';
import {Link} from 'react-router-dom';
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
    return (
        <>
        <div className="fixed flex flex-col bg-gray-50 rounded-xl shadow-xl w-64 backdrop-filter backdrop-blur-md
        bg-opacity-60">
            <ul className="flex flex-col w-full">
                <li className="px-6 py-4 hover:bg-gray-50 flex items-center hover:rounded-t-xl
                hover:text-aqua-500 hover:cursor-pointer">
                    <Link to="/settings" className='flex'>
                    <FiHome size={24} className="mr-2" />
                    Home
                    </Link>
                </li>
                <li className="px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500 hover:cursor-pointer">
                    <Link to="/profile" className='flex'>
                    <FiUser size={24} className="mr-2" />
                    Profile
                    </Link>
                </li>
                <li className="px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500 hover:cursor-pointer">
                    <Link to="/messages" className='flex'>
                    <FiMessageCircle size={24} className="mr-2" />
                    Messages
                    </Link>
                </li>
                <li className="px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500 hover:cursor-pointer">
                    <Link to="/visitors" className='flex'>
                    <FiEye size={24} className="mr-2" />
                    Visitors
                    </Link>
                </li>
                <li className="px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500 hover:cursor-pointer">
                    <Link to="/favourites" className='flex'>
                    <FiHeart size={24} className="mr-2" />
                    Favourites
                    </Link>
                </li>
                <li className="px-6 py-4 hover:bg-gray-50 flex items-center
                hover:text-aqua-500 hover:cursor-pointer border-b border-primaryGrey-400">
                   <Link to="/matches" className='flex'>
                    <FiStar size={24} className="mr-2" />
                    Matches
                    </Link>
                </li>
                <li className="px-6 py-4 hover:bg-gray-50 flex items-center hover:rounded-t-xl hover:text-aqua-500 hover:cursor-pointer">
                    <Link to="/settings" className='flex'>
                    <FiSettings size={24} className="mr-2" />
                    Settings
                    </Link>
                </li>
                <li className="px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500 hover:cursor-pointer">
                    <Link to="/help" className='flex'>
                    <FiHelpCircle size={24} className="mr-2" />
                    Help
                    </Link>
                </li>
                <li className="px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500 hover:cursor-pointer">
                    <Link to="/privacy" className='flex'>
                    <FiLock size={24} className="mr-2" />
                    Privacy Policy
                    </Link>
                </li>
                <li className="px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500
                hover:cursor-pointer hover:rounded-b-xl">
                    <Link to="/logout" className='flex'>
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
