import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import UserHeader from '../user-nav/UserHeader';
import arendLogo from "../../assets/img/arendLogo.png";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [shrink, setShrink] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const userRole = localStorage.getItem('role');

    const navItems = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize(); // Initialize isMobile state
        window.addEventListener('resize', handleResize);

        const handleScroll = () => {
            setShrink(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            {userRole === 'user' ? (
                <UserHeader />
            ) : (
                <header
                    className={`header bg-primary-900 text-white text-center transition-all duration-500 md:px-16 lg:px-24 xl:px-32 
                ${scrollPosition > 50 ? 'fixed top-0 w-full z-50' : ''}
                ${
                        shrink ? 'header-shrink' : ''
                    }`}
                >
                    <div className="container mx-auto flex flex-wrap items-center justify-between">
                        <div className="flex flex-grow items-center justify-center lg:justify-start">
                            <div className="w-full lg:w-auto">
                                <img
                                    src={arendLogo}
                                    alt="Arend Logo"
                                    className="w-24 h-24 lg:w-80 lg:h-20 object-cover" />
                            </div>
                        </div>
                        <div className="relative lg:w-auto">
                            <button
                                className='text-primary-900 text-white-100 hover:text-white focus:outline-none absolute top-0 right-0 mr-4 lg:hidden'
                                onClick={toggleMenu}
                            >
                                {!isOpen && (
                                    <MenuIcon style={{ color: '#fff', fontSize: 30 }} />
                                )}
                            </button>
                            {isOpen && (
                                <div
                                    className={`fixed top-0 right-0 bg-primary-900 z-50 p-4 w-1/2 h-screen overflow-auto lg:hidden transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                                >
                                    <button className="absolute top-0 right-0 m-4" onClick={toggleMenu}>
                                        <CloseIcon style={{ color: '#fff', fontSize: 30 }} />
                                    </button>
                                    {navItems.map(({ to, label }) => (
                                        <NavLink key={to} exact to={to} className="mt-4 block hover:text-aqua-500 animate ease-in duration-500" onClick={()=> setIsOpen(!isOpen)}>
                                            {label}
                                        </NavLink>
                                    ))}
                                    <div className="px-4">
                                        <NavLink exact to="/signin" className="mx-4 mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:text-primary-900 hover:border-transparent hover:bg-white" onClick={()=> setIsOpen(!isOpen)}>
                                            Sign In
                                        </NavLink>
                                        <NavLink exact to="/signup" className="mx-4 mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:text-primary-900 hover:border-transparent hover:bg-white" onClick={()=> setIsOpen(!isOpen)}>
                                            Sign Up
                                        </NavLink>
                                    </div>
                                </div>
                            )}

                            <nav className="hidden lg:flex">
                                {navItems.map(({ to, label }) => (
                                    <NavLink key={to} exact to={to} className="mt-4 mr-4 block hover:text-aqua-500 hov lg:mt-0 lg:inline-block">
                                        {label}
                                    </NavLink>
                                ))}
                                <div className="px-4 lg:px-0">
                                    <NavLink exact to="/signin" className="mx-4 mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:text-primary-900 hover:border-transparent hover:bg-white lg:mt-0">
                                        Sign In
                                    </NavLink>
                                    <NavLink exact to="/signup" className="mx-4 mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:text-primary-900 hover:border-transparent hover:bg-white lg:mt-0">
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
