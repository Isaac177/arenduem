import React, { useState, useEffect } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import {fetchUserData, updateUser} from '../../actions/userActions';
import {FaSpinner} from "react-icons/fa";


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
        } catch (error) {
            console.error(error);
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

    return (
        <div>
            {!userData && <IsLoading />}
            {userData && userData.firstName && !editing ? (
                <div className="flex flex-col justify-between h-full p-4">
                    <h1 className="text-2xl font-bold mb-4">My Personal Data</h1>
                    <div className="grid grid-cols-2 gap-4 text-gray-600 text-sm font-medium mb-4 text-left">
                        <div className="align-start text-lg font-medium p-4">
                            <p>First Name:</p>
                            <p>Email:</p>
                            <p>Date of Birth:</p>
                            <p>Occupation:</p>
                            <p>About Me:</p>
                            <p>Move-In Date:</p>
                            <p>Budget:</p>
                        </div>
                        <div className="align-start text-lg font-medium -ml-4 p-4">
                            <p>{userData && userData.firstName}</p>
                            <p>{userData && userData.email}</p>
                            <p>{userData && userData.dateOfBirth.slice(0, 10)}</p>
                            <p>{userData && userData.occupation}</p>
                            <p>{userData && userData.aboutMe}</p>
                            <p>{userData && userData.moveInDate.slice(0, 10)}</p>
                            <p>{`Tt ${userData && userData.budget}/month`}</p>
                            <button
                                onClick={handleEdit}
                                className='text-aqua-300 flex flex-row hover:text-aqua-500 border border-aqua-300 hover:border-aqua-500 rounded-lg p-2 mt-4'>
                                <FiEdit2 size={24} />
                                <span className="ml-2">Edit</span>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="align-start">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <input type="text" id="firstName"
                                   name="firstName"
                                   value={userData && userData.firstName || ''}
                                   onChange={handleChange}
                                   className="rounded-lg bg-gray-300 p-2 mb-2 focus:outline-aqua-300"
                                   placeholder="First Name"
                            />
                            <input type="text"
                                   id="lastName"
                                   name="lastName"
                                   value={userData && userData.lastName || ''}
                                   onChange={handleChange}
                                   className="rounded-lg bg-gray-300 p-2 mb-2 outline-aqua-300"
                                   placeholder="Last Name"
                            />
                            <input type="email"
                                   id="email"
                                   name="email"
                                   value={userData && userData.email || ''}
                                   onChange={handleChange}
                                   className="rounded-lg bg-gray-300 p-2 mb-2 outline-aqua-300"
                                   placeholder="Email"
                            />
                            <input type="date"
                                   id="dateOfBirth"
                                   name="dateOfBirth"
                                   value={userData && userData.dateOfBirth.toLocaleString() || ''}
                                   onChange={handleChange}
                                   className="rounded-lg bg-gray-300 p-2 mb-2 outline-aqua-300"
                                   placeholder="Date of Birth"
                            />
                            <input type="text"
                                   id="occupation"
                                   name="occupation"
                                   value={userData && userData.occupation || ''}
                                   onChange={handleChange}
                                   className="rounded-lg bg-gray-300 p-2 mb-2 outline-aqua-300"
                                   placeholder="Occupation"
                            />
                            <textarea id="aboutMe"
                                      name="aboutMe"
                                      value={userData && userData.aboutMe || ''}
                                      onChange={handleChange}
                                      className="rounded-lg bg-gray-300 p-2 mb-2 outline-aqua-300"
                                        placeholder="About Me"
                            />
                            <input type="date"
                                   id="moveInDate"
                                   name="moveInDate"
                                   value={userData && userData.moveInDate || ''}
                                   onChange={handleChange}
                                   className="rounded-lg bg-gray-300 p-2 mb-2 outline-aqua-300"
                                   placeholder="Move-In Date"
                            />
                            <input type="number"
                                   id="budget"
                                   name="budget"
                                   value={userData && userData.budget || ''}
                                   onChange={handleChange}
                                   className="rounded-lg bg-gray-300 p-2 mb-2 outline-aqua-300"
                                   placeholder="Budget in Tenge"
                            />
                        </div>
                        <div className="flex justify-between mt-4">
                            <button type="submit" className="px-4 py-2 bg-aqua-500 text-white rounded-lg hover:bg-aqua-400">Save</button>
                            <button type="button" onClick={handleEdit} className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg hover:bg-gray-400">Cancel</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default PersonalData;
