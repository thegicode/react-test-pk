
export var updateAmount = function updateAmount(index, amount) {
    return {
        type: 'UPDATE_AMOUNT',
        index: index,
        amount: amount
    };
};

export var getTotal = function getTotal() {
    return {
        type: 'GET_TOTAL'
    };
};