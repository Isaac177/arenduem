import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {FiBell, FiChevronDown, FiLogOut, FiMessageCircle, FiUser} from 'react-icons/fi';
import axios from "axios";
import {useDispatch} from "react-redux";
import {logout} from "../../actions/userActions";

const UserHeader = () => {
    const [showMenu, setShowMenu] = useState(false);
    const dropdownRef = useRef(null);
    const dispatch = useDispatch();

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
        <header className="backdrop-blur-lg text-white bg-primary-800 bg-opacity-50 z-100">
            <div className="container mx-auto flex flex-wrap items-center">
                <div className="w-full lg:w-auto lg:flex-grow lg:flex lg:items-center">
                    <h1 className="text-lg lg:text-lg font-bold text-center text-white
                    tracking-tight cursor-pointer relative">
                        arend<span className="text-aqua-500">Yem</span>
                        <span className="absolute top-0 left-0 right-0 bottom-0 text-aqua-500 shadow-glow"></span>
                    </h1>
                </div>
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
                            className="w-8 h-8 rounded-full mr-2"
                            src="https://via.placeholder.com/24"
                            alt="User avatar"
                        />
                        <FiChevronDown size={16} />
                    </button>
                    {showMenu && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-100">
                            <NavLink
                                exact={true}
                                to="/user/profile"
                                className="block w-full px-4 py-2 text-gray-800
                                hover:bg-primary-700 hover:text-white"
                            >
                                <FiUser size={16} className="inline-block mr-2" />
                                Profile
                            </NavLink>
                            <button
                                onClick={handleLogout}
                                className="block w-full text-left px-4 py-2 text-gray-800
                                hover:bg-primary-700 hover:text-white"
                            >
                                <FiLogOut size={16} className="inline-block mr-2" />
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default UserHeader;