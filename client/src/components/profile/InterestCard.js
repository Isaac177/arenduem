import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { removeInterest } from "../../actions/interestActions";
import uuid4 from "uuid4";
import { FaCheckCircle } from "react-icons/fa";

const InterestCard = ({ interest, handleToggle, id, dbId }) => {
    const dispatch = useDispatch();
    const selectedInterests = useSelector(state => state.interest.selectedInterests);
    const isChecked = selectedInterests.some(i => i.name === interest.name);

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleRemoveInterest = (event) => {
        event.stopPropagation();
        dispatch(removeInterest(dbId || id, interest.name));
    };

    return (
        <div
            className={`flex items-center justify-center rounded-md py-1 
            px-2 bg-gray-200 shadow-sm p-2 m-2 
            ${isChecked ? "bg-green-500 text-white cursor-pointer" : ""} 
            ${isHovered ? "bg-green-300 cursor-pointer transform scale-110 transition duration-500" : ""}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleToggle({ ...interest, id: dbId || id })}
        >
            <span className="mr-1 text-xl" key={uuid4()}>{interest.icon}</span>
            <span className="mr-1 text-sm" key={uuid4()}>{interest.name}</span>
            {isChecked ? (
                <FaCheckCircle
                    className="w-5 h-5 text-sm color-gray-800"
                    onClick={handleRemoveInterest}
                />
            ) : null}
        </div>
    );
};

export default InterestCard;
