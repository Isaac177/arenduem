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
                        <div className="w-full text-white-100 lg:flex lg:w-auto lg:flex-grow lg:items-center">
                            <h1
                                className={`text-2xl font-bold text-center text-white tracking-tight cursor-pointer relative ${
                                    shrink ?  'logo-shrink' : 'logo'
                                }`}
                            >
                                Room<span className="text-aqua-500">Finder</span>
                                <span className="absolute top-0 right-0 bottom-0 left-0 text-aqua-500 shadow-glow"></span>
                            </h1>
                        </div>
                        <div className="w-full text-white-100 lg:w-auto">
                            <button
                                className="text-primary-900 text-white-100 hover:text-white focus:outline-none lg:hidden"
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
                                            className="mt-4 mr-4 block hover:text-aqua-500 hover:text-white lg:mt-0 lg:inline-block"
                                        >
                                            {label}
                                        </NavLink>
                                    ))}
                                </div>
                                <div>
                                    <NavLink
                                        exact
                                        to="/signin"
                                        className="mx-4 mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:text-primary-900 hover:border-transparent hover:bg-white lg:mt-0"
                                    >
                                        Sign In
                                    </NavLink>
                                    <NavLink
                                        exact
                                        to="/signup"
                                        className="mx-4 mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:text-primary-900 hover:border-transparent hover:bg-white lg:mt-0"
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
