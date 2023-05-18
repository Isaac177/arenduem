import React from 'react';
import roomCover from '../../assets/img/img_1.png';
import {useNavigate} from "react-router-dom";
import { useSelector} from "react-redux";
import {Element} from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";


const OwnerHero = () => {
    const navigate = useNavigate();
     const userId = useSelector((state) => state.auth.userId);

    return (
        <Element className="relative" name="hero">
            <img className="w-full object-cover object-center"
                 src={roomCover}
                 alt="room cover"
                 loading="lazy"
                 style={{height: '500px'}}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-50">
                <ScrollAnimation
                    animateIn="animate__fadeInLeft"
                    animateOut="animate__fadeOutLeft"
                    duration={2}
                    animateOnce={false} style={{width:'1080px', margin:'0 auto'}} className="pb-20 text-start">
                    <h1 className="mb-4 text-5xl font-bold text-white">
                        List your <span className="text-aqua-500">room</span> or <span className="text-aqua-500">apartment</span> for
                        free
                    </h1>
                    <button
                        className="mt-4 ml-4 rounded px-4 py-2 font-bold text-white bg-aqua-500 hover:bg-aqua-700"
                        onClick={() => navigate(`/${userId}/properties`)}
                    >
                        See my rooms
                    </button>
                </ScrollAnimation>
            </div>
        </Element>
    );
};

export default OwnerHero;