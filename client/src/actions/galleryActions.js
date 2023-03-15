import axios from "axios";

export const SET_IMAGES = 'SET_IMAGES';
export const SET_MODAL_OPEN = 'SET_MODAL_OPEN';
export const SET_FILE = 'SET_FILE';
export const SET_IS_MAIN = 'SET_IS_MAIN';
export const SET_IS_COVER = 'SET_IS_COVER';
export const SET_IS_FULL_SIZE = 'SET_IS_FULL_SIZE';

export const UPLOAD_PICTURE_REQUEST = 'UPLOAD_PICTURE_REQUEST';
export const UPLOAD_PICTURE_SUCCESS = 'UPLOAD_PICTURE_SUCCESS';
export const UPLOAD_PICTURE_FAILURE = 'UPLOAD_PICTURE_FAILURE';

export const GET_PICTURE_REQUEST = 'GET_PICTURE_REQUEST';
export const GET_PICTURE_SUCCESS = 'GET_PICTURE_SUCCESS';
export const GET_PICTURE_FAILURE = 'GET_PICTURE_FAILURE';
export const DELETE_PICTURE_REQUEST = 'DELETE_PICTURE_REQUEST';
export const DELETE_PICTURE_SUCCESS = 'DELETE_PICTURE_SUCCESS';
export const DELETE_PICTURE_FAILURE = 'DELETE_PICTURE_FAILURE';
export const SET_SELECTED_PICTURE = 'SET_SELECTED_PICTURE';
export const SET_SHOW_IMG_MODAL = 'SET_SHOW_IMG_MODAL';
export const SET_AS_MAIN_IMAGE = 'SET_AS_MAIN_IMAGE';
export const SET_AS_COVER_IMAGE = 'SET_AS_COVER_IMAGE';

export const MAX_FILE_SIZE = 10485760;

export const setImages = images => ({
    type: SET_IMAGES,
    payload: images
});

export const setModalOpen = isOpen => ({
    type: SET_MODAL_OPEN,
    payload: isOpen
});

export const setFile = file => ({
    type: SET_FILE,
    payload: file
});

export const setIsMain = isMain => ({
    type: SET_IS_MAIN,
    payload: isMain
});

export const setIsCover = isCover => ({
    type: SET_IS_COVER,
    payload: isCover
});

export const setIsFullSize = isFullSize => ({
    type: SET_IS_FULL_SIZE,
    payload: isFullSize
});

export const setSelectedPicture = id => ({
    type: SET_SELECTED_PICTURE,
    payload: id
});

export const setShowImgModal = showImgModal => ({
    type: SET_SHOW_IMG_MODAL,
    payload: showImgModal,
});

const BASE_URL = 'http://localhost:8000';
export const getPictureById = (id) => async (dispatch, getState) => {
    try {
        const { userId } = getState().auth;
        const { token } = getState().auth;
        const response = await axios.get(`${BASE_URL}/users/${userId}/pictures`, {
            headers: {
                Authorization: token
            },
        });
        dispatch({
            type: GET_PICTURE_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: GET_PICTURE_FAILURE,
            payload: error.message,
        });
    }
};


export const handleDeleteImage = (id) => async (dispatch, getState) => {
    try {
        const { userId } = getState().auth;
        const { token } = getState().auth;
        const response = await axios.delete(`${BASE_URL}/users/${userId}/pictures/${id}`, {
            headers: {
                Authorization: token
            },
        });
        dispatch({
            type: DELETE_PICTURE_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: DELETE_PICTURE_FAILURE,
            payload: error.message,
        });
    }
}


export const handleSetAsMainImage = (id) => async (dispatch, getState) => {
    try {
        const { userId } = getState().auth;
        const { token } = getState().auth;
        const response = await axios.put(
            `${BASE_URL}/users/${userId}/pictures/${id}`,
            { isMain: true, isCover: false },
            {
                headers: {
                    Authorization: token,
                },
            }
        );
        dispatch({
            type: SET_AS_MAIN_IMAGE,
            payload: response.data,
        });
    } catch (error) {
        console.log(error);
    }
};



export const handleSetAsCoverImage = (id) => async (dispatch, getState) => {
    try {
        const { userId } = getState().auth;
        const { token } = getState().auth;
        const response = await axios.put(`${BASE_URL}/users/${userId}/pictures/${id}`, {
            isMain: false,
            isCover: true,
            headers: {
                Authorization: token
            },
        });
        dispatch({
            type: SET_AS_COVER_IMAGE,
            payload: response.data,
        });
    } catch (error) {
        console.log(error);
    }
}





