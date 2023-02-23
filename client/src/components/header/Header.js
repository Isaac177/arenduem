import React, { useState } from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="backdrop-blur-lg text-white bg-primary-800 bg-opacity-50 text-center py-5">
            <div className="container mx-auto flex flex-wrap items-center">
                <div className="w-full text-white-100 lg:w-auto lg:flex-grow lg:flex lg:items-center">
                    <h1 className="text-5xl font-bold text-center text-white tracking-tight cursor-pointer relative">
                        arend<span className="text-aqua-500">Yem</span>
                        <span className="absolute top-0 left-0 right-0 bottom-0 text-aqua-500 shadow-glow"></span>
                    </h1>
                </div>
                <div className="w-full lg:w-auto text-white-100">
                    <button
                        className="text-primary-900 text-white-100 hover:text-white lg:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path fillRule="evenodd"
                                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                />
                            )}
                        </svg>
                    </button>
                    <nav
                        className={`${
                            isOpen ? 'block' : 'hidden'
                        } lg:block lg:flex lg:items-center lg:w-auto`}
                    >
                        <div className="text-base lg:flex-grow">
                            <NavLink
                                exact="true"
                                to="/"
                                className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 hover:text-aqua-500"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                exact="true"
                                to="/about"
                                className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 hover:text-aqua-500"
                            >
                                About
                            </NavLink>
                            <NavLink
                                exact="true"
                                to="/contact"
                                className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 hover:text-aqua-500"
                            >
                                Contact
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                                exact="true"
                                to="/signin"
                                className="inline-block text-sm px-4 py-2 mx-4 leading-none border rounded text-white border-white hover:border-transparent hover:text-primary-900 hover:bg-white mt-4 lg:mt-0"
                            >
                                Sign In
                            </NavLink>
                            <NavLink
                                exact="true"
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
    );
};

export default Header;
