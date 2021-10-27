'use strict';

import reducer from './reducer.js';

import Multi1 from './multi1.js';
import Multi2 from './multi2.js';

var el = React.createElement;

var store = Redux.createStore(reducer);

var props = {
    isShow: function isShow() {
        return store.getState().isShow;
    },
    handleShow: function handleShow() {
        return store.dispatch({ type: 'SET_ISSHOW' });
    }
};

var rootEl = document.querySelector('#app1');
var render1 = function render1() {
    return ReactDOM.render(el(Multi1, props), rootEl);
};
render1();
store.subscribe(render1);

var rootEl2 = document.querySelector('#app2');
var render2 = function render2() {
    return ReactDOM.render(el(Multi2, props), rootEl2);
};
render2();
store.subscribe(render2);