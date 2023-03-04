import { SET_TOKEN_AND_ROLE } from '../actions/userActions';
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
        default:
            return state;
    }
};

export default authTokenReducer;
