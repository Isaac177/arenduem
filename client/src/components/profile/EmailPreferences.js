import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const EmailPreferences = () => {
    const [emailUpdates, setEmailUpdates] = useState(true);

    const toggleEmailUpdates = () => {
        setEmailUpdates(!emailUpdates);
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Email Preferences</h2>
            <div className="flex items-center gap-4">
                <label htmlFor="emailUpdates" className="text-lg">
                    Receive email updates
                </label>
                <input
                    type="checkbox"
                    id="emailUpdates"
                    name="emailUpdates"
                    checked={emailUpdates}
                    onChange={toggleEmailUpdates}
                    className="form-checkbox h-5 w-5 text-green-500"
                />
            </div>
            <div className="flex items-center justify-center mt-6">
                <button
                    onClick={toggleEmailUpdates}
                    className="flex items-center justify-center bg-green-500 text-white font-semibold py-2 px-4 rounded-lg
                    shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500
                    focus:ring-opacity-50 transition duration-150"
                >
                    <FaCheckCircle className="mr-2" />
                    Save Preferences
                </button>
                <button
                    className="flex items-center justify-center ml-4 bg-red-500 text-white font-semibold py-2 px-4
                    rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500
                    focus:ring-opacity-50 transition duration-150"
                >
                    <FaTimesCircle className="mr-2" />
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default EmailPreferences;
