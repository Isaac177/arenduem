import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {FiBell, FiChevronDown, FiLogOut, FiMessageCircle, FiUser} from 'react-icons/fi';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../actions/userActions";
import arendLogo from '../../assets/img/arendLogo.png';

const UserHeader = () => {
    const [showMenu, setShowMenu] = useState(false);
    const dropdownRef = useRef(null);
    const dispatch = useDispatch();

    const isOwner = useSelector((state) => state.user?.isOwner);
    const user = useSelector((state) => state.user?.userData);

    const userPictureIsMain = user?.pictures?.find(picture => picture?.isMain);
    const userPicture = userPictureIsMain?.fileUrl;
    const handleLogout = async () => {
        try {
            await axios.get('http://localhost:8000/api/auth/signout');
            dispatch(logout());
            window.location.href = '/';
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <header className="header bg-opacity-50 text-white backdrop-blur-lg bg-primary-800 z-100 py-2">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <div className="flex items-center lg:flex-grow-0">
                    <img
                        src={arendLogo}
                        alt="Arend Logo"
                        className="mr-2 object-cover w-32 lg:w-48 h-12 lg:h-16" />
                </div>
                {isOwner ? (
                    <div className="flex flex-col items-center justify-center bg-gray-200">
                    </div>
                ) : (
                    <>
                        <div className="relative inline-flex flex-wrap mt-4 lg:mt-0">
                            <button className="relative inline-flex items-center text-sm px-4 py-2 leading-none rounded-full text-white border-white hover:text-primary-900 hover:bg-white mr-4">
                                <FiMessageCircle size={20} />
                                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 rounded-full text-white px-2 py-1 text-xs font-bold">3</span>
                            </button>

                            <button className="relative inline-flex items-center text-sm px-4 py-2 leading-none rounded-full text-white border-white hover:text-primary-900 hover:bg-white mr-4">
                                <FiBell size={20} />
                                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 rounded-full text-white px-2 py-1 text-xs font-bold">5</span>
                            </button>
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    className="inline-flex items-center text-sm px-4 py-2 leading-none
                                rounded-full text-white border-white hover:text-primary-900
                                hover:bg-white"
                                    onClick={() => setShowMenu(!showMenu)}
                                >
                                    <img
                                        className="mr-2 h-8 w-8 rounded-full object-cover"
                                        src={`http://localhost:8000/${userPicture}` || 'https://via.placeholder.com/150'}
                                        alt="User avatar"
                                    />
                                    <FiChevronDown size={16} />
                                </button>
                                {showMenu && (
                                    <div className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg z-100">
                                        <NavLink
                                            exact={true}
                                            to="/user/profile"
                                            className="block w-full px-4 py-2 text-gray-80 hover:bg-primary-700 hover:text-white"
                                        >
                                            <FiUser size={16} className="mr-2 inline-block" />
                                            Profile
                                        </NavLink>
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full text-left px-4 py-2 text-gray-80 hover:bg-primary-700 hover:text-white"
                                        >
                                            <FiLogOut size={16} className="mr-2 inline-block" />
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
};

export default UserHeader;