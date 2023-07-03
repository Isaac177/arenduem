import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    FiHome,
    FiMessageCircle,
    FiEye,
    FiHeart,
    FiStar,
    FiLogOut,
    FiSettings,
    FiHelpCircle,
    FiLock,
    FiUser,
} from "react-icons/fi";
import { motion } from "framer-motion";
import {AiOutlineMenu} from "react-icons/ai";
import {GrClose} from "react-icons/gr";
import {useSelector} from "react-redux";


function PropertySide() {
    const userId = useSelector((state) => state.auth.userId);
    const sidebarItems = [
        { to: `/${userId}/properties/`, Icon: FiHome, label: "Home" },
        { to: `/${userId}/properties/profile`, Icon: FiUser, label: "Profile" },
        { to: `/${userId}/properties/messages`, Icon: FiMessageCircle, label: "Messages" },
        { to: `/${userId}/properties/views`, Icon: FiEye, label: "Views" },
        { to: `/${userId}/properties/favorites`, Icon: FiHeart, label: "Favorites" },
        { to: `/${userId}/properties/reviews`, Icon: FiStar, label: "Reviews" },
        { to: `${userId}/properties/settings`, Icon: FiSettings, label: "Settings" },
        { to: `${userId}/properties/help`, Icon: FiHelpCircle, label: "Help" },
        { to: `${userId}/properties/privacy`, Icon: FiLock, label: "Privacy" },
        { to: `${userId}/properties/logout`, Icon: FiLogOut, label: "Logout" },
    ];

    let location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;

    const handleToggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <motion.div
                className={`${isMobile && isTablet ? "fixed bg-gray-200 z-50 border-none rounded-br-lg" : ''} fixed flex flex-col border-r border-primaryGrey-900`}
                animate={{ width: isOpen ? "auto" : "0" }}
                transition={{ duration: 0.3 }}
            >
                <motion.button
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-2 shadow-md"
                    whileHover={{ scale: 1.2 }}
                    onClick={handleToggleSidebar}
                >
                    {isOpen ? <GrClose size={24} /> : <AiOutlineMenu size={24} />}
                </motion.button>
                {isOpen && (
                    <ul className="flex w-full flex-col">
                        {sidebarItems.map(({ to, Icon, label }) => (
                            <li
                                key={to}
                                className={`px-6 py-4 hover:bg-gray-50 flex items-center hover:text-aqua-500 hover:cursor-pointer 
                                    ${location.pathname === to ? "border-l-4 border-aqua-500 bg-gray-50 text-aqua-500" : ""}`}
                            >
                                <Link to={to} className="flex">
                                    <motion.div whileHover={{ scale: 1.2 }}>
                                        <Icon size={24} className="mr-2" />
                                    </motion.div>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </motion.div>
        </>
    );
}

export default PropertySide;
