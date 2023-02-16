import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-primary-100 text-center py-5 mb-4">
            <div className="container mx-auto flex flex-wrap items-center">
                <div className="w-full lg:w-auto lg:flex-grow lg:flex lg:items-center">
                    <h1 className="text-5xl font-bold">Arendyem</h1>
                </div>
                <div className="w-full lg:w-auto">
                    <button
                        className="text-primary-900 hover:text-white lg:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
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
                            <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4" href="client/src/components/header/Header#">
                                Home
                            </a>
                            <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4" href="client/src/components/header/Header#" >
                                About
                            </a>
                            <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-white" href="client/src/components/header/Header#">
                                Contact
                            </a>
                        </div>
                        <div>
                            <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-primary-900 hover:bg-white mt-4 lg:mt-0"
                               href="client/src/components/header/Header#">
                                Sign In
                            </a>
                        </div>
                    </nav>

                </div>
            </div>
        </header>
    );
};

export default Header;
