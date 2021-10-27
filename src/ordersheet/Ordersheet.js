
import reducer from './reducer.js'

import List from './List.js'
import Total from './Total.js'
import TotalVanila from './TotalVanila.js'
import TotalVanila2 from './TotalVanila2.js'
import TotalVanila3 from './TotalVanila3.js'
import TotalVanila4 from './TotalVanila4.js'
import applyDiff from './applyDiff.js'

const store = Redux.createStore(reducer)

const el = React.createElement

const rootEl = document.querySelector('#app1')
const render1 = () => ReactDOM.render(el(List, store), rootEl)
render1()
// store.subscribe(render1)

const rootEl2 = document.querySelector('#app2')
const render2 = () => {
    ReactDOM.render(el(Total, store), rootEl2)
}
render2()
store.subscribe(render2)


const rootEl3 = document.querySelector('#app3')
const render3 = () => {
    window.requestAnimationFrame( () => {
        console.time('render3')
        rootEl3.innerHTML = TotalVanila(store)
        console.timeEnd('render3')
    })
}
render3()
store.subscribe(render3)
// 간편하다. 빠르거나 보통이거나

const rootEl4 = document.querySelector('#app4')
const render4 = () => {
    window.requestAnimationFrame( () => {
        console.time('render4')
        rootEl4
        .querySelector('[data-text="price"]')
        .innerHTML = TotalVanila2(store)
        console.timeEnd('render4')
    })
}
render4()
store.subscribe(render4)
// 가장 빠름


const rootEl5 = document.querySelector('#app5')
const render5 = () => {
    window.requestAnimationFrame( () => {
        console.time('render5')
        const virtualApp = TotalVanila3(store, rootEl5)
        applyDiff(rootEl5, rootEl5,virtualApp )
        console.timeEnd('render5')
    })
}
render5()
store.subscribe(render5)
// 가장 느림


const rootEl6 = document.querySelector('#app6')
const render6 = () => {
    window.requestAnimationFrame( () => {
        console.time('render6')
        rootEl6.querySelector('div').replaceWith(TotalVanila4(store))
        console.timeEnd('render6')
    })
    // render3(all)와 비슷
}
render6()
store.subscribe(render6)