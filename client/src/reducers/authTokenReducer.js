import {LOGOUT, SET_TOKEN_AND_ROLE} from '../actions/userActions';
const initialState = {
    token: null,
    role: null
};

const authTokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN_AND_ROLE:
            return {
                ...state,
                token: action.payload.token,
                role: action.payload.role
            };
        case LOGOUT:
            return {
                ...state,
                token: null,
                role: null,
            };
        default:
            return state;
    }
};

export default authTokenReducer;
