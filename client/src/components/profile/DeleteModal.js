import React from 'react';

const DeleteModal = ({ onDelete, onCancel, isMain, isCover, delSubText}) => {
    let deleteImageText;
    if (isMain) {
        deleteImageText = 'Delete Main Image';
    } else if (isCover) {
        deleteImageText = 'Delete Cover Image';
    } else {
        deleteImageText = 'Delete Image';
    }

    return (
        <div
            className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto"
        >
            <div
                className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
            >
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-black opacity-10"></div>
                </div>
                <span className="hidden sm:inline-block sm:h-screen sm:align-middle"></span>&#8203;
                <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
                    <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                {deleteImageText}
                            </h3>
                            <div className="mt-2">
                                <p className="text-sm leading-5 text-gray-500">{delSubText}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                            <button type="button" className="inline-flex justify-center w-full rounded-md border
                            border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white
                            shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700
                            focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                    onClick={onDelete}>
                                Delete
                            </button>
                        </span>
                        <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                            <button type="button" className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium leading-6 text-gray-700 shadow-sm transition duration-150 ease-in-out hover:text-gray-500 focus:shadow-outline-blue focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5" onClick={onCancel}>
                            Cancel
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
