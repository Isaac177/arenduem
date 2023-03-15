import React, { useState, useEffect } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ProfileImgCard from "./ProfileImgCard";
import {BsPlus} from "react-icons/bs";
import {
    setImages,
    setModalOpen,
    setIsFullSize,
    getPictureById, handleDeleteImage, setSelectedPicture, setShowImgModal,
} from '../../actions/galleryActions';
import {useDispatch, useSelector} from "react-redux";
import FullSizeImage from "./FullSizeImage";
import axios from "axios";
import {Field, Form, Formik} from "formik";
import {FiCheck} from "react-icons/fi";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteModal from "./DeleteModal";
import uuid4 from "uuid4";
import {motion} from "framer-motion";


const ContentGallery = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPrevDisabled, setIsPrevDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const dispatch = useDispatch();
    const { isMain, isCover } = useSelector(state => state.gallery) || {};
    const images = useSelector(state => state.gallery.images);
    const isModalOpen = useSelector(state => state.gallery.isModalOpen);
    const isFullSize = useSelector(state => state.gallery.isFullSize);
    const userId = useSelector((state) => state.auth.userId);
    const token = useSelector((state) => state.auth.token);
    const selectedPicture = useSelector(state => state.gallery.selectedPicture);


    useEffect(() => {
          dispatch(getPictureById());
      }, [dispatch, userId]);

    useEffect(() => {
        if (images.length > 0) {
            setCurrentImageIndex(0);
        }
    }, [images]);

    const handleViewImage = (id) => {
        setCurrentImageIndex(id);
        dispatch(setSelectedPicture(null));
        dispatch(setIsFullSize(true));
    };

    const handleCloseFullSize = () => {
        setCurrentImageIndex(null);
        dispatch(setSelectedPicture(null));
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

    const handleDeleteImg = async (selectedPicture) => {
        await dispatch(handleDeleteImage(selectedPicture));
        dispatch(getPictureById());
        setShowDeleteModal(false);
        toast.success('Image deleted successfully!');
        dispatch(setShowImgModal(false));
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
    const handleUploadImage = async ({ isMain, isCover }) => {
        setIsLoading(true);
        if (selectedFile) {
            try {
                const formData = new FormData();
                formData.append('file', selectedFile);

                let prevMainPicture = null;
                let prevCoverPicture = null;
                images.forEach((picture) => {
                    if (picture.isMain) {
                        prevMainPicture = picture;
                    }
                    if (picture.isCover) {
                        prevCoverPicture = picture;
                    }
                });

                if (prevMainPicture !== null && isMain) {
                    await axios.put(
                        `http://localhost:8000/users/${userId}/pictures/${prevMainPicture.id}`,
                        {
                            isMain: false,
                        },
                        {
                            headers: {
                                Authorization: token,
                                'Content-Type': 'application/json',
                            },
                        }
                    );
                    dispatch(
                        setImages(
                            images.map((picture) =>
                                picture.id === prevMainPicture.id
                                    ? { ...picture, isMain: false }
                                    : picture
                            )
                        )
                    );
                }
                if (prevCoverPicture !== null && isCover) {
                    await axios.put(
                        `http://localhost:8000/users/${userId}/pictures/${prevCoverPicture.id}`,
                        {
                            isCover: false,
                        },
                        {
                            headers: {
                                Authorization: token,
                                'Content-Type': 'application/json',
                            },
                        }
                    );
                    dispatch(
                        setImages(
                            images.map((picture) =>
                                picture.id === prevCoverPicture.id
                                    ? { ...picture, isCover: false }
                                    : picture
                            )
                        )
                    );
                }

                const id = prevMainPicture?.id || prevCoverPicture?.id || null;
                formData.append('isMain', isMain);
                formData.append('isCover', isCover);
                formData.append('id', id);
                const response = await axios.post(
                    `http://localhost:8000/users/${userId}/pictures`,
                    formData,
                    {
                        headers: {
                            Authorization: token,
                            'Content-Type': 'multipart/form-data',
                        },
                        onUploadProgress: (progressEvent) => {
                            const percentCompleted = Math.round(
                                (progressEvent.loaded * 100) / progressEvent.total
                            );
                            toast(`Upload progress: ${percentCompleted}%`);
                        },
                    }
                );

                dispatch(setImages([...images, response.data]));
                toast.success('Image uploaded successfully!');
            } catch (error) {
                console.error(error);
                toast.error('Error uploading image.');
            }
        } else {
            console.error('No file selected');
            toast.error('No file selected');
        }
        dispatch(setModalOpen(false));
    };

    return (
        <div>
            <h1 className="text-2xl font-bold m-4">My Gallery</h1>
            <div className="flex flex-row items-center gap-4 flex-wrap wrap">
                {images.map((image, index) => {
                    return (
                        <div key={uuid4()}>
                            <ProfileImgCard
                                key={uuid4()}
                                pictureId = {selectedPicture}
                                profileImg={image.fileUrl}
                                profileAlt={image.fileName}
                                handleDeleteImageClick={() => {
                                    dispatch(setSelectedPicture(image.id)); // set the selectedPicture ID to the clicked image ID
                                    setShowDeleteModal(true);
                                }}                                handleViewImage={() => handleViewImage(index)}
                                handleShowImageOptions={() => dispatch(setShowImgModal(true))}
                            />
                            {showDeleteModal && selectedPicture && (
                                <DeleteModal
                                    onDelete={() => handleDeleteImg(selectedPicture)}
                                    onCancel={() => setShowDeleteModal(false)}
                                />
                            )}
                        </div>
                    )
                })}
            </div>

            {isModalOpen && (
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
                        <Form>
                            <div
                                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
                            >
                                <motion.div
                                    className="bg-white rounded-lg p-6 flex flex-col items-center"
                                    initial={{ transform: 'scale(0.5)', opacity: 0 }}
                                    animate={{ transform: 'scale(1)', opacity: 1 }}
                                    exit={{ transform: 'scale(0.5)', opacity: 0 }}
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
            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={
                    {
                        position: "fixed",
                        top: "0",
                        right: "0",
                        width: "100%",
                        maxWidth: "400px",
                        zIndex: "9999",

                    }
                }
            />
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