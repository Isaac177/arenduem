import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import galleryReducer from './galleryReducer';
import interestReducer from './interestReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    gallery: galleryReducer,
    interest: interestReducer,
});

export default rootReducer;
