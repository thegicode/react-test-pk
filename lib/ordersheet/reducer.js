
var INITIAL_STATE = {
    books: [{
        name: '나의 문화유산 답사기',
        price: 10000,
        amount: 0
    }, {
        name: '자유론',
        price: 10000,
        amount: 0
    }]
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