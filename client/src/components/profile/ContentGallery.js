import React, { useState, useEffect } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ProfileImgCard from "./ProfileImgCard";
import {BsPlus} from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import {
    setImages,
    setModalOpen,
    setIsFullSize,
    getPictureById,
} from '../../actions/galleryActions';
import {useDispatch, useSelector} from "react-redux";
import FullSizeImage from "./FullSizeImage";
import axios from "axios";
import {Field, Form, Formik} from "formik";
import {FiCheck} from "react-icons/fi";

const ContentGallery = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const dispatch = useDispatch();
    const [isPrevDisabled, setIsPrevDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(false);
    const { file, isMain, isCover, id: pictureId } = useSelector(state => state.gallery) || {};

    const images = useSelector(state => state.gallery.images);
    /*const isMain = useSelector(state => state.gallery.isMain);
    const isCover = useSelector(state => state.gallery.isCover);*/
    const isModalOpen = useSelector(state => state.gallery.isModalOpen);
    const isFullSize = useSelector(state => state.gallery.isFullSize);
    const userId = useSelector((state) => state.auth.userId);
    const [isLoading, setIsLoading] = useState(false);


      useEffect(() => {
          dispatch(getPictureById());
      }, [dispatch]);

    const handleDeleteImage = (id) => {
        const newImages = images.filter((image, index) => index !== id);
        dispatch(setImages(newImages));
    };
    const handleViewImage = (id) => {
        setCurrentImageIndex(id);
        dispatch(setIsFullSize(true));
    };

    const handleCloseFullSize = () => {
        setCurrentImageIndex(null);
        dispatch(setIsFullSize(false));
    };

    const handlePrevClick = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
            setIsNextDisabled(false);
        }
        if (currentImageIndex - 1 === 0) {
            setIsPrevDisabled(true);
        }
    };

    const handleNextClick = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
            setIsPrevDisabled(false);
        }
        if (currentImageIndex + 1 === images.length - 1) {
            setIsNextDisabled(true);
        }
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    }
    const handleUploadImage = async (values) => {
        setIsLoading(true);
        if (selectedFile) {
            try {
                const formData = new FormData();
                formData.append('file', selectedFile);
                formData.append('isMain', values.isMain);
                formData.append('isCover', values.isCover);
                const response = await axios.post(`http://localhost:8000/users/${userId}/pictures`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    onUploadProgress: (progressEvent) => {
                        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        toast(`Upload progress: ${percentCompleted}%`);
                    },
                });
                console.log(response.data);
                dispatch(setImages([...images, response.data]));
            } catch (error) {
                console.error(error);
            }
        } else {
            console.error('No file selected');
        }
        dispatch(setModalOpen(false));
    };


    return (
        <div>
            <h1 className="text-2xl font-bold m-4">My Gallery</h1>
            <ToastContainer />
            <div className="flex flex-row items-center gap-4 flex-wrap wrap">
                {images.map((image, index) => {
                    return(
                    <ProfileImgCard
                        key={index}
                        profileImg={image.fileUrl}
                        profileAlt={image.fileName}
                        handleDeleteImage={() => handleDeleteImage(index)}
                        handleViewImage={() => handleViewImage(index)}
                    />
                    ) })}
            </div>
            {isModalOpen && (
                <Formik
                    initialValues={{
                        isMain: isMain || false,
                        isCover: isCover || false,
                    }}
                    onSubmit={(values) => {
                        handleUploadImage(values).then(r => console.log(r));
                        console.log(values);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white rounded-lg p-6 flex flex-col items-center">
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
                            </div>
                        </Form>
                    )}
                </Formik>
            )}
            {isFullSize && (
                <FullSizeImage
                    src={images[currentImageIndex].fileUrl}
                    alt={images[currentImageIndex].fileName}
                    onClose={handleCloseFullSize}
                    onPrev={handlePrevClick}
                    onNext={handleNextClick}
                    isPrevDisabled={isPrevDisabled}
                    isNextDisabled={isNextDisabled}
                />
            )}
            <div className="flex flex-row justify-center items-center m-4">
                <button
                    className="bg-aqua-500 hover:bg-aqua-700 text-white font-bold py-2 px-4 rounded-full p-2 flex items-center"
                    onClick={() => dispatch(setModalOpen(!isModalOpen))}
                >
                    <BsPlus className="inline-block align-text-top" />
                    Add Picture
                </button>
            </div>
        </div>
    );
};

export default ContentGallery;