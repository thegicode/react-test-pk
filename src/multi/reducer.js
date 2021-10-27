
const INITIAL_STATE = {
    isShow: false
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
