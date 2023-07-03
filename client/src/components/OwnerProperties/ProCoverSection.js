import React, {useEffect, useState} from 'react';
import img from "../../assets/img/img.png";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserData} from "../../actions/userActions";
import {BsDot} from "react-icons/bs";
import {GrEdit} from "react-icons/gr";
import {getPictureById} from "../../actions/galleryActions";
import uuid4 from "uuid4";
import defaultImg from "../../assets/img/defaultImg.png";
import img_1 from "../../assets/img/img_1.png";


const ProCoverSection = ({handleEditProfilePic}) => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.userData);
    const images = useSelector((state) => state.gallery.images);

    const mainImage = images.find((image) => image.isMain);
    const coverImage = images.find((image) => image.isCover);

    const defaultCoverUrl = img_1;
    const defaultMainImage = defaultImg;
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Update the state when window size changes
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);

        // Cleanup after unmounting
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        dispatch(fetchUserData());
        dispatch(getPictureById());
    }, [dispatch]);

    const defaultImage = () => {
        if (!mainImage) {
            return (
                <div className="relative">
                    <img
                        className={`rounded-full absolute bottom-0 left-0 object-cover bg-center border-4 border-aqua-500 hover:cursor-pointer`}
                        src={defaultMainImage}
                        loading="lazy"
                        alt="Profile Image"
                        style={{
                            width: '100%',
                        }}
                    />
                </div>
            )
        }
    }

    const defaultCover = () => {
        if (!coverImage) {
            return (
                <div className={`relative h-40 md:h-60 lg:h-72 xl:h-80 `} key={uuid4()}>
                    <img
                        className={`z-0 h-full object-cover `}
                        src={defaultCoverUrl}
                        loading="lazy"
                        alt="Profile Cover"
                        style={{
                            width: isMobile ? '98%' : '100%',
                        }}
                    />
                </div>
            )
        }
    }

    return (
        <div className='mb-12'>
            {coverImage ? (
                <div className={`relative h-40 md:h-60 lg:h-72 xl:h-80 `} key={uuid4()}>
                    <img
                        className={`z-0 h-full object-cover `}
                        src={defaultCoverUrl}
                        loading="lazy"
                        alt="Profile Cover"
                        style={{
                            width: isMobile ? '98%' : '100%',
                        }}
                    />
                </div>
            ): defaultCover()}
            {mainImage ? (
                <div className="relative">
                    <img
                        className={`rounded-full absolute bottom-0 left-0 transform translate-x-3
                        translate-y-20 w-36 h-36 object-cover bg-center border-4 border-aqua-500 hover:cursor-pointer ${isMobile ? 'w-18 h-18' : 'w-36 h-36'}`}
                        src={`http://localhost:8000/${mainImage.fileUrl}`}
                        loading="lazy"
                        alt="Profile Image"
                    />
                    {/*<GrEdit
                        className="absolute top-0 right-0 m-2 text-white hover:cursor-pointer hover:text-red-700
                        hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-105"
                        size={20}
                        onClick={handleEditProfilePic}
                    />*/}
                </div>
            ): defaultImage()}
            <div className={`relative z-0 flex flex-row items-center rounded-r rounded-l px-4 py-2 moon bg-primary-900`}>
                {userData ? (
                    <>
                        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center`}>
                            <h1 className={`px-4 font-bold text-white ${isMobile ? 'text-sm mt-4' : 'text-2xl'}`}>
                                {userData.firstName} {userData.lastName}
                            </h1>
                            <div className={`flex ${isMobile ? 'mt-4' : ''}`}>
                                {!isMobile && <BsDot className={`font-bold text-white text-2xl`} />}
                                <p className={`px-2 text-white ${isMobile ? 'text-xxs' : 'text-base'}`}>{userData.occupation}</p>
                                <BsDot className={`font-bold text-white text-2xl`} />
                                <p className={`px-2 text-white ${isMobile ? 'text-xxs' : 'text-base'}`}>
                                    {`${userData.dateOfBirth ? new Date().getFullYear() - new Date(userData.dateOfBirth).getFullYear() : ''} ${isMobile ? 'y.o' : 'years old'}`}
                                </p>
                                <BsDot className={`font-bold text-white text-2xl`} />
                                <p className={`px-2 text-white ${isMobile ? 'text-xxs mb-4' : 'text-base'}`}>Almaty</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className={`px-4 font-bold text-white ${isMobile ? 'text-lg' : 'text-2xl'}`}>{' '} {' '}</h1>
                        <BsDot className={`font-bold text-white ${isMobile ? 'text-lg' : 'text-2xl'}`} />
                        <p className={`px-2 text-white ${isMobile ? 'text-xxs' : 'text-base'}`}></p>
                        <BsDot className={`font-bold text-white ${isMobile ? 'text-lg' : 'text-2xl'}`} />
                        <p className={`px-2 text-white ${isMobile ? 'text-xxs' : 'text-base'}`}></p>
                        <BsDot className={`font-bold text-white ${isMobile ? 'text-lg' : 'text-2xl'}`} />
                        <p className={`px-2 text-white ${isMobile ? 'text-xxs' : 'text-base'}`}></p>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProCoverSection;
