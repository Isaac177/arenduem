
import axios from 'axios';
import FormData from 'form-data';
import {setServerError} from "./errorActions";


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
    try {
        const response = await axios.get(`${BASE_URL}/properties`);
        dispatch({ type: 'GET_PROPERTIES_SUCCESS', payload: response.data });
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        console.error("Error in axios request:", error);
        dispatch({ type: 'GET_PROPERTIES_FAILURE', payload: errorMessage });
    }
}

const requestAISuggestion = async (label, value) => {
    const prompt = `
        Analyze the following property data:
        ${label}: ${value}

        Provide feedback and suggestions for improvements:
    `;

    return await fetchSuggestions(prompt);
};
export const getUserProperties = () => async (dispatch, getState) => {
    try {
        const { userId } = getState().auth;
        const authState = getState().auth;

        const response = await axios.get(`${BASE_URL}/users/${userId}/properties`);
        dispatch({ type: 'GET_USER_PROPERTIES_SUCCESS', payload: response.data });

        const fieldsToFetch = [
            { key: 'propertyType', label: 'Property type' },
            { key: 'Address.country', label: 'Country' },
            { key: 'Address.city', label: 'City' },
            { key: 'Price.pricePerMonth', label: 'Price per month' },
            { key: 'description', label: 'Description' },
        ];

        for (const property of response.data.properties) {
            let combinedPrompt = `Analyze the following property data:\n`;

            for (const field of fieldsToFetch) {
                const [parentKey, childKey] = field.key.split('.');
                const fieldValue = childKey ? property[parentKey][childKey] : property[parentKey];
                combinedPrompt += `${field.label}: ${fieldValue}\n`;
            }

            combinedPrompt += `
                Provide feedback and suggestions for improvements for each field. 
                Report if the city provided exists in the country provided.
                Also, check if the data is consistent and accurate. 10 words maximum.
                `;

            const suggestion = await fetchSuggestions(combinedPrompt);

            const descriptionSuggestion = await getDescriptionSuggestion(property);

            const combinedSuggestions = {
                property: suggestion,
                description: descriptionSuggestion,
            };

            dispatch({ type: 'SET_PROPERTY_SUGGESTION', payload: { propertyId: property.id, suggestion: combinedSuggestions } });
        }
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        dispatch(setServerError(error.message));
        dispatch({ type: 'GET_USER_PROPERTIES_FAILURE', payload: errorMessage });
    }
};

export const fetchSuggestions = async (prompt) => {
    try {
        const response = await axios.post(`${BASE_URL}/openai/suggestions`, { prompt: prompt });
        return response.data.suggestion;
    } catch (error) {
        console.error('Error fetching suggestions from server:', error);
        return '';
    }
};

export const getDescriptionSuggestion = async (propertyDetails) => {
    const prompt = `Create a descriptive summary of at least 150 words for the following property details: ${JSON.stringify(propertyDetails)}.`;

    try {
        const response = await fetchSuggestions(prompt);
        return response;
    } catch (error) {
        console.error("Error fetching description suggestion:", error);
        return null;
    }
};

export const updatePropertyDescription = (propertyId, description) => async (dispatch, getState) => {
    try {
        const { userId } = getState().auth;
        const response = await axios.put(`${BASE_URL}/users/${userId}/properties/${propertyId}/description`, { description });

        dispatch({ type: 'UPDATE_PROPERTY_DESCRIPTION_SUCCESS', payload: response.data });
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        dispatch({ type: 'UPDATE_PROPERTY_DESCRIPTION_FAILURE', payload: errorMessage });
    }
};




