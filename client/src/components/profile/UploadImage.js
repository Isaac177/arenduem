import React, { useRef, useEffect } from 'react';
import { FiCheck } from 'react-icons/fi';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';

const UploadImage = ({
                         handleModalClose,
                         handleUploadImage,
                         isCover,
                         isMain,
                         handleIsCoverChange,
                         handleIsMainChange,
                         handleFileChange,
                         file,
                     }) => {
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
        <Formik
            initialValues={{
                file : file || null,
                isMain: isMain || false,
                isCover: isCover || false,
            }}
            onSubmit={(values) => {
                handleUploadImage(values, values.file);
            }}
        >
            {({ isSubmitting }) => (
                <Form className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div ref={containerRef} className="bg-white rounded-lg p-6 flex flex-col items-center">
                        <h2 className="text-lg font-bold mb-4">Upload Image</h2>
                        <div className="mb-4">
                            <input type="file" name="file" onChange={handleFileChange} />
                        </div>
                        <div className="flex flex-row items-center mb-4">
                            <Field type="checkbox" name="isMain" id="isMain" className="mr-2" />
                            <label htmlFor="isMain" className="ml-2">
                                Is Main
                            </label>
                        </div>
                        <div className="flex flex-row items-center mb-4">
                            <Field type="checkbox" name="isCover" id="isCover" className="mr-2" />
                            <label htmlFor="isCover" className="ml-2">
                                Is Cover
                            </label>
                        </div>
                        <div className="flex flex-row justify-center">
                            <button
                                type="submit"
                                className="bg-aqua-500 hover:bg-aqua-700 text-white font-bold py-2 px-4 rounded-full mr-4 cursor-pointer"
                                disabled={!file || isSubmitting}
                            >
                                {isSubmitting ? 'Uploading...' : 'Upload'}
                                <FiCheck className="inline-block align-text-top ml-2" />
                            </button>
                            <button
                                type="button"
                                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full"
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

export default connect()(UploadImage);
