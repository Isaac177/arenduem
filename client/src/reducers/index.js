import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import galleryReducer from './galleryReducer';
import interestReducer from './interestReducer';
import propertyReducer from "./propertyReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    gallery: galleryReducer,
    interest: interestReducer,
    property: propertyReducer,
    error: errorReducer,
});

export default rootReducer;
