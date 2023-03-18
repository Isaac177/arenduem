import React, {useEffect} from 'react';
import img from "../../assets/img/img.png";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserData} from "../../actions/userActions";
import {BsDot} from "react-icons/bs";
import {GrEdit} from "react-icons/gr";
import {getPictureById} from "../../actions/galleryActions";
import uuid4 from "uuid4";
import defaultImg from "../../assets/img/defaultImg.png";
import img_1 from "../../assets/img/img_1.png";


const CoverSection = ({handleEditProfilePic}) => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.userData);
    const images = useSelector((state) => state.gallery.images);

    const mainImage = images.find((image) => image.isMain);
    const coverImage = images.find((image) => image.isCover);

    const defaultCoverUrl = img_1;
    const defaultMainImage = defaultImg;

    useEffect(() => {
        dispatch(fetchUserData());
        dispatch(getPictureById());
    }, [dispatch]);

    const defaultImage = () => {
        if (!mainImage) {
            return (
                <div className="relative">
                    <img
                        className="rounded-full absolute bottom-0 left-0 transform translate-x-3
                        translate-y-20 w-36 h-36 object-cover bg-center border-4 border-aqua-500 hover:cursor-pointer"
                        src={defaultMainImage}
                        loading="lazy"
                        alt="Profile Image"
                    />
                    <GrEdit
                        className="absolute top-0 right-0 mr-2 mt-2 text-2xl text-gray-500 hover:text-gray-700"
                        onClick={handleEditProfilePic}
                    />
                </div>
            )
        }
    }

    const defaultCover = () => {
        if (!coverImage) {
            return (
                <div className="relative h-40 md:h-60 lg:h-72 xl:h-80" key={uuid4()}>
                    <img
                        className="object-cover w-full h-full z-0"
                        src={defaultCoverUrl}
                        loading="lazy"
                        alt="Profile Cover"
                    />
                </div>
            )
        }
    }

    return (
        <>
            {coverImage ? (
                <div className="relative h-40 md:h-60 lg:h-72 xl:h-80" key={uuid4()}>
                    <img
                        className="object-cover w-full h-full z-0"
                        src={`http://localhost:8000/${coverImage.fileUrl}`}
                        loading="lazy"
                        alt="Profile Cover"
                    />
                </div>
            ): defaultCover()}
            {mainImage ? (
                <div className="relative">
                    <img
                        className="rounded-full absolute bottom-0 left-0 transform translate-x-3
                        translate-y-20 w-36 h-36 object-cover bg-center border-4 border-aqua-500 hover:cursor-pointer"
                        src={`http://localhost:8000/${mainImage.fileUrl}`}
                        loading="lazy"
                        alt="Profile Image"
                    />
                    <GrEdit
                        className="absolute top-0 right-0 m-2 text-white hover:cursor-pointer hover:text-red-700
                        hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-105"
                        size={20}
                        onClick={handleEditProfilePic}
                    />
                </div>
            ): defaultImage()}
            <div className="moon relative z-0 flex flex-row rounded-l items-center rounded-r px-4 py-2 bg-primary-900">
                {userData ? (
                    <>
                        <h1 className="text-2xl font-bold text-white px-4">
                            {userData.firstName} {userData.lastName}
                        </h1>
                        <BsDot className="text-white font-bold text-2xl" />
                        <p className="text-white px-2">{userData.occupation}</p>
                        <BsDot className="text-white font-bold text-2xl" />
                        <p className="text-white px-2">{`${userData.dateOfBirth?.slice(0, 4) || ''} - ${new Date().getFullYear()}`}</p>
                        <BsDot className="text-white font-bold text-2xl" />
                        <p className="text-white px-2">Almaty</p>
                    </>
                ) : (
                    <>
                        <h1 className="text-2xl font-bold text-white px-4">{' '} {' '}</h1>
                        <BsDot className="text-white font-bold text-2xl" />
                        <p className="text-white px-2"></p>
                        <BsDot className="text-white font-bold text-2xl" />
                        <p className="text-white px-2"></p>
                        <BsDot className="text-white font-bold text-2xl" />
                        <p className="text-white px-2"></p>
                    </>
                )}
            </div>
        </>
    );
};

export default CoverSection;
