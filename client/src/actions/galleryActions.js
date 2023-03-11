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

const BASE_URL = 'http://localhost:8000';
export const getPictureById = (userId, pictureId) => async (dispatch) => {
    dispatch({ type: GET_PICTURE_REQUEST });
    try {
        const { data } = await axios.get(`${BASE_URL}/users/${userId}/pictures`);
        dispatch({ type: GET_PICTURE_SUCCESS, payload: data });
    } catch (error) {
        console.error(error);
        dispatch({ type: GET_PICTURE_FAILURE, payload: error.message });
    }
};




