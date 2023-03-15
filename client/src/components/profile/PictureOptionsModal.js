import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const PictureOptionsModal = ({handleDeleteImage, handleSetIsMain, handleSetIsCover, onClose}) => {
    const modalRef = useRef();

    const handleDeleteImageClick = () => {
        handleDeleteImage();
    };

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
            className="absolute inset-0 z-50 flex items-center justify-center text-sm top-0 right-0"
            onClick={onClose}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ scale: 0 }}
        >
            <div ref={modalRef} className="bg-white rounded-md shadow-lg">
                <button
                    className="block w-full text-left py-2 px-4 hover:bg-gray-200 hover:rounded-t-md
                    hover:text-aqua-500"
                    onClick={handleSetIsMain}
                >
                    Set as Profile
                </button>
                <button
                    className="block w-full text-left py-2 px-4 hover:bg-gray-200 hover:text-aqua-500"
                    onClick={handleSetIsCover}
                >
                    Set as Cover
                </button>
                <button
                    className="block w-full text-left py-2 px-4 hover:bg-gray-200 hover:rounded-b-md hover:text-red-500"
                    onClick={handleDeleteImageClick}
                >
                    Delete
                </button>
            </div>
        </motion.div>
    );
};

export default PictureOptionsModal;
