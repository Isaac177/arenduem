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

    const userPictureIsMain = user.pictures?.find(picture => picture?.isMain);
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
        <header className="bg-opacity-50 text-white backdrop-blur-lg bg-primary-800 z-100 py-2">
            <div className="container mx-auto flex flex-wrap items-center">
                <div className="w-full lg:flex lg:w-auto lg:flex-grow lg:items-center">
                    <img
                        src={arendLogo} alt="Arend Logo"
                        style={{width: '200px', height: '50px'}}
                        className="mr-2 object-cover absolute" />
                </div>
                {isOwner ? (
                    <div className="flex flex-col items-center justify-center bg-gray-200">
                    </div>
                ) : (
                    <>
                    <div className="relative mr-4">
                        <button className="inline-flex items-center text-sm px-4 py-2 leading-none rounded-full
                        text-white border-white hover:text-primary-900 hover:bg-white mt-4 lg:mt-0">
                            <FiMessageCircle size={20} />
                            <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500
                            rounded-full text-white px-2 py-1 text-xs font-bold">3</span>
                        </button>
                    </div>
                    <div className="relative mr-4">
                        <button className="inline-flex items-center text-sm px-4 py-2 leading-none
                        rounded-full text-white border-white hover:text-primary-900 hover:bg-white mt-4 lg:mt-0">
                            <FiBell size={20} />
                            <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 rounded-full
                            text-white px-2 py-1 text-xs font-bold">5</span>
                        </button>
                    </div>
                    <div className="relative lg:ml-auto" ref={dropdownRef}>
                        <button
                            className="inline-flex items-center text-sm px-4 py-2 leading-none
                                rounded-full text-white border-white hover:text-primary-900
                                hover:bg-white mt-4 lg:mt-0"
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            <img
                                className="mr-2 h-8 w-8 rounded-full"
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
                                    className="block w-full px-4 py-2 text-gray-800
                                    hover:bg-primary-700 hover:text-white"
                                >
                                    <FiUser size={16} className="mr-2 inline-block" />
                                    Profile
                                </NavLink>
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-4 py-2 text-gray-800
                                    hover:bg-primary-700 hover:text-white"
                                >
                                    <FiLogOut size={16} className="mr-2 inline-block" />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                    </>
                    )}
                </div>
        </header>
    );
};

export default UserHeader;