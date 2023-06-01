import axios from "axios";

export const ADD_INTEREST = "ADD_INTEREST";
export const REMOVE_INTEREST = "REMOVE_INTEREST";
export const GET_INTERESTS_START = "GET_INTERESTS_START";
export const GET_INTERESTS_SUCCESS = "GET_INTERESTS_SUCCESS";

const BASE_URL = "http://localhost:8000";
export const addInterest = (interest) => async (dispatch, getState) => {
    try {
        const userId = getState().auth.user.id;
        const token = getState().auth.token;
        const config = {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            },
        };
        const body = {
            name: interest.name,
            id: interest.id,
        };

        console.log("req.body", body)
        const res = await axios.post(`${BASE_URL}/users/${userId}/interests`, body, config);
        dispatch({
            type: ADD_INTEREST,
            payload: res.data,
        });

        console.log("res.data", res.data)
    } catch (err) {
        console.error(err);
    }
};

export const getInterests = () => async (dispatch, getState) => {
    try {
        dispatch({ type: "GET_INTERESTS_START" });

        const userId = getState().auth.user.id;
        const token = getState().auth.token;
        const config = {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            },
        };

        const res = await axios.get(`${BASE_URL}/users/${userId}/interests`, config);
        dispatch({
            type: "GET_INTERESTS_SUCCESS",
            payload: res.data,
        });

        console.log("res.data", res.data);
    } catch (err) {
        console.error(err);
    }
};



export const removeInterest = (id, interest) => async (dispatch, getState) => {
    try {
        const userId = getState().auth.user.id;
        const token = getState().auth.token;

        console.log("req.body::", id, interest);
        await axios.delete(`${BASE_URL}/users/${userId}/interests/${id}`,  {
            params: { // Change this line to params
                id,
                interest: interest,
            },
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            },
        });
        dispatch({
            type: REMOVE_INTEREST,
            payload: { id },
        });
    } catch (err) {
        console.error(err);
    }
};






