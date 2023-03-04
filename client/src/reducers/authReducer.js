import {FETCH_USER_DATA_SUCCESS, LOGOUT, SET_TOKEN_AND_ROLE} from "../actions/userActions";

const initialState = {
    token: null,
    role: null,
    user: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN_AND_ROLE:
            return {
                ...state,
                token: action.payload.token,
                role: action.payload.role
            };
        case FETCH_USER_DATA_SUCCESS:
            return {
                ...state,
                user: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                token: null,
                role: null,
                user: null
            };
        default:
            return state;
    }
};

export default authReducer;
