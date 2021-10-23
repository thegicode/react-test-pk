'use strict';

import store from './reducer.js';

import Multi1 from './multi1.js';
import Multi2 from './multi2.js';

var _React = React,
    createElement = _React.createElement;


var domContainer = document.querySelector('#app1');
var render1 = ReactDOM.render(createElement(Multi1), domContainer);

var domContainer2 = document.querySelector('#app2');
ReactDOM.render(createElement(Multi2), domContainer2);