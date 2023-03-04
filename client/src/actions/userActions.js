import axios from "axios";

export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE';
export const UPDATE_USER_DATA_SUCCESS = 'UPDATE_USER_DATA_SUCCESS';
export const SET_USER_ID = 'SET_USER_ID';
export const SET_TOKEN_AND_ROLE = 'SET_TOKEN_AND_ROLE';
export const LOGOUT = 'LOGOUT';

export const fetchUserData = () => async (dispatch, getState) => {
    try {
        const { userId } = getState().auth;
        const response = await axios.get(`/users/${userId}`);
        dispatch({
            type: FETCH_USER_DATA_SUCCESS,
            payload: response.data,
        });
        const { token, role } = response.data;
        dispatch(setTokenAndRole(token, role));
    } catch (error) {
        dispatch({
            type: FETCH_USER_DATA_FAILURE,
            payload: error.message,
        });
    }
};


export const updateUser = (userData) => async (dispatch, getState) => {
    try {
        const { userId } = getState().auth;
        await axios.put(`/users/${userId}`, userData);
        dispatch({
            type: UPDATE_USER_DATA_SUCCESS,
            payload: userData,
        });
    } catch (error) {
        console.error(error);
    }
};

export const setUserId = (userId) => ({
    type: SET_USER_ID,
    payload: userId,
});


export const setTokenAndRole = (token, role) => ({
    type: SET_TOKEN_AND_ROLE,
    payload: { token, role }
});


export const logout = () => ({
    type: LOGOUT,
});
