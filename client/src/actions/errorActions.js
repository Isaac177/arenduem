export const SET_SERVER_ERROR = 'SET_SERVER_ERROR';

export const setServerError = (errorMessage) => ({
    type: SET_SERVER_ERROR,
    payload: errorMessage,
});