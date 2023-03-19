import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import uuid4 from "uuid4";
import {useDispatch, useSelector} from "react-redux";
import {addInterest, removeInterest} from "../../actions/interestActions";
import interestsArray from "../../assets/data/insterestsArray";
import InterestCard from "./InterestCard";



const InterestList = () => {

    const selectedInterests = useSelector(
        (state) => state.interest.selectedInterests
    );
    const dispatch = useDispatch();
    const [newInterest, setNewInterest] = useState("");

    const handleToggleInterest = (interest) => {
        const existingInterest = selectedInterests.find((i) => i.name === interest.name);

        if (existingInterest) {
            dispatch(removeInterest(existingInterest.id, existingInterest.name));
        } else {
            dispatch(addInterest(interest));
        }
    };

    const handleNewInterestChange = (event) => {
        setNewInterest(event.target.value);
    };

    const handleAddInterest = () => {
        console.log("newInterest", newInterest)
        if (newInterest) {
            dispatch(addInterest({ name: newInterest }));
            setNewInterest("");
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
                        isChecked={selectedInterests.some(i => i.name === interest.name)}
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
                            id={interest.id}
                            dbId={interest.id}
                        />
                    ))}
            </div>
            <div className="block p-5 ">
                <p className="mr-1 text-sm">Or add new interest</p>
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
        </div>
    );
};

export default InterestList;

