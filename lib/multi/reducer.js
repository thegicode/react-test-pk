
var INITIAL_STATE = {
    isShow: false
};
function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments[1];

    switch (action.type) {
        case 'SET_ISSHOW':
            return Object.assign({}, state, {
                isShow: !state.isShow
            });
        default:
            return state;
    }
}

export default reducer;