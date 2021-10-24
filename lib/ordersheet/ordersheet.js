
import reducer from './reducer.js';

import List from './List.js';
import Total from './Total.js';

var store = Redux.createStore(reducer);
var props = {
    getState: function getState() {
        return store.getState();
    }
    // isShow : () => store.getState().isShow,
    // handleShow:  () => store.dispatch({type:'SET_ISSHOW'})
};

var el = React.createElement;

var rootEl = document.querySelector('#app1');
var render1 = function render1() {
    return ReactDOM.render(el(List, props), rootEl);
};
render1();
store.subscribe(render1);

var rootEl2 = document.querySelector('#app2');
var render2 = function render2() {
    return ReactDOM.render(el(Total, props), rootEl2);
};
render2();
store.subscribe(render2);