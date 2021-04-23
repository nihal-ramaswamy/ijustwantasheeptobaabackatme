const sheepStateReducer = (state = 0, action) => {
    switch(action.type) {
        case 'OPEN_MOUTH':
            return 1;
        case 'CLOSE_MOUTH':
            return 0;
        default:
        return state;
    }
}
export default sheepStateReducer;
