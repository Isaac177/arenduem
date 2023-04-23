import React from 'react';
import AnnounceCard from "./AnnounceCard";
import Separator from "../utils/Separator";
import QuickSearch from "./QuickSearch";


const cards = [
{
    housePicture: "https://source.unsplash.com/random/800x600",
    profilePicture: "https://source.unsplash.com/random/64x64",
    address: "123 Main St, Anytown USA",
    author: "John Doe",
    budget: "$1000/month"
},

    {
        housePicture: "https://source.unsplash.com/random/800x600",
        profilePicture: "https://source.unsplash.com/random/64x64",
        address: "123 Main St, Anytown USA",
        author: "John Doe",
        budget: "$1000/month"
    },
    {
        housePicture: "https://source.unsplash.com/random/800x600",
        profilePicture: "https://source.unsplash.com/random/64x64",
        address: "123 Main St, Anytown USA",
        author: "John Doe",
        budget: "$1000/month"
    },
    {
        housePicture: "https://source.unsplash.com/random/800x600",
        profilePicture: "https://source.unsplash.com/random/64x64",
        address: "123 Main St, Anytown USA",
        author: "John Doe",
        budget: "$1000/month"
    },
    {
        housePicture: "https://source.unsplash.com/random/800x600",
        profilePicture: "https://source.unsplash.com/random/64x64",
        address: "123 Main St, Anytown USA",
        author: "John Doe",
        budget: "$1000/month"
    },
    {
        housePicture: "https://source.unsplash.com/random/800x600",
        profilePicture: "https://source.unsplash.com/random/64x64",
        address: "123 Main St, Anytown USA",
        author: "John Doe",
        budget: "$1000/month"
    },
    {
        housePicture: "https://source.unsplash.com/random/800x600",
        profilePicture: "https://source.unsplash.com/random/64x64",
        address: "123 Main St, Anytown USA",
        author: "John Doe",
        budget: "$1000/month"
    },
    {
        housePicture: "https://source.unsplash.com/random/800x600",
        profilePicture: "https://source.unsplash.com/random/64x64",
        address: "123 Main St, Anytown USA",
        author: "John Doe",
        budget: "$1000/month"
    },
    ]


const LatestAnnouncements = () => {
    const [numCards, setNumCards] = React.useState(3);
    const [showAllCards, setShowAllCards] = React.useState(false);


    const slicedCards = showAllCards ? cards : cards.slice(0, numCards);
    return (
        <>
        <Separator>
        <div className="mt-8 flex flex-col border-b">
            <div>
                <h1 className="flex items-start px-4 text-2xl font-bold">Latest Announcements</h1>
                <hr className="ml-4 w-1/2 border border-aqua-500" />
            </div>
            <div className={`flex flex-row gap-6 flex-wrap p-12 ${showAllCards ? 'animate-fade-in transform translate-y-0' : 'animate-fade-out transform translate-y-4'}`}>
            {slicedCards.map((card, index) => (
                        <AnnounceCard
                            key={index}
                            housePicture={card.housePicture}
                            profilePicture={card.profilePicture}
                            address={card.address}
                            author={card.author}
                            budget={card.budget}
                        />
                    ))}
                </div>
            {numCards < cards.length && (
                <div className="my-4 flex justify-center">
                    {showAllCards ? (
                        <button
                            onClick={() => setShowAllCards(false)}
                            className="underline text-aqua-500 text-decoration: hover:text-aqua-600 hover:underline focus:outline-none"
                        >View less</button>
                    ) : (
                        <button
                            onClick={() => setShowAllCards(true)}
                            className="underline text-aqua-500 text-decoration: hover:text-aqua-600 hover:underline focus:outline-none"
                        >View all</button>
                    )}
                </div>
            )}
        </div>
        </Separator>
        <Separator>
            <QuickSearch />
        </Separator>
        </>
    );
};

export default LatestAnnouncements;