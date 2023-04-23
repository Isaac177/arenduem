
import axios from 'axios';

const BASE_URL = 'http://localhost:8000';
export const createProperty = (propertyData) => async (dispatch, getState) => {
    try {
        const { userId } = getState().auth;
        const response = await axios.post(`${BASE_URL}/users/${userId}/properties`, propertyData);
        dispatch({ type: 'CREATE_PROPERTY_SUCCESS', payload: response.data });
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        dispatch({ type: 'CREATE_PROPERTY_FAILURE', payload: errorMessage });
    }
};

export const getProperties = () => async (dispatch, getState) => {
    try {
        const { userId } = getState().auth;
        const response = await axios.get(`${BASE_URL}/users/${userId}/properties`);
        console.log(response.data);
        dispatch({ type: 'GET_PROPERTIES_SUCCESS', payload: response.data });
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        dispatch({ type: 'GET_PROPERTIES_FAILURE', payload: errorMessage });
    }
}

