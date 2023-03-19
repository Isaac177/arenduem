import React, { useState, useEffect } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, updateUser } from '../../actions/userActions';
import { FaSpinner } from "react-icons/fa";
import {toast, ToastContainer} from "react-toastify";


const PersonalData = () => {

    const [editing, setEditing] = useState(false);
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.userData);
    const userId = useSelector((state) => state.auth.userId);

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch, userId]);

    const handleEdit = () => {
        setEditing(!editing);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(updateUser(userData));
            setEditing(false);
            toast.success('Profile updated successfully');
        } catch (error) {
            toast.error('Profile update failed');
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        dispatch({
            type: 'UPDATE_USER_FIELD',
            payload: { name, value },
        });
    };

    const IsLoading = () => (
        <div className="flex justify-center items-center animate-spin text-2xl text-gray-600">
            <FaSpinner className="mr-2" />
            <span>Loading...</span>
        </div>
    );

    const smallText = 'text-gray-600 text-sm font-medium text-left';
    const inputStyles = 'rounded-lg bg-gray-300 p-2 mb-2 focus:outline-aqua-300 focus:ring-2 focus:ring-aqua-300 focus:ring-opacity-50 w-1/2'

    return (
        <div>
            {!userData ? <IsLoading /> : (
                <div className="align-start">
                    <h1 className="text-2xl font-bold m-4">My Personal Data</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="align-start text-lg p-4">
                            <p className={smallText}>First Name:</p>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={userData?.firstName || ''}
                                onChange={handleChange}
                                className={inputStyles}
                                placeholder="First Name"
                            />
                            <p className={smallText}>Last Name:</p>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={userData?.lastName || ''}
                                onChange={handleChange}
                                className={inputStyles}
                                placeholder="Last Name"
                            />
                            <p className={smallText}>Email:</p>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={userData?.email || ''}
                                onChange={handleChange}
                                className={inputStyles}
                                placeholder="Email"
                            />
                            <p className={smallText}>Phone Number:</p>
                            <input
                                type="date"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                value={userData?.dateOfBirth?.slice(0, 10) || ''}
                                onChange={handleChange}
                                className={inputStyles}
                                placeholder="Date of Birth"
                            />
                            <p className={smallText}>Gender:</p>
                            <input
                                type="text"
                                id="occupation"
                                name="occupation"
                                value={userData?.occupation || ''}
                                onChange={handleChange}
                                className={inputStyles}
                                placeholder="Occupation"
                            />
                            <p className={smallText}>About Me:</p>
                            <textarea
                                id="aboutMe"
                                name="aboutMe"
                                value={userData?.aboutMe || ''}
                                onChange={handleChange}
                                className={inputStyles}
                                placeholder="About Me"
                                rows={5}
                                cols={50}
                            />
                            <p className={smallText}>Move-In Date:</p>
                            <input
                                type="date"
                                id="moveInDate"
                                name="moveInDate"
                                value={userData?.moveInDate?.slice(0, 10) || ''}
                                onChange={handleChange}
                                className={inputStyles}
                                placeholder="Move-In Date"
                            />
                            <p className={smallText}>Budget in tenge</p>
                            <input
                                type="number"
                                id="budget"
                                name="budget"
                                value={userData?.budget || ''}
                                onChange={handleChange}
                                className={inputStyles}
                                placeholder="Budget in Tenge"
                            />
                            <div className="flex gap-4 mt-4">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-aqua-500 text-white rounded-lg hover:bg-aqua-400"
                                    onClick={handleSubmit}
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={handleEdit}
                                    className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg hover:bg-gray-400">
                                    Cancel
                                </button>
                                <ToastContainer
                                    position="right-center"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    style={{
                                        position: 'absolute',
                                        top: '0',
                                        right: '0',
                                        zIndex: '9999',
                                }}
                                />
                            </div>
                        </div>
                    </form>
                    {!userData.firstName && (
                        <button
                            onClick={handleEdit}
                            className='text-aqua-300 flex flex-row hover:text-aqua-500 border border-aqua-300 hover:border-aqua-500 rounded-lg p-2 mt-4'>
                            <FiEdit2 size={24} />
                            <span className="ml-2">Edit</span>
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default PersonalData;