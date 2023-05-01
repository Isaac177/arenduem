
import axios from 'axios';
import FormData from 'form-data';


const BASE_URL = 'http://localhost:8000';
export const createProperty = (propertyData) => async (dispatch, getState) => {
    try {
        const { userId } = getState().auth;
        const formData = new FormData();

        Object.keys(propertyData).forEach((key) => {
            if (key === 'propertyDetails') {
                const { pictures, ...otherDetails } = propertyData[key];
                pictures.forEach((picture) => {
                    formData.append('pictures', picture);
                });
                Object.keys(otherDetails).forEach((detailKey) => {
                    formData.append(`${key}.${detailKey}`, JSON.stringify(otherDetails[detailKey]));
                });
            } else {
                formData.append(key, JSON.stringify(propertyData[key]));
            }
        });

        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        const response = await axios.post(`${BASE_URL}/users/${userId}/properties`, formData);

        dispatch({ type: 'CREATE_PROPERTY_SUCCESS', payload: response.data });
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        dispatch({ type: 'CREATE_PROPERTY_FAILURE', payload: errorMessage });
    }
};

export const getProperties = () => async (dispatch, getState) => {
    console.log("getProperties action called");
    try {
        const { userId } = getState().auth;
        const response = await axios.get(`${BASE_URL}/users/${userId}/properties`);
        dispatch({ type: 'GET_PROPERTIES_SUCCESS', payload: response.data });
        console.log(JSON.stringify(response.data));
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        console.error("Error in axios request:", error);
        dispatch({ type: 'GET_PROPERTIES_FAILURE', payload: errorMessage });
    }
}

export const getUserProperties = () => async (dispatch, getState) => {
    console.log("getUserProperties action called")
    try {
        const { userId } = getState().auth;
        const response = await axios.get(`${BASE_URL}/users/${userId}/properties`);
        dispatch({ type: 'GET_USER_PROPERTIES_SUCCESS', payload: response.data });
        console.log(JSON.stringify(response.data));
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        console.error("Error in axios request:", error);
        dispatch({ type: 'GET_USER_PROPERTIES_FAILURE', payload: errorMessage });
    }
}
