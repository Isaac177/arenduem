import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const EmailPreferences = () => {
    const [emailUpdates, setEmailUpdates] = useState(true);

    const toggleEmailUpdates = () => {
        setEmailUpdates(!emailUpdates);
    };

    return (
        <div className="p-4">
            <h2 className="mb-4 text-2xl font-semibold">Email Preferences</h2>
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
                    className="h-5 w-5 text-green-500 form-checkbox"
                />
            </div>
            <div className="mt-6 flex items-start">
                <button
                    onClick={toggleEmailUpdates}
                    className="flex items-center justify-center bg-green-500 text-white font-semibold py-2 px-4 rounded-lg
                    shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500
                    focus:ring-opacity-50 transition duration-150"
                >
                    <FaCheckCircle className="mr-2" />
                    Save Preferences
                </button>
            </div>
        </div>
    );
};

export default EmailPreferences;
