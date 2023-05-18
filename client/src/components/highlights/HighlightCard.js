import React from 'react';
import { EmailOutlined, PersonOutline, LocationOnOutlined } from '@material-ui/icons';

const HighlightCard = ({age, name, image, description, city}) => {
    return (
        <div className="mt-12 flex h-96 w-64 flex-col items-center p-8 shadow-lg">
            <div style={{ height: "300px", width: "300px" }}>
                <img className="object-cover rounded-lg" src={image} alt="profile" style={{ height: "300px", width: "300px" }} />
            </div>
            <h3 className="mt-12 text-2xl font-bold text-white">{name}, {age}
            </h3>
            <div className="flex items-center gap-2 mt-2">
                <LocationOnOutlined className="text-aqua-500" style={{ fontSize: 20 }}/>
                <p className="text-white text-sm">{city}</p>
            </div>
            <p className="mt-2 text-center text-white text-sm" style={{ maxWidth: "200px", textOverflow: "ellipsis"}}>{description}</p>
            <div className="mt-4 flex flex-row gap-4" style={{ marginTop: "1rem" }}>
                <EmailOutlined className="cursor-pointer text-aqua-500 hover:text-aqua-700 hover:scale-125 cursor-pointer" style={{ fontSize: 24 }}/>
                <PersonOutline className="cursor-pointer text-aqua-500 hover:text-aqua-700 hover:scale-125 cursor-pointer" style={{ fontSize: 24 }}/>
            </div>
        </div>
    )
};


export default HighlightCard;
