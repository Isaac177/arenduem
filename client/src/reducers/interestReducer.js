const initialState = {
    selectedInterests: [],
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
                    (interest) => interest.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default interestReducer;
