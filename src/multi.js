'use strict';
import store from './reducer.js'

import Multi1 from './multi1.js'
import Multi2 from './multi2.js'

const { createElement } = React

const domContainer = document.querySelector('#app1');
const render1 = ReactDOM.render(createElement(Multi1), domContainer);


const domContainer2 = document.querySelector('#app2');
ReactDOM.render(createElement(Multi2), domContainer2);