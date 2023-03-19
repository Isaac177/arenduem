const initialState = {
    selectedInterests: [],
    loading: false,
};

const interestReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_INTEREST":
            return {
                ...state,
                selectedInterests: [
                    ...state.selectedInterests,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                    },
                ],
            };
        case "REMOVE_INTEREST":
            return {
                ...state,
                selectedInterests: state.selectedInterests.filter(
                    (interest) => interest.id !== action.payload.id
                ),
            };
        case "GET_INTERESTS_START":
            return {
                ...state,
                loading: true,
            };
        case "GET_INTERESTS_SUCCESS":
            return {
                ...state,
                selectedInterests: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default interestReducer;
