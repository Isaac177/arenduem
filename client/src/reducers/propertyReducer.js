const initialState = {
    property: null,
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

        default:
            return state;
    }
};

export default propertyReducer;
