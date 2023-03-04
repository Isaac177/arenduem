import React from 'react';


const ProfileImgCard = ({profileImg, profileAlt}) => {
    return (
        <div >
            <div className="flex flex-row justify-center items-center">
                <div className="w-60 h-60 rounded-xl overflow-hidden border-4 border-white
                hover:cursor-pointer hover:border-aqua-500 hover:shadow-lg hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-105">
                    <img src={profileImg}
                         alt={profileAlt}
                         className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileImgCard;