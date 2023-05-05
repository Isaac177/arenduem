import { SET_SERVER_ERROR } from '../actions/errorActions';

const initialState = {
    errorMessage: null,
};

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SERVER_ERROR:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

export default errorReducer;