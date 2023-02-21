import React from 'react';

const HighlightCard = ({age, name, image, description, city}) => {
    return (
        <div className="bg-white w-64 h-96 rounded-lg shadow-lg p-8 flex flex-col items-center mt-12">
            <div className="w-24 h-24 rounded-full overflow-hidden">
                <img className="w-full h-full object-cover rounded-full" src={image} alt="profile" />
            </div>
            <h3 className="text-2xl font-medium mt-4">{name}, {age}
            </h3>
            <p className="mt-2">{city}</p>
            <p className="mt-2 text-center" style={{ maxWidth: "200px", textOverflow: "ellipsis"}}>{description}</p>
            <div className="flex flex-row gap-4 mt-4 " style={{ marginTop: "1rem" }}>
                <button className="bg-aqua-500 text-white rounded-lg px-4 py-2 hover:bg-aqua-700">Message</button>
                <button className="bg-aqua-500 text-white rounded-lg px-4 py-2 hover:bg-aqua-700">Profile</button>
            </div>
        </div>
    )
};

export default HighlightCard;
