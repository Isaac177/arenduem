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
export const GET_HOUSING_STATUS_SUCCESS = 'GET_HOUSING_STATUS_SUCCESS';
export const GET_HOUSING_STATUS_FAILURE = 'GET_HOUSING_STATUS_FAILURE';
export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS';
export const FETCH_USER_INFO_FAILURE = 'FETCH_USER_INFO_FAILURE';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_FAILURE = 'GET_ALL_USERS_FAILURE';

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




const BASE_URL = 'http://localhost:8000/users';
export const fetchUserData = () => async (dispatch, getState) => {
    try {
        const { userId, token } = getState().auth;
        const response = await axios.get(`${BASE_URL}/${userId}`, {
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
        await axios.put(`${BASE_URL}/${userId}`, userData);
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
        const response = await axios.put(`${BASE_URL}/role/${userId}`, { isOwner });
        console.log(isOwner);
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

export const getHousingStatus = () => async (dispatch, getState) => {
    const { userId } = getState().auth;
    try {
        const response = await axios.get(`${BASE_URL}/housing-status/${userId}`);
        dispatch({
            type: GET_HOUSING_STATUS_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        console.error(error);
        dispatch({
            type: GET_HOUSING_STATUS_FAILURE,
            payload: error.message,
        });
    }
};

export const fetchUserInfoById = (userId) => async (dispatch, getState) => {
    try {
        const { token } = getState().auth;
        const response = await axios.get(`${BASE_URL}/${userId}/info`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log('userInfo', response.data);
        dispatch({
            type: FETCH_USER_INFO_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 401) {
            dispatch({
                type: FETCH_USER_INFO_FAILURE,
                payload: error.response.data.message,
            });
        } else {
            dispatch({
                type: FETCH_USER_INFO_FAILURE,
                payload: error.message,
            });
        }
    }
};

export const getAllUsers = () => async (dispatch) => {
    try {
        const response = await axios.get(`${BASE_URL}`);

        console.log('allUsers', response.data);
        dispatch({
            type: GET_ALL_USERS_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 401) {
            dispatch({
                type: GET_ALL_USERS_FAILURE,
                payload: error.response.data.message,
            });
        } else {
            dispatch({
                type: GET_ALL_USERS_FAILURE,
                payload: error.message,
            });
        }
    }
}



