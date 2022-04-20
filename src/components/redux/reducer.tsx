const initialState = { value: '' };

const accountReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "search":
            return { ...state, value: action.payload };
        default:
            return state;
    }
}

export type RootState = ReturnType<typeof accountReducer>;
export default accountReducer