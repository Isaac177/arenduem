import axios from "axios";

export const ADD_INTEREST = "ADD_INTEREST";
export const REMOVE_INTEREST = "REMOVE_INTEREST";

const BASE_URL = "http://localhost:8000";
export const addInterest = (interest) => async (dispatch, getState) => {
    try {
        const userId = getState().auth.user.id;
        const token = getState().auth.token;
        const config = {
            headers: {
                Authorization: token,
            },
        };
        const body = {
            interest: interest.name,
        };
        const res = await axios.post(`${BASE_URL}/users/${userId}/interests`, body, config);
        dispatch({
            type: ADD_INTEREST,
            payload: { id: res.data.id, name: interest.name },
        });
    } catch (err) {
        console.error(err);
    }
};


export const removeInterest = (id) => async (dispatch, getState) => {
    try {
        const userId = getState().auth.user.id;
        const token = getState().auth.token;
        const config = {
            headers: {
                Authorization: token,
            },
        };
        const res = await axios.delete(`${BASE_URL}/users/${userId}/interests/${id}`, config);
        dispatch({
            type: REMOVE_INTEREST,
            payload: { id },
        });
    } catch (err) {
        console.error(err);
    }
};



