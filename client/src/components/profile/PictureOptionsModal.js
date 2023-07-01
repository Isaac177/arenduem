import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const PictureOptionsModal = ({handleDeleteImage, clickPosition, handleSetIsMain, handleSetIsCover, onClose}) => {
    const modalRef = useRef();
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalRef, onClose]);


    return (
        <motion.div
            className="fixed inset-0 top-0 right-0 z-50 flex items-center justify-center text-sm text-black"
            onClick={onClose}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ scale: 0 }}
            style={{ top: clickPosition.y, left: clickPosition.x }}
        >
            <div ref={modalRef} className="rounded-md bg-white shadow-lg">
                <button
                    className="block w-full text-left py-2 px-4 hover:bg-gray-200 hover:rounded-t-md
                    hover:text-aqua-500"
                    onClick={handleSetIsMain}
                >
                    Set as Profile
                </button>
                <button
                    className="block w-full px-4 py-2 text-left hover:text-aqua-500 hover:bg-gray-200"
                    onClick={handleSetIsCover}
                >
                    Set as Cover
                </button>
                <button
                    className="block w-full px-4 py-2 text-left hover:rounded-b-md hover:bg-gray-200 hover:text-red-500"
                    onClick={handleDeleteImage}
                >
                    Delete
                </button>
            </div>
        </motion.div>
    );
};

export default PictureOptionsModal;
