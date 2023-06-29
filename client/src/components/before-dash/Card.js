import React from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from "react-intersection-observer";



const Card = ({ imageSrc, imageAlt, title, subtitle, contentOrder, actions, handleClick }) => {
    const isMobile = window.innerWidth < 640;
    const controls = useAnimation();


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
            className="mt-10 mb-10 hover:border-aqua-500 hover:border hover:shadow-2xl w-full"
            onClick={handleClick}>
            <div className={`sm:flex ${contentOrder === 'image-first' ? 'sm:flex-row' : 'sm:flex-row-reverse'} justify-between `}
                 style={{
                     width: window.innerWidth < 640 ? '100%' : '100%',
                     margin: window.innerWidth < 640 ? 'auto 0' : 'auto',
            }}
            >
                <div className={`w-full sm:w-auto`} style={{ position: 'relative' }}>
                    <img src={imageSrc} alt={imageAlt}
                         className={`sm:margin-x-auto sm:rounded-lg rounded-l-lg ${contentOrder === 'image-first' ? 'lg:rounded-r-none' : 'rounded-r-lg rounded-l-none cover non-repeat'}`}
                         style={{
                             width: window.innerWidth < 640 ? 'auto' : '100%',
                             height: window.innerWidth < 640 ? '300px' : '400px',
                              objectFit: 'cover', backgroundRepeat: 'no-repeat',
                             filter: 'brightness(50%)',
                    }}
                    />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', width: '100%' }}>
                        <h1 className="m-10 text-2xl lg:text-4xl font-bold">{title}<span className="text-aqua-500 text-2xl lg:text-4xl">{subtitle}</span></h1>
                    </div>
                </div>
                <div className={`w-full sm:w-1/2 ${contentOrder === 'image-first' ? 'sm:rounded-r-lg' : 'sm:rounded-l-lg'} bg-white p-10`}>
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
            {isMobile && (
                <motion.button
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 },
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-full bg-aqua-500 hover:bg-aqua-600 text-white font-bold py-2 px-4 rounded-b-lg"
                onClick={handleClick}
                >
                    validate
                </motion.button>
            )}
        </div>
    );
};

export default Card;



