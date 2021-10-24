'use strict';
import reducer from './reducer.js'

import Multi1 from './multi1.js'
import Multi2 from './multi2.js'

const el = React.createElement

const store = Redux.createStore(reducer)

const props = {
    isShow : () => store.getState().isShow,
    handleShow:  () => store.dispatch({type:'SET_ISSHOW'})
}

const rootEl = document.querySelector('#app1')
const render1 = () => ReactDOM.render(el(Multi1, props), rootEl)
render1()
store.subscribe(render1)

const rootEl2 = document.querySelector('#app2')
const render2 = () => ReactDOM.render(el(Multi2, props), rootEl2)
render2()
store.subscribe(render2)