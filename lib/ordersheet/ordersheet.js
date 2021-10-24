
import reducer from './reducer.js';

import List from './List.js';
import Total from './Total.js';
import TotalVanila from './TotalVanila.js';

var store = Redux.createStore(reducer);

// const actions = {
//     getState: () => store.getState(),
//     updateAmount: (index, amount) => store.dispatch({type:'UPDATE_AMOUNT', index: index, amount: amount})
// }

var el = React.createElement;

var rootEl = document.querySelector('#app1');
var render1 = function render1() {
    return ReactDOM.render(el(List, store), rootEl);
};
render1();
// store.subscribe(render1)

var rootEl2 = document.querySelector('#app2');
var render2 = function render2() {
    return ReactDOM.render(el(Total, store), rootEl2);
};
render2();
store.subscribe(render2);

var rootEl3 = document.querySelector('#app3');
var render3 = function render3() {
    window.requestAnimationFrame(function () {
        rootEl3.innerHTML = TotalVanila(store);
    });
};
render3();
store.subscribe(render3);