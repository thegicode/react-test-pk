
import reducer from './reducer.js'

import List from './List.js'
import Total from './Total.js'

const store = Redux.createStore(reducer)
const props = {
    getState: () => store.getState()
    // isShow : () => store.getState().isShow,
    // handleShow:  () => store.dispatch({type:'SET_ISSHOW'})
}


const el = React.createElement

const rootEl = document.querySelector('#app1')
const render1 = () => ReactDOM.render(el(List, props), rootEl)
render1()
store.subscribe(render1)

const rootEl2 = document.querySelector('#app2')
const render2 = () => ReactDOM.render(el(Total, props), rootEl2)
render2()
store.subscribe(render2)