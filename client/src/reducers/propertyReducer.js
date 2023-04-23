const initialState = {
    property: null,
    error: null,
    successMessage: '',
    errorMessage: '',
    isPropertyLoading: false,
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
        default:
            return state;
    }
};

export default propertyReducer;
