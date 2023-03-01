import React from 'react';
import img from "../../assets/img/img.png";
import room from "../../assets/img/img_1.png";



const CoverSection = () => {
    return (
        <>
            <div className="relative h-40 md:h-60 lg:h-72 xl:h-80">
                <img
                    className="object-cover w-full h-full"
                    src={room}
                    loading="lazy"
                    alt="Profile Cover"
                />
                <img
                    className="rounded-full absolute bottom-0 left-0 transform translate-x-3
                    translate-y-20 w-36 h-36 object-cover bg-center border-4 border-aqua-500"
                    src={img}
                    loading="lazy"
                    alt="Profile Image"
                />
            </div>
            <div className="moon relative z-10 rounded-l rounded-r px-4 py-2 bg-white">
                <h2 className="text-2xl font-bold">John Doe</h2>
                <p className="text-gray-500">24 years old</p>
            </div></>
    );
};

export default CoverSection;