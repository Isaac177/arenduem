import React from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from "react-intersection-observer";
import { useLocation, useNavigate } from 'react-router-dom';



const Card = ({ imageSrc, imageAlt, title, subtitle, contentOrder, actions, handleClick }) => {
    const controls = useAnimation();
    const location = useLocation();
    const navigate = useNavigate();


    const [ref, inView] = useInView({
        threshold: 0.1,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return (
        <div
            className="mt-10 mb-10 hover:border-aqua-500 hover:border hover:shadow-2xl"
            onClick={handleClick}
        >
        <div className={`flex ${contentOrder === 'image-first' ? 'flex-row' : 'flex-row-reverse'} justify-between`}>
                <div style={{ position: 'relative' }}>
                    <img src={imageSrc} alt={imageAlt} className={`rounded-l-lg ${contentOrder === 'image-first' ? 'rounded-r-none' : 'rounded-r-lg rounded-l-none cover non-repeat'}`}
                         style={{ width: '700px', height: '400px', objectFit: 'cover', backgroundRepeat: 'no-repeat', filter: 'brightness(50%)' }} />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', width: '100%' }}>
                        <h1 className="m-10 text-4xl font-bold">{title}<span className="text-aqua-500">{subtitle}</span></h1>
                    </div>
                </div>
                <div className={`flex flex-col w-1/2 ${contentOrder === 'image-first' ? 'rounded-r-lg' : 'rounded-l-lg'} bg-white p-10`}>
                    {actions.map((action, index) => (
                        <div key={index} className="mt-5 flex w-full flex-row justify-between gap-8">
                            {action.icon}
                            <div className="flex w-full flex-col">
                                <h2 className="text-lg font-bold">{action.title}</h2>
                                <span className="text-xs">{action.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;



