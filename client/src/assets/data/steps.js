import searchMate from '../img/searchMate.jpg';
import chatMate from '../img/chatMate.jpg';
import agreeMate from '../img/agreeMate.avif';

const steps = [
    {
        number: 1,
        title: "Search for Roommates",
        description: "Search for roommates based on location, lifestyle, and interests." +
            "Our algorithm will match you with potential roommates based on your preferences.",
        icon: searchMate,
    },
    {
        number: 2,
        title: "Connect with Potential Roommates",
        description: "Send messages and connect with potential roommates. " +
            "Our chat feature allows you to get to know your potential roommates. " +
            "Discuss your living preferences and see if you are a good fit.",
        icon: chatMate,
    },
    {
        number: 3,
        title: "Agree to Live Together",
        description: "Agree to live together and move into your new home! Once you have found your perfect roommate, " +
            "you can agree to live together and start your new journey.",
        icon: agreeMate,
    },
];

export default steps;