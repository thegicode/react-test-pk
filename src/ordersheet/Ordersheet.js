
import reducer from './reducer.js'

import List from './List.js'
import Total from './Total.js'
import TotalVanila from './TotalVanila.js'

const store = Redux.createStore(reducer)

// const actions = {
//     getState: () => store.getState(),
//     updateAmount: (index, amount) => store.dispatch({type:'UPDATE_AMOUNT', index: index, amount: amount})
// }

const el = React.createElement

const rootEl = document.querySelector('#app1')
const render1 = () => ReactDOM.render(el(List, store), rootEl)
render1()
store.subscribe(render1)

const rootEl2 = document.querySelector('#app2')
const render2 = () => ReactDOM.render(el(Total, store), rootEl2)
render2()
store.subscribe(render2)

const rootEl3 = document.querySelector('#app3')
const render3 = () => {
    window.requestAnimationFrame( () => {
        rootEl3.innerHTML = TotalVanila(store)
    })
}
render3()
store.subscribe(render3)

