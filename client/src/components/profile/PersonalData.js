import React, { useState, useEffect } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import {fetchUserData, updateUser} from '../../actions/userActions';

const PersonalData = ({userId}) => {
    const [editing, setEditing] = useState(false);

    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.userData);

    useEffect(() => {
        dispatch(fetchUserData(userId));
    }, [dispatch, userId]);

    const handleEdit = () => {
        setEditing(!editing);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(updateUser(userId, userData));
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

    return (
        <div>
            {userData && !editing ? (
                <div>
                    <h1>Personal Data</h1>
                    <div>
                        <p>Name: {userData.firstName} {userData.lastName}</p>
                        <p>Email: {userData.email}</p>
                        <p>Date of Birth: {userData.dateOfBirth}</p>
                        <p>Occupation: {userData.occupation}</p>
                        <p>About Me: {userData.aboutMe}</p>
                        <p>Move-In Date: {userData.moveInDate}</p>
                        <p>Budget: {userData.budget}</p>
                        <button onClick={handleEdit}>
                            <FiEdit2 size={24} />
                        </button>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" value={userData.firstName} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" value={userData.lastName} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input type="date" id="dateOfBirth" name="dateOfBirth" value={userData.dateOfBirth} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="occupation">Occupation</label>
                        <input type="text" id="occupation" name="occupation" value={userData.occupation} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="aboutMe">About Me</label>
                        <textarea id="aboutMe" name="aboutMe" value={userData.aboutMe} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="moveInDate">Move-In Date</label>
                        <input type="date" id="moveInDate" name="moveInDate" value={userData.moveInDate} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="budget">Budget</label>
                        <input type="number" id="budget" name="budget" value={userData.budget} onChange={handleChange} />
                    </div>
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleEdit}>Cancel</button>
                </form>
            )}
        </div>
    );
};

export default PersonalData;
