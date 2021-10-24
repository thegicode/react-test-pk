
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
    ]
}
function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_ISSHOW':
            return {
                ...state,
                isShow: !state.isShow
            }
        default:
            return state
    }
}

export default reducer
