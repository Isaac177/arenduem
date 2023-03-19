import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import UserHeader from '../user-nav/UserHeader';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [shrink, setShrink] = useState(false);
    const userRole = localStorage.getItem('role');

    const navItems = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setShrink(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {userRole === 'user' ? (
                <UserHeader />
            ) : (
                <header
                    className={`header bg-primary-900 text-white text-center py-5 ${
                        shrink ? 'header-shrink' : ''
                    }`}
                >
                    <div className="container mx-auto flex flex-wrap items-center">
                        <div className="w-full text-white-100 lg:w-auto lg:flex-grow lg:flex lg:items-center">
                            <h1
                                className={`text-2xl font-bold text-center text-white tracking-tight cursor-pointer relative ${
                                    shrink ?  'logo-shrink' : 'logo'
                                }`}
                            >
                                Room<span className="text-aqua-500">Finder</span>
                                <span className="absolute top-0 left-0 right-0 bottom-0 text-aqua-500 shadow-glow"></span>
                            </h1>
                        </div>
                        <div className="w-full lg:w-auto text-white-100">
                            <button
                                className="text-primary-900 text-white-100 hover:text-white lg:hidden focus:outline-none"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {/* ... */}
                            </button>
                            <nav
                                className={`${
                                    isOpen ? 'block' : 'hidden'
                                } lg:block lg:flex lg:items-center lg:w-auto`}
                            >
                                <div className="text-base lg:flex-grow">
                                    {navItems.map(({ to, label }) => (
                                        <NavLink
                                            key={to}
                                            exact
                                            to={to}
                                            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 hover:text-aqua-500"
                                        >
                                            {label}
                                        </NavLink>
                                    ))}
                                </div>
                                <div>
                                    <NavLink
                                        exact
                                        to="/signin"
                                        className="inline-block text-sm px-4 py-2 mx-4 leading-none border rounded text-white border-white hover:border-transparent hover:text-primary-900 hover:bg-white mt-4 lg:mt-0"
                                    >
                                        Sign In
                                    </NavLink>
                                    <NavLink
                                        exact
                                        to="/signup"
                                        className="inline-block text-sm px-4 py-2 mx-4 leading-none border rounded text-white border-white hover:border-transparent hover:text-primary-900 hover:bg-white mt-4 lg:mt-0"
                                    >
                                        Sign Up
                                    </NavLink>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            )}
        </>
    );
};

export default Header;
