
import { FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_FAILURE } from '../actions/userActions';

const initialState = {
    userData: null,
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
        default:
            return state;
    }
};

export default userReducer;
