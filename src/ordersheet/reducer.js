
const INITIAL_STATE = {
    books: [
        {
            name: '나의 문화유산 답사기',
            price: 10000,
            amount: 0
        },
        {
            name: '자유론',
            price: 10000,
            amount: 0
        }
    ],
    total: 0

}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_AMOUNT':
            const {index, amount} = action
            state.books[index].amount = amount
            return state
        case 'GET_TOTAL':
            let sum = 0
            state.books.map ( book => {
                sum += book.price * book.amount
            })
            state.total = sum
            return state
        default:
            return state
    }
}

export default reducer
