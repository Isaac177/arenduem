import React from 'react';
import testimonies from '../../assets/data/testimonies';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import {Element} from "react-scroll";

const Testimonials = () => {
    return (
        <Element className="flex flex-wrap justify-around items-center p-4 mt-48">
            {testimonies.map((testimony, index) => (
                <ScrollAnimation
                    key={index}
                    animateIn="animate__fadeInUp"
                    animateOnce={false}
                    duration={1.5}
                    delay={300 * index}
                     className="flex flex-col items-center m-4 p-4 bg-white rounded-lg w-64 relative border-2 border-aqua-500 shadow-lg"
                >
                    <div className="absolute -top-12">
                        <img className="w-24 h-24 rounded-full border-4 border-aqua-500"
                             src={testimony.image} alt={testimony.name} />
                    </div>
                    <div className="mt-12">
                        <h2 className="text-sm text-center mb-2">{testimony.name}</h2>
                        <blockquote className="text-center" style={{ fontFamily: "Montserrat" }}>
                            <span className="text-6xl text-amber-400 leading-none">&ldquo;</span>
                            <p className="italic">{testimony.quote}</p>
                            <span className="text-6xl text-amber-400 leading-none">&rdquo;</span>
                        </blockquote>
                    </div>
                </ScrollAnimation>
            ))}
        </Element>
    );
};

export default Testimonials;
