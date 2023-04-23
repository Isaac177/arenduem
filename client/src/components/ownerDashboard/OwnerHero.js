import React from 'react';
import roomCover from '../../assets/img/img_1.png';
import PopupForm from "./PopupForm";
import {useNavigate} from "react-router-dom";


const OwnerHero = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();

    return (
        <div className="relative">
            <img className="w-full object-cover object-center"
                 src={roomCover}
                 alt="room cover"
                 loading="lazy"
                 style={{height: '500px'}}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-50">
                <div style={{width:'1080px', margin:'0 auto'}} className="text-start pb-20">
                    <h1 className="text-5xl font-bold mb-4 text-white">
                        List your <span className="text-aqua-500">room</span> or <span className="text-aqua-500">apartment</span> for
                        free
                    </h1>
                    <button
                        className="bg-aqua-500 hover:bg-aqua-700 text-white font-bold py-2 px-4 rounded mt-4"
                        onClick={() => setIsOpen(true)}
                    >
                        List your room
                    </button>
                    <button
                        className="bg-aqua-500 hover:bg-aqua-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
                        onClick={() => navigate('/r/')}
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