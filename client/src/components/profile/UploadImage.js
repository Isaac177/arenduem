import React, { useRef, useEffect, useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { Formik, Form, Field } from 'formik';

const UploadImage = ({
                         handleModalClose,
                         handleUploadImage,
                         isCover,
                         isMain,
                     }) => {
    const containerRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);

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

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <Formik
            initialValues={{
                isMain: isMain || false,
                isCover: isCover || false,
            }}
            onSubmit={(values) => {
                handleUploadImage(values, selectedFile);
            }}
        >
            {({ isSubmitting }) => (
                <Form className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
                    <div ref={containerRef} className="flex flex-col items-center rounded-lg bg-white p-6">
                        <h2 className="mb-4 text-lg font-bold">Upload Image</h2>
                        <div className="mb-4">
                            <input type="file" name="file" onChange={handleFileChange} />
                        </div>
                        <div className="mb-4 flex flex-row items-center">
                            <Field type="checkbox" name="isMain" id="isMain" className="mr-2" />
                            <label htmlFor="isMain" className="ml-2">
                                Is Main
                            </label>
                        </div>
                        <div className="mb-4 flex flex-row items-center">
                            <Field type="checkbox" name="isCover" id="isCover" className="mr-2" />
                            <label htmlFor="isCover" className="ml-2">
                                Is Cover
                            </label>
                        </div>
                        <div className="flex flex-row justify-center">
                            <button
                                type="submit"
                                className="mr-4 cursor-pointer rounded-full px-4 py-2 font-bold text-white bg-aqua-500 hover:bg-aqua-700"
                                disabled={!selectedFile || isSubmitting}
                            >
                                {isSubmitting ? 'Uploading...' : 'Upload'}
                                <FiCheck className="ml-2 inline-block align-text-top" />
                            </button>
                            <button
                                type="button"
                                className="rounded-full bg-gray-200 px-4 py-2 font-bold text-gray-700 hover:bg-gray-300"
                                onClick={handleModalClose}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default UploadImage;
