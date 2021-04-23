const toggleStateReducer = (state = 0, action) => {
    switch(action.type) {
        case 'TOGGLE_SHOW':
            return 1;
        case 'TOGGLE_CLOSE':
            return 0;
        default:
        return state;
    }
}
export default toggleStateReducer;
