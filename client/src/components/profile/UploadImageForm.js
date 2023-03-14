import React from 'react';
import {Form, Field, Formik} from 'formik';
import 'react-image-gallery/styles/css/image-gallery.css';
import {
    setModalOpen,
} from '../../actions/galleryActions';
import {useDispatch, useSelector} from "react-redux";
import FullSizeImage from "./FullSizeImage";
import axios from "axios";
import {FiCheck} from "react-icons/fi";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteModal from "./DeleteModal";
import uuid4 from "uuid4";
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
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white rounded-lg p-6 flex flex-col items-center"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                    >
                        <h2 className="text-lg font-bold mb-4">Upload Image</h2>
                        <div className="mb-4">
                            <input
                                type="file"
                                name="file"
                                onChange={handleFileChange}
                                accept="image/png,image/jpeg,image/gif"
                            />
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
                                disabled={!selectedFile || isSubmitting}
                            >
                                {isSubmitting ? 'Uploading...' : 'Upload'}
                                <FiCheck className="inline-block align-text-top ml-2" />
                            </button>
                            <button
                                type="button"
                                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full"
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
