import { UPDATE_IS_OWNER } from '../actions/roleAction';


const initialState = {
    isOwner: false,
}

const roleReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_IS_OWNER:
            return {
                ...state,
                items: state.users.map((user) =>
                    user.id === action.payload.id ? { ...user, isOwner: action.payload.isOwner } : user
                ),
            }
        default:
            return state;
    }
}