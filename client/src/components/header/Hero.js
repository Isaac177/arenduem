import React from 'react';

const Hero = () => {
    return (
        <div className="bg-cover bg-center h-64" style={{ backgroundImage: 'url(roomHero.jpeg)' }}>
            <div className="bg-primary-900 bg-opacity-50 h-64">
                <div className="container mx-auto h-full flex items-center">
                    <div className="w-full text-white text-center">
                        <h2 className="text-5xl font-medium mb-4">Welcome to React App</h2>
                        <p className="text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="w-64 mx-auto">
                            <input
                                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                                type="text"
                                placeholder="Search..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
