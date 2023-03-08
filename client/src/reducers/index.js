import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import galleryReducer from './galleryReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    gallery: galleryReducer,
});

export default rootReducer;
