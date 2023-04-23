import React from 'react';
import { NavLink } from 'react-router-dom';

const OwnerHeader = () => {
    return (
        <header className="bg-opacity-50 text-white backdrop-blur-lg bg-primary-800 z-100">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <div className="relative cursor-pointer text-center text-lg font-bold tracking-tight text-white lg:text-lg">
                    arend<span className="text-aqua-500">Yem</span>
                    <span className="absolute top-0 right-0 bottom-0 left-0 text-aqua-500 shadow-glow"></span>
                </div>
                <NavLink
                    to="/list-your-room"
                    className="inline-flex items-center text-sm px-4 py-2 leading-none rounded-full
                    text-white border-white hover:text-primary-900 hover:bg-white mt-4 lg:mt-0"
                >
                    List your room
                </NavLink>
            </div>
        </header>
    );
};

export default OwnerHeader;
