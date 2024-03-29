import {
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_FAILURE,
    UPDATE_USER_FIELD,
    UPDATE_IS_OWNER_SUCCESS,
    GET_HOUSING_STATUS_FAILURE,
    GET_HOUSING_STATUS_SUCCESS,
    FETCH_USER_INFO_SUCCESS,
    FETCH_USER_INFO_FAILURE,
    GET_ALL_USERS_SUCCESS,
 } from '../actions/userActions';

export const initialState = {
    userData: {
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        occupation: '',
        aboutMe: '',
        moveInDate: '',
        budget: '',
    },
    users: [],
    allUsers: [],
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_DATA_SUCCESS:
            return {
                ...state,
                userData: action.payload,
                error: null,
            };
        case FETCH_USER_DATA_FAILURE:
            return {
                ...state,
                userData: null,
                error: action.payload,
            };
        case UPDATE_USER_FIELD:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    [action.payload.name]: action.payload.value,
                },
            };
        case UPDATE_IS_OWNER_SUCCESS:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    isOwner: action.payload.isOwner,
                }
            }
        case GET_HOUSING_STATUS_SUCCESS:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    isOwner: action.payload.isOwner,
                    userId: action.payload.userId,
                },
            };
        case GET_HOUSING_STATUS_FAILURE:
            return {
                ...state,
                error: action.payload,
            };

        case FETCH_USER_INFO_SUCCESS:
            return {
                ...state,
                userInfo: action.payload,
            }

        case FETCH_USER_INFO_FAILURE:
            return {
                ...state,
                error: action.payload,
            }

        case GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                allUsers: action.payload,
            }

        case 'STORE_USER_ID':
            return {
                ...state,
                currentPropertyOwnerId: action.payload,
            };
        case 'STORE_PROPERTY_ID':
            return {
                ...state,
                currentPropertyId: action.payload,
            }
        default:
            return state;
    }
};


export default userReducer;
