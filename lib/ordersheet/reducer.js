
var INITIAL_STATE = {
    books: [{
        name: '나의 문화유산 답사기',
        price: 10000,
        amount: 0
    }, {
        name: '자유론',
        price: 10000,
        amount: 0
    }],
    total: 0

};

var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments[1];

    switch (action.type) {
        case 'UPDATE_AMOUNT':
            var index = action.index,
                amount = action.amount;

            state.books[index].amount = amount;
            return state;
        case 'GET_TOTAL':
            var sum = 0;
            state.books.map(function (book) {
                sum += book.price * book.amount;
            });
            state.total = sum;
            return state;
        default:
            return state;
    }
};

export default reducer;