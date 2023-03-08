import React from 'react';
import {BsTrash} from "react-icons/bs";


const ProfileImgCard = ({profileImg, profileAlt, handleDeleteImage, handleViewImage}) => {
    if (!profileImg || !profileImg.url) {
        return null;
    }
    return (
        <div >
            <div className="flex flex-row justify-center items-center">
                <div className="w-60 h-60 rounded-xl overflow-hidden border-4 border-white
                hover:cursor-pointer hover:border-aqua-500 hover:shadow-lg hover:transition-all hover:duration-300
                hover:ease-in-out hover:transform hover:scale-105">
                    <img src={profileImg}
                         alt={profileAlt}
                         className="w-full h-full object-cover"
                         onClick={handleViewImage}
                    />
                    <BsTrash
                        className="absolute top-0 right-0 m-2 text-white hover:cursor-pointer hover:text-red-700
                        hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-105"
                        onClick={handleDeleteImage}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileImgCard;