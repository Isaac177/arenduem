import {
    SET_IMAGES,
    SET_MODAL_OPEN,
    SET_FILE,
    SET_IS_MAIN,
    SET_IS_COVER,
    SET_IS_FULL_SIZE,
    UPLOAD_PICTURE_REQUEST,
    UPLOAD_PICTURE_SUCCESS,
    UPLOAD_PICTURE_FAILURE,
    GET_PICTURE_REQUEST,
    GET_PICTURE_SUCCESS, GET_PICTURE_FAILURE, MAX_FILE_SIZE, SET_SELECTED_PICTURE,

} from '../actions/galleryActions';

const initialState = {
    images: [],
    isModalOpen: false,
    file: null,
    isMain: false,
    isCover: false,
    isFullSize: false,
    isPostingPicture: false,
    postPictureError: null,
    isGettingPicture: false,
    getPictureError: null,
    currentPicture: null,
    MAX_FILE_SIZE: MAX_FILE_SIZE
};

export default function galleryReducer(state = initialState, action) {
    switch (action.type) {
        case SET_IMAGES:
            return { ...state, images: action.payload };

        case SET_MODAL_OPEN:
            return { ...state, isModalOpen: action.payload };

        case SET_FILE:
            return { ...state, file: action.payload };

        case SET_IS_MAIN:
            return { ...state, isMain: action.payload };

        case SET_IS_COVER:
            return { ...state, isCover: action.payload };

        case SET_IS_FULL_SIZE:
            return { ...state, isFullSize: action.payload };

        case UPLOAD_PICTURE_REQUEST:
            return { ...state, isPostingPicture: true, postPictureError: null };

        case UPLOAD_PICTURE_SUCCESS:
            return { ...state, isPostingPicture: false, images: [...state.images, action.payload] };

        case UPLOAD_PICTURE_FAILURE:
            return { ...state, isPostingPicture: false, postPictureError: action.payload };

        case GET_PICTURE_REQUEST:
            return { ...state, isGettingPicture: true, getPictureError: null };

        case GET_PICTURE_SUCCESS:
            return { ...state, images: action.payload };

        case GET_PICTURE_FAILURE:
            return { ...state, isGettingPicture: false, getPictureError: action.payload };

        case SET_SELECTED_PICTURE:
            return { ...state, currentPicture: action.payload };

        default:
            return state;
    }
}