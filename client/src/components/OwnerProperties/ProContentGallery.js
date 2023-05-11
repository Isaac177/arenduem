import React, { useState, useEffect } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ProfileImgCard from "../profile/ProfileImgCard";
import {BsPlus} from "react-icons/bs";
import {
    setImages,
    setModalOpen,
    setIsFullSize,
    getPictureById, handleDeleteImage, setSelectedPicture, setShowImgModal, setIsMain, setIsCover,
} from '../../actions/galleryActions';
import {useDispatch, useSelector} from "react-redux";
import FullSizeImage from "../profile/FullSizeImage";
import axios from "axios";
import {Field, Form, Formik} from "formik";
import {FiCheck} from "react-icons/fi";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteModal from "../profile/DeleteModal";
import uuid4 from "uuid4";
import {motion} from "framer-motion";


const ProContentGallery = () => {
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
            <h1 className="m-4 text-2xl font-bold">My Gallery</h1>
            <div className="flex flex-row flex-wrap items-center gap-4 wrap">
                {images.map((image, index) => {
                    return (
                        <div key={uuid4()}>
                            <ProfileImgCard
                                key={uuid4()}
                                pictureId = {image.id}
                                profileImg={image.fileUrl}
                                profileAlt={image.fileName}
                                isMain = {image.isMain}
                                isCover = {image.isCover}
                                handleDeleteImageClick={() => {
                                    dispatch(setSelectedPicture(image.id));
                                    setShowDeleteModal(true);
                                    setIsMain(image.isMain);
                                    setIsCover(image.isCover);
                                }}
                                handleViewImage={() => handleViewImage(index)}
                                handleShowImageOptions={() => dispatch(setShowImgModal(true))}
                            />
                            {showDeleteModal && selectedPicture && (
                                <DeleteModal
                                    onDelete={() => handleDeleteImg(selectedPicture)}
                                    onCancel={() => setShowDeleteModal(false)}
                                    isMain={image.isMain}
                                    isCover={image.isCover}
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
                                className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
                            >
                                <motion.div
                                    className="flex flex-col items-center rounded-lg bg-white p-6"
                                    initial={{ transform: 'scale(0.5)', opacity: 0 }}
                                    animate={{ transform: 'scale(1)', opacity: 1 }}
                                    exit={{ transform: 'scale(0.5)', opacity: 0 }}
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
            />
            <div className="m-4 flex flex-row items-center justify-center">
                <button
                    className="flex items-center rounded-full p-2 px-4 py-2 font-bold text-white bg-aqua-500 hover:bg-aqua-700"
                    onClick={() => dispatch(setModalOpen(!isModalOpen))}
                >
                    <BsPlus className="inline-block align-text-top" />
                    Add Picture
                </button>
            </div>
        </div>
    );
};

export default ProContentGallery;