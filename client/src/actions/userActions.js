import axios from "axios";
import {initialState} from "../reducers/userReducer";

export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE';
export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const SET_USER_ID = 'SET_USER_ID';
export const SET_TOKEN_AND_ROLE = 'SET_TOKEN_AND_ROLE';
export const LOGOUT = 'LOGOUT';
export const UPDATE_IS_OWNER_SUCCESS = 'UPDATE_IS_OWNER_SUCCESS';
export const UPDATE_IS_OWNER_FAILURE = 'UPDATE_IS_OWNER_FAILURE';

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




const BASE_URL = 'http://localhost:8000';
export const fetchUserData = () => async (dispatch, getState) => {
    try {
        const { userId, token } = getState().auth;
        const response = await axios.get(`${BASE_URL}/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const userData = {
            ...initialState.userData,
            ...response.data,
        };

        dispatch({
            type: FETCH_USER_DATA_SUCCESS,
            payload: userData,
        });

        const { role } = response.data;
        dispatch(setTokenAndRole(token, role));
    } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 401) {
            dispatch({
                type: FETCH_USER_DATA_FAILURE,
                payload: error.response.data.message,
            });
        } else {
            dispatch({
                type: FETCH_USER_DATA_FAILURE,
                payload: error.message,
            });
        }
    }
};


export const updateUser = (userData) => async (dispatch, getState) => {
    try {
        const { userId } = getState().auth;
        await axios.put(`${BASE_URL}/users/${userId}`, userData);
        dispatch({
            type: UPDATE_USER_FIELD,
            payload: userData,
        });
    } catch (error) {
        console.error(error);
    }
};



export const updateIsOwner = (userId, isOwner) => async (dispatch) => {
    try {
        const response = await axios.put(`${BASE_URL}/users/${userId}`, { isOwner });

        dispatch({
            type: UPDATE_IS_OWNER_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        console.error(error);
        dispatch({
            type: UPDATE_IS_OWNER_FAILURE,
            payload: error.message,
        });
    }

};

