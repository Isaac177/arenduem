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
                <h1 className="mb-2 text-2xl font-bold">My Interests</h1>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center">
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
            <div className="block p-5">
                <p className="mr-1 text-sm">Or add new interest</p>
                <div className="m-4 flex items-center rounded-md bg-gray-200 px-2 py-1 flex-start">
                    <input
                        type="text"
                        placeholder="Add new interest"
                        className="mr-1 border-0 bg-transparent outline-none"
                        value={newInterest}
                        onChange={handleNewInterestChange}
                    />
                    <FaPlusCircle
                        className="h-5 w-5 cursor-pointer"
                        onClick={handleAddInterest}
                    />
                </div>
            </div>
        </div>
    );
};

export default InterestList;

