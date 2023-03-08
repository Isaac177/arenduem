import React, { useState, useEffect } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ProfileImgCard from "./ProfileImgCard";
import {BsPlus} from "react-icons/bs";
import UploadImage from "./UploadImage";
import {
    setImages,
    setModalOpen,
    setFile,
    setIsMain,
    setIsCover,
    setIsFullSize,
    getPictureById,
    uploadPicture
} from '../../actions/galleryActions';
import {useDispatch, useSelector} from "react-redux";
import FullSizeImage from "./FullSizeImage";

const ContentGallery = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const dispatch = useDispatch();
    const [isPrevDisabled, setIsPrevDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(false);

    const images = useSelector(state => state.gallery.images);
    const isMain = useSelector(state => state.gallery.isMain);
    const isCover = useSelector(state => state.gallery.isCover);
    const isModalOpen = useSelector(state => state.gallery.isModalOpen);
    const isFullSize = useSelector(state => state.gallery.isFullSize);

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

    const handleUploadImageClick = async () => {
        await dispatch(uploadPicture());
        dispatch(setModalOpen(!isModalOpen));
        console.log('image uploaded');
    };

    return (
        <div>
            <h1 className="text-2xl font-bold m-4">My Gallery</h1>

            <div className="flex flex-row items-center gap-4 flex-wrap wrap">
                {images.map((image, index) => (
                    <ProfileImgCard
                        key={index}
                        profileImg={image.url}
                        profileAlt={image.alt}
                        handleDeleteImage={() => handleDeleteImage(index)}
                        handleViewImage={() => handleViewImage(index)}
                    />
                ))}
            </div>
            {isModalOpen && (
                <UploadImage
                    handleModalClose={() => dispatch(setModalOpen(!isModalOpen))}
                    handleFileChange={(event) => dispatch(setFile(event.target.files[0]))}
                    handleIsMainChange={() => dispatch(setIsMain(!isMain))}
                    handleIsCoverChange={() => dispatch(setIsCover(!isCover))}
                    handleUploadImage={handleUploadImageClick}
                    isMain={isMain}
                    isCover={isCover}
                />
            )}
            {isFullSize && (
                <FullSizeImage
                    src={images[currentImageIndex].original}
                    alt={images[currentImageIndex].alt}
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