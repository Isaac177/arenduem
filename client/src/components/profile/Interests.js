import { useState } from "react";
import {
    FaCheckCircle,
    FaPlusCircle,
    FaHiking,
    FaUtensils,
    FaGamepad,
    FaBook,
    FaPlane,
    FaCamera,
    FaFutbol,
    FaMusic,
    FaFilm,
    FaTv,
    FaRegLaugh,
    FaFeatherAlt,
    FaPencilRuler,
    FaPalette,
    FaYarn,
    FaBirthdayCake,
    FaCampground,
    FaFish,
    FaSwimmer,
    FaRunning,
    FaOm,
    FaFistRaised,
    FaSeedling,
    FaTools,
    FaHammer,
    FaCut,
    FaTree,
    FaSkiing,
    FaSnowboarding,
    FaSnowflake,
    FaCrosshairs,
    FaTractor,
} from "react-icons/fa";
import uuid4 from "uuid4";
import {GiSewingNeedle} from "react-icons/gi";
import {GrYoga} from "react-icons/gr";


const interestsArray = [
    {
        name: "Hiking",
        icon: <FaHiking />,
    },
    {
        name: "Cooking",
        icon: <FaUtensils />,
    },
    {
        name: "Gaming",
        icon: <FaGamepad />,
    },
    {
        name: "Reading",
        icon: <FaBook />,
    },
    {
        name: "Traveling",
        icon: <FaPlane />,
    },
    {
        name: "Photography",
        icon: <FaCamera />,
    },
    {
        name: "Sports",
        icon: <FaFutbol />,
    },
    {
        name: "Music",
        icon: <FaMusic />,
    },
    {
        name: "Movies",
        icon: <FaFilm />,
    },
    {
        name: "TV Shows",
        icon: <FaTv />,
    },
    {
        name: "Dancing",
        icon: <FaRegLaugh />,
    },
    {
        name: "Singing",
        icon: <FaMusic />,
    },
    {
        name: "Writing",
        icon: <FaFeatherAlt />,
    },
    {
        name: "Drawing",
        icon: <FaPencilRuler />,
    },
    {
        name: "Painting",
        icon: <FaPalette />,
    },
    {
        name: "Knitting",
        icon: <FaYarn />,
    },
    {
        name: "Sewing",
        icon: <GiSewingNeedle />,
    },
    {
        name: "Baking",
        icon: <FaBirthdayCake />,
    },
    {
        name: "Camping",
        icon: <FaCampground />,
    },
    {
        name: "Fishing",
        icon: <FaFish />,
    },
    {
        name: "Swimming",
        icon: <FaSwimmer />,
    },
    {
        name: "Running",
        icon: <FaRunning />,
    },
    {
        name: "Yoga",
        icon: <GrYoga />,
    },
    {
        name: "Meditation",
        icon: <FaOm />,
    },
    {
        name: "Martial Arts",
        icon: <FaFistRaised />,
    },
    {
        name: "Gardening",
        icon: <FaSeedling />,
    },
    {
        name: "DIY",
        icon: <FaTools />,
    },
    {
        name: "Home Improvement",
        icon: <FaHammer/>,
    },
    {
        name: "Crafting",
        icon: <FaCut />,
    },
    {
        name: "Woodworking",
        icon: <FaTree />,
    },
    {
        name: "Skiing",
        icon: <FaSkiing />,
    },
    {
        name: "Snowboarding",
        icon: <FaSnowboarding />,
    },
    {
        name: "Snowshoeing",
        icon: <FaSnowflake />,
    },
    {
        name: "Hunting",
        icon: <FaCrosshairs />,
    },
    {
        name: "Farming",
        icon: <FaTractor />,
    },
];

const InterestCard = ({ interest, isChecked, handleToggle }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`flex items-center justify-center rounded-md py-1 px-2 bg-gray-200 
            ${ isChecked ? "bg-green-500 text-white cursor-pointer" : "" } 
            ${isHovered ? "bg-green-300 cursor-pointer" : ""}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            onClick={handleToggle}
        >
            <span className="mr-1">{interest.icon}</span>
            <span className="mr-1">{interest.name}</span>
            {isChecked ? (
                <FaCheckCircle className="w-5 h-5" />
            ) : (
                <FaPlusCircle className="w-5 h-5" />
            )}
        </div>
    );
};

const InterestList = () => {
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [newInterest, setNewInterest] = useState("");

    const handleToggleInterest = (interest) => {
        if (selectedInterests.includes(interest.name)) {
            setSelectedInterests(
                selectedInterests.filter((item) => item !== interest.name)
            );
        } else {
            setSelectedInterests([...selectedInterests, interest.name]);
        }
        console.log(selectedInterests);
    };

    const handleNewInterestChange = (event) => {
        setNewInterest(event.target.value);
    };

    const handleAddInterest = () => {
        if (newInterest) {
            setSelectedInterests([...selectedInterests, newInterest]);
            setNewInterest("");
        }
    };

    return (
        <div className="flex flex-wrap">
            {interestsArray.map((interest) => (
                <InterestCard
                    key={uuid4()}
                    interest={interest}
                    isChecked={selectedInterests.includes(interest.name)}
                    handleToggle={() => handleToggleInterest(interest)}
                />
            ))}
            <div className="flex items-center justify-center rounded-md py-1 px-2 bg-gray-200">
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

