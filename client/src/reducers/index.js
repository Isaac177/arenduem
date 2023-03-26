import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import galleryReducer from './galleryReducer';
import interestReducer from './interestReducer';
import ownerFormReducer from "./ownerFormReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    gallery: galleryReducer,
    interest: interestReducer,
    owner: ownerFormReducer,
});

export default rootReducer;
