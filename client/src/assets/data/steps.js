import {FaCheckCircle, FaComment, FaSearch, FaUsers} from "react-icons/fa";

const steps = [
    {
        title: "Search for Roommates",
        description: "Search for roommates based on location, lifestyle, and interests.",
        icon: <FaSearch />,
    },
    {
        title: "Connect with Potential Roommates",
        description: "Send messages and connect with potential roommates.",
        icon: <FaUsers />,
    },
    {
        title: "Discuss Your Preferences",
        description: "Discuss your living preferences with potential roommates.",
        icon: <FaComment />,
    },
    {
        title: "Agree to Live Together",
        description: "Agree to live together and move into your new home!",
        icon: <FaCheckCircle />,
    },
];

export default steps;