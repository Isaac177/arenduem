import React, { useRef, useEffect } from 'react';
import { FiCheck } from 'react-icons/fi';

const UploadImage = ({ handleModalClose, handleUploadImage, isCover, isMain, handleIsCoverChange, handleIsMainChange, handleFileChange, file }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                handleModalClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [containerRef, handleModalClose]);

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div ref={containerRef} className="bg-white rounded-lg p-6 flex flex-col items-center">
                <h2 className="text-lg font-bold mb-4">Upload Image</h2>
                <div className="mb-4">
                    <input type="file" onChange={handleFileChange} />
                </div>
                <div className="flex flex-row items-center mb-4">
                    <input type="checkbox" id="isMain" checked={isMain} onChange={handleIsMainChange} />
                    <label htmlFor="isMain" className="ml-2">
                        Is Main
                    </label>
                </div>
                <div className="flex flex-row items-center mb-4">
                    <input type="checkbox" id="isCover" checked={isCover} onChange={handleIsCoverChange} />
                    <label htmlFor="isCover" className="ml-2">
                        Is Cover
                    </label>
                </div>
                <div className="flex flex-row justify-center">
                    <button
                        className="bg-aqua-500 hover:bg-aqua-700 text-white font-bold py-2 px-4 rounded-full mr-4 cursor-pointer"
                        onClick={handleUploadImage}
                        //disabled={!file}
                    >
                        Upload
                        <FiCheck className="inline-block align-text-top ml-2" />
                    </button>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full" onClick={handleModalClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UploadImage;
