import {SET_LOCATION_DATA, SET_PROPERTY_TYPE} from "../actions/propertyActions";

const initialState = {
    propertyType: '',
    locationData: {
        city: '',
        country: '',
        street: '',
        floor: 0,
        apartmentNumber: 0,
    },
}

const ownerFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROPERTY_TYPE:
            console.log('propertyType', action.payload.value)
            return {
                ...state,
                [action.payload.fieldName]: action.payload.value,
            };

        case SET_LOCATION_DATA:
            return {
                ...state,
                locationData: action.payload,
            }
        default:
            return state;
    }
};

export default ownerFormReducer;