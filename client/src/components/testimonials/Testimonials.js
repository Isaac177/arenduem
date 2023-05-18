import React from 'react';
import testimonies from '../../assets/data/testimonies';

const Testimonials = () => {
    return (
        <div className="flex flex-wrap justify-around items-center p-4 mt-48">
            {testimonies.map((testimony, index) => (
                <div key={index} className="flex flex-col items-center m-4 p-4 bg-white shadow-md rounded-lg w-64 relative">
                    <div className="absolute -top-12">
                        <img className="w-24 h-24 rounded-full" src={testimony.image} alt={testimony.name} />
                    </div>
                    <div className="mt-12">
                        <h2 className="text-lg font-bold mb-2">{testimony.name}</h2>
                        <blockquote className="text-center">
                            <span className="absolute text-6xl text-blue-600 leading-none">&ldquo;</span>
                            <p className="italic">{testimony.quote}</p>
                            <span className="absolute text-6xl text-blue-600 leading-none">&rdquo;</span>
                        </blockquote>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
