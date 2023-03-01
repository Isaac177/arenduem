import React from 'react';
import AnnounceCard from "./AnnounceCard";
import Separator from "../utils/Separator";
import QuickSearch from "./QuickSearch";



const LatestAnnouncements = () => {
    return (
        <>
        <Separator>
        <div className="flex flex-col mt-8 border-b">
            <div>
                <h1 className="text-2xl font-bold px-4 flex items-start">Latest Announcements</h1>
                <hr className="border-aqua-500 border w-1/2 ml-4" />
            </div>
                <div className="flex flex-row gap-6 flex-wrap p-12 justify-center">
                <AnnounceCard
                    housePicture="https://source.unsplash.com/random/800x600"
                    profilePicture="https://source.unsplash.com/random/64x64"
                    address="123 Main St, Anytown USA"
                    author="John Doe"
                    budget="$1000/month"
                />
                <AnnounceCard
                    housePicture="https://source.unsplash.com/random/800x600"
                    profilePicture="https://source.unsplash.com/random/64x64"
                    address="123 Main St, Anytown USA"
                    author="John Doe"
                    budget="$1000/month"
                />
                <AnnounceCard
                    housePicture="https://source.unsplash.com/random/800x600"
                    profilePicture="https://source.unsplash.com/random/64x64"
                    address="123 Main St, Anytown USA"
                    author="John Doe"
                    budget="$1000/month"
                />
                <AnnounceCard
                    housePicture="https://source.unsplash.com/random/800x600"
                    profilePicture="https://source.unsplash.com/random/64x64"
                    address="123 Main St, Anytown USA"
                    author="John Doe"
                    budget="$1000/month"
                />
                <AnnounceCard
                    housePicture="https://source.unsplash.com/random/800x600"
                    profilePicture="https://source.unsplash.com/random/64x64"
                    address="123 Main St, Anytown USA"
                    author="John Doe"
                    budget="$1000/month"
                />
                </div>
        </div>
        </Separator>
        <Separator>
            <QuickSearch />
        </Separator>
        </>
    );
};

export default LatestAnnouncements;