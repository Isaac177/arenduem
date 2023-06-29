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
    FiChevronRight,
    FiChevronLeft,
} from "react-icons/fi";
import { motion } from "framer-motion";
import {AiOutlineMenu} from "react-icons/ai";
import {GrClose} from "react-icons/gr";

const sidebarItems = [
    { to: "/user/dashboard", Icon: FiHome, label: "Home" },
    { to: "/user/dashboard/profile", Icon: FiUser, label: "Profile" },
    { to: "/user/messages", Icon: FiMessageCircle, label: "Messages" },
    { to: "/user/visitors", Icon: FiEye, label: "Visitors" },
    { to: "/user/favourites", Icon: FiHeart, label: "Favourites" },
    { to: "/user/matches", Icon: FiStar, label: "Matches" },
    { to: "/user/settings", Icon: FiSettings, label: "Settings" },
    { to: "/user/help", Icon: FiHelpCircle, label: "Help" },
    { to: "/user/privacy", Icon: FiLock, label: "Privacy Policy" },
    { to: "/user/logout", Icon: FiLogOut, label: "Logout" },
];

function SidebarMenu() {
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
                className={`${isMobile && isTablet ? "bg-gray-200 z-50 border-none rounded-br-lg" : ''} fixed flex flex-col border-r border-primaryGrey-900`}
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

export default SidebarMenu;
