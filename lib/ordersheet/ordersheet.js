
import reducer from './reducer.js';

import List from './List.js';
import Total from './Total.js';

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
store.subscribe(render1);

var rootEl2 = document.querySelector('#app2');
var render2 = function render2() {
  return ReactDOM.render(el(Total, store), rootEl2);
};
render2();
store.subscribe(render2);