import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    let navigate = useNavigate();
    return (
        <div className="min-h-screen flex items-center justify-center bg-aqua-500">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                <p className="text-white text-lg mb-8">Oops! Looks like you're lost.</p>
                <button
                    className="bg-primary-700 text-white py-2 px-4 rounded hover:bg-purple-800
                    transition-colors duration-300 ease-in-out"
                    onClick={() => navigate('/')}
                >Go back to Home</button>
            </div>
        </div>
    );
};

export default NotFound;
