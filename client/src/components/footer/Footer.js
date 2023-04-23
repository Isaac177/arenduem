import React from 'react';


const Footer = () => {

    return (
        <footer className="w-full bg-primary-900">
            <div className="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    <div className="px-5 py-2">
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                            About
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                            Blog
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                            Jobs
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                            Press
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                            Privacy
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                            Terms
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                            Contact
                        </a>
                    </div>
                </nav>
                <p className="mt-8 text-center text-base text-gray-400">
                    &copy; {new Date().getFullYear()} arendYem, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;