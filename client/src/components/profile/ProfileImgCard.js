import React, {useEffect, useState} from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import PictureOptionsModal from './PictureOptionsModal';
import {
    getPictureById,
    handleSetAsCoverImage,
    handleSetAsMainImage,
    setSelectedPicture,
    setShowImgModal
} from '../../actions/galleryActions';

const ProfileImgCard = ({
                            profileImg,
                            profileAlt,
                            pictureId,
                            handleViewImage,
                            handleDeleteImageClick,
    isMain, isCover
                        }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isTablet, setIsTablet] = useState(window.innerWidth < 1024);

    const dispatch = useDispatch();
    const showImgModal = useSelector((state) => state.gallery.showImgModal);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth < 1024);
            window.addEventListener('resize', handleResize);
        };

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const handleCardClick = () => {
        dispatch(setShowImgModal(true));
        setIsHovered(true);
    };

    const handleMoreClick = (event) => {
        event.stopPropagation();
        handleShowImageOptions(pictureId);

        if (isMobile || isTablet) {
            const position = {
                x: event.clientX,
                y: event.clientY
            };

            setClickPosition(position);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        dispatch(setShowImgModal(false));
    };

    const handleShowImageOptions = (pictureId) => {
        dispatch(setShowImgModal(true));
        setIsHovered(true);
        dispatch(setSelectedPicture(pictureId));
    };

    const handleDeleteImage = () => {
        handleDeleteImageClick(pictureId);
    };

    const handleSetMain = async (selectedPicture) => {
        await dispatch(handleSetAsMainImage(selectedPicture));
        dispatch(setShowImgModal(false));
        await dispatch(getPictureById());
    }

    const handleSetCover = async (selectedPicture) => {
        await dispatch(handleSetAsCoverImage(selectedPicture));
        dispatch(setShowImgModal(false));
        await dispatch(getPictureById());
    }

    return (
        <div className="relative">
            <div
                className="flex flex-row items-center justify-center hover:border-aqua-500 hover:scale-105 hover:transform hover:cursor-pointer hover:shadow-lg hover:transition-all hover:duration-300 hover:ease-in-out"
                onMouseEnter={() => !isMobile && setIsHovered(true)}
                onMouseLeave={() => !isMobile && setIsHovered(false)}
            >
                <div className="relative h-60 w-60 overflow-hidden rounded-xl border-4 border-white">
                    <img
                        src={`http://localhost:8000/${profileImg}`}
                        alt={profileAlt}
                        className="h-full w-full object-cover"
                        onClick={handleViewImage}
                    />
                    {isMain && (
                        <div className="absolute bottom-0 left-0 flex h-10 w-full items-center justify-center bg-black bg-opacity-50">
                            <p className="text-sm text-white">Main Image</p>
                        </div>
                    )}
                    {isCover && (
                        <div className="absolute top-0 left-0 flex h-10 w-full items-center justify-center bg-black bg-opacity-50">
                            <p className="text-sm text-white">Cover Image</p>
                        </div>
                    )}
                </div>
                {(isHovered || isMobile || isTablet) && (
                    <div className="absolute top-0 right-0 m-2 text-white">
                        <FiMoreVertical
                            onClick={handleMoreClick}
                            size={20}
                            className="hover:text-aqua-500 hover:cursor-pointer"
                        />
                        {showImgModal && (
                            <PictureOptionsModal
                                pictureId={pictureId}
                                clickPosition={clickPosition}
                                onClose={() => dispatch(setShowImgModal(false))}
                                handleDeleteImage={handleDeleteImage}
                                handleSetIsMain={() => handleSetMain(pictureId)}
                                handleSetIsCover={() => handleSetCover(pictureId)}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileImgCard;


