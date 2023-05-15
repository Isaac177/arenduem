import {UPDATE_PROPERTY} from "../actions/propertyActions";

const initialState = {
    property: null,
    properties: [],
    error: null,
    successMessage: '',
    errorMessage: '',
    isPropertyLoading: false,
    propertySuggestions: [],
 };

const propertyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROPERTY_SUCCESS':
            return {
                ...state,
                property: action.payload,
                error: null,
                successMessage: 'Property created successfully',
            };
        case 'CREATE_PROPERTY_FAILURE':
            return {
                ...state,
                property: null,
                error: action.payload,
                errorMessage: 'Failed to create property',
            };
        case 'CLEAR_MESSAGES':
            return {
                ...state,
                successMessage: '',
                errorMessage: '',
            };

        case 'GET_PROPERTIES_SUCCESS':
            return {
                ...state,
                property: action.payload,
                error: null,
                isPropertyLoading: false,
            }
        case 'GET_PROPERTIES_FAILURE':
            return {
                ...state,
                property: null,
                error: action.payload,
                isPropertyLoading: false,
            }
        case 'GET_USER_PROPERTIES_SUCCESS':
            return { ...state, properties: action.payload };
        case 'GET_USER_PROPERTIES_FAILURE':
            return { ...state, error: action.payload };

        case 'SET_PROPERTY_SUGGESTION':
            console.log('Updating state with suggestion:', action.payload);
            return {
                ...state,
                propertySuggestions: {
                    ...state.propertySuggestions,
                    [action.payload.key]: action.payload.suggestion,
                }
            };

        case 'SET_DESCRIPTION_SUGGESTION':
            return { ...state, descriptionSuggestion: action.payload };
        case 'CLEAR_SUGGESTIONS':
            return { ...state, propertySuggestions: [], descriptionSuggestion: [] };

        case 'PROPERTY_DETAILS_REQUEST':
            return { loading: true, ...state };
        case 'PROPERTY_DETAILS_SUCCESS':
            return { loading: false, property: action.payload };
        case 'PROPERTY_DETAILS_FAIL':
            return { loading: false, error: action.payload };

        case UPDATE_PROPERTY: {
            console.log("Updated property payload:", JSON.stringify(action.payload));
            const updatedProperty = action.payload.property;
            const updatedProperties = state.properties.map((property) =>
                property.id === updatedProperty.id ? updatedProperty : property
            );

            return {
                ...state,
                properties: updatedProperties,
            };
        }

        default:
            return state;
    }
};

export default propertyReducer;
