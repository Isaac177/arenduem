import React from 'react';
import Testimonials from './Testimonials';


const Testimony = () => {

    return (
        <div className="flex flex-wrap justify-around items-center p-4 bg-white py-24">
            <h1 className="text-6xl font-bold text-center text-primary-700">What Our <span className="text-aqua-500">Users</span> Are Saying?</h1>
            <Testimonials />
        </div>
);
}

export default Testimony;