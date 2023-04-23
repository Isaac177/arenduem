import React from 'react';

const HighlightCard = ({age, name, image, description, city}) => {
    return (
        <div className="mt-12 flex h-96 w-64 flex-col items-center rounded-lg bg-white p-8 shadow-lg">
            <div className="h-24 w-24 overflow-hidden rounded-full">
                <img className="h-full w-full rounded-full object-cover" src={image} alt="profile" />
            </div>
            <h3 className="mt-4 text-2xl font-medium">{name}, {age}
            </h3>
            <p className="mt-2">{city}</p>
            <p className="mt-2 text-center" style={{ maxWidth: "200px", textOverflow: "ellipsis"}}>{description}</p>
            <div className="mt-4 flex flex-row gap-4" style={{ marginTop: "1rem" }}>
                <button className="rounded-lg px-4 py-2 text-white bg-aqua-500 hover:bg-aqua-700">Message</button>
                <button className="rounded-lg px-4 py-2 text-white bg-aqua-500 hover:bg-aqua-700">Profile</button>
            </div>
        </div>
    )
};

export default HighlightCard;
