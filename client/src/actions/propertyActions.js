
import axios from 'axios';

const BASE_URL = 'http://localhost:8000';
export const createProperty = (propertyData) => async (dispatch, getState) => {
    try {
        const { userId } = getState().auth;
        console.log("userId:", userId);
        const response = await axios.post(`${BASE_URL}/users/${userId}/properties`, propertyData);
        dispatch({ type: 'CREATE_PROPERTY_SUCCESS', payload: response.data });
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        dispatch({ type: 'CREATE_PROPERTY_FAILURE', payload: errorMessage });
    }
};

