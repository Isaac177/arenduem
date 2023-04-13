const initialState = {
    property: null,
    error: null,
};

const propertyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROPERTY_SUCCESS':
            return { ...state, property: action.payload, error: null };
        case 'CREATE_PROPERTY_FAILURE':
            return { ...state, property: null, error: action.payload };
        default:
            return state;
    }
};

export default propertyReducer;
