import React from 'react';
import roomCover from '../../assets/img/img_1.png';
import PopupForm from "./PopupForm";
import {useNavigate} from "react-router-dom";
import { useSelector} from "react-redux";


const OwnerHero = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();
     const userId = useSelector((state) => state.auth.userId);

    return (
        <div className="relative">
            <img className="w-full object-cover object-center"
                 src={roomCover}
                 alt="room cover"
                 loading="lazy"
                 style={{height: '500px'}}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-50">
                <div style={{width:'1080px', margin:'0 auto'}} className="pb-20 text-start">
                    <h1 className="mb-4 text-5xl font-bold text-white">
                        List your <span className="text-aqua-500">room</span> or <span className="text-aqua-500">apartment</span> for
                        free
                    </h1>
                    <button
                        className="mt-4 rounded px-4 py-2 font-bold text-white bg-aqua-500 hover:bg-aqua-700"
                        onClick={() => setIsOpen(true)}
                    >
                        List your room
                    </button>
                    <button
                        className="mt-4 ml-4 rounded px-4 py-2 font-bold text-white bg-aqua-500 hover:bg-aqua-700"
                        onClick={() => navigate(`/${userId}/properties`)}
                    >
                        See my rooms
                    </button>
                </div>
            </div>
            {isOpen && (
                <PopupForm
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};

export default OwnerHero;