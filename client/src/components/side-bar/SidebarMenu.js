import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function SidebarMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="fixed h-screen flex">
            <button
                className="text-white lg:hidden hover:text-primary-700 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
            <div
                className={`bg-primary-900 w-64 transition-all duration-300 ease-in-out ${
                    menuOpen ? 'flex' : 'hidden'
                }`}
            >
                <ul>
                    <li>
                        <a
                            className="text-white hover:text-primary-700 py-2 px-6 block"
                            href="#"
                        >
                            Link 1
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-white hover:text-primary-700 py-2 px-6 block"
                            href="#"
                        >
                            Link 2
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-white hover:text-primary-700 py-2 px-6 block"
                            href="#"
                        >
                            Link 3
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SidebarMenu;
