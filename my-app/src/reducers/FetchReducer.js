const fetchReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
            return {
                ...state,
                isLoading: true,
                error: false
            };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                error: false,
                data: action.payload
            };
        case 'FETCH_FAILURE':
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        default:
            throw new Error();
    }
};

export default fetchReducer;