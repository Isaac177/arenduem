import { useState } from "react";
import {
    FaCheckCircle,
    FaPlusCircle,
    FaQuestion,
} from "react-icons/fa";
import uuid4 from "uuid4";
import {useDispatch, useSelector} from "react-redux";
import {addInterest, removeInterest} from "../../actions/interestActions";
import interestsArray from "../../assets/data/insterestsArray";




const InterestCard = ({ interest, handleToggle, id }) => {
    const dispatch = useDispatch();
    const selectedInterests = useSelector(
        (state) => state.interest.selectedInterests
    );
    const isChecked = selectedInterests.includes(interest.name);
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleRemoveInterest = (event) => {
        event.stopPropagation();
        dispatch(removeInterest(id));
    };

    return (
        <div
            className={`flex items-center justify-center rounded-md py-1 
            px-2 bg-gray-200 shadow-sm p-2 m-2 
            ${ isChecked ? "bg-green-500 text-white cursor-pointer" : "" } 
            ${isHovered ? "bg-green-300 cursor-pointer transform scale-110 transition duration-500" : ""}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            onClick={handleToggle}
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



const InterestList = () => {

    const selectedInterests = useSelector(
        (state) => state.interest.selectedInterests
    );
    const dispatch = useDispatch();
    const [newInterest, setNewInterest] = useState("");

    const handleToggleInterest = (interest) => {
        console.log(selectedInterests);
        if (selectedInterests.some((i) => i.name === interest.name)) {
            dispatch(removeInterest(interest.id))
        } else {
            dispatch(addInterest(interest));
        }
    };



    const handleNewInterestChange = (event) => {
        setNewInterest(event.target.value);
    };

    const handleAddInterest = () => {
        if (newInterest) {
            const interestObj = interestsArray.find(
                (interest) => interest.name === newInterest
            );
            if (interestObj) {
                dispatch(addInterest(interestObj));
                setNewInterest("");
            }
        }
    };

    return (
        <div className="flex flex-wrap">
            <div className="flex items-center justify-center p-5 text-center">
                <h1 className="text-2xl font-bold mb-2">My Interests</h1>
            </div>
            <div className="flex items-center justify-center flex-row flex-wrap">
                {interestsArray.map((interest) => (
                    <InterestCard
                        key={uuid4()}
                        interest={interest}
                        isChecked={selectedInterests.includes(interest.name)}
                        handleToggle={() => handleToggleInterest(interest)}
                    />
                ))}
                {selectedInterests
                    .filter((interest) => !interestsArray.map((item) => item.name).includes(interest.name))
                    .map((interest) => (
                        <InterestCard
                            key={uuid4()}
                            interest={{ name: interest.name, id: interest.id }}
                            isChecked={selectedInterests.some((i) => i.name === interest.name)}
                            handleToggle={() => handleToggleInterest({ name: interest.name, id: interest.id })}
                        />
                    ))}
            </div>
            <div className="flex flex-start items-center m-4 rounded-md py-1 px-2 bg-gray-200">
                <input
                    type="text"
                    placeholder="Add new interest"
                    className="outline-none border-0 bg-transparent mr-1"
                    value={newInterest}
                    onChange={handleNewInterestChange}
                />
                <FaPlusCircle
                    className="w-5 h-5 cursor-pointer"
                    onClick={handleAddInterest}
                />
            </div>
        </div>
    );
};

export default InterestList;

