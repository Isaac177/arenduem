import React from 'react';
import {Form, Field, Formik} from 'formik';
import 'react-image-gallery/styles/css/image-gallery.css';
import {
    setModalOpen,
} from '../../actions/galleryActions';
import {useDispatch, useSelector} from "react-redux";
import {FiCheck} from "react-icons/fi";
import 'react-toastify/dist/ReactToastify.css';
import {motion} from "framer-motion";
const UploadImageForm = ({ isModalOpen, handleUploadImage, selectedFile, handleFileChange, isMain, isCover }) => {
    const dispatch = useDispatch();
    return (
        <Formik
            initialValues={{
                isMain: isMain || false,
                isCover: isCover || false,
            }}
            onSubmit={(values) => {
                handleUploadImage(values).then(r => console.log(r));
            }}
        >
            {({ isSubmitting }) => (
                <motion.div
                    className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="flex flex-col items-center rounded-lg bg-white p-6"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                    >
                        <h2 className="mb-4 text-lg font-bold">Upload Image</h2>
                        <div className="mb-4">
                            <input
                                type="file"
                                name="file"
                                onChange={handleFileChange}
                                accept="image/png,image/jpeg,image/gif"
                            />
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
                                onClick={() => dispatch(setModalOpen(!isModalOpen))}
                            >
                                Cancel
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </Formik>
    );
};

export default UploadImageForm;
