
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
var store = Redux.createStore(reducer)
function render() {
    console.log('state', store.getState())
}
render()
store.subscribe(render)

store.dispatch({ type: 'SET_ISSHOW' })


export default store
