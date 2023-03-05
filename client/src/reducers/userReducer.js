import { FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_FAILURE, UPDATE_USER_FIELD } from '../actions/userActions';

export const initialState = {
    userData: {
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        occupation: '',
        aboutMe: '',
        moveInDate: '',
        budget: '',
    },
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_DATA_SUCCESS:
            return {
                ...state,
                userData: action.payload,
                error: null,
            };
        case FETCH_USER_DATA_FAILURE:
            return {
                ...state,
                userData: null,
                error: action.payload,
            };
        case UPDATE_USER_FIELD:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    [action.payload.name]: action.payload.value,
                },
            };
        default:
            return state;
    }
};


export default userReducer;
