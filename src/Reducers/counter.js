const initialState = {
    counter: 0
};

export default (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'REMOVE':
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}