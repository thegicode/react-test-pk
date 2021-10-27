
import reducer from './reducer.js';

import List from './List.js';
import Total from './Total.js';
import TotalVanila from './TotalVanila.js';
import TotalVanila2 from './TotalVanila2.js';
import TotalVanila3 from './TotalVanila3.js';
import TotalVanila4 from './TotalVanila4.js';
import applyDiff from './applyDiff.js';

var store = Redux.createStore(reducer);

var el = React.createElement;

var rootEl = document.querySelector('#app1');
var render1 = function render1() {
    return ReactDOM.render(el(List, store), rootEl);
};
render1();
// store.subscribe(render1)

var rootEl2 = document.querySelector('#app2');
var render2 = function render2() {
    ReactDOM.render(el(Total, store), rootEl2);
};
render2();
store.subscribe(render2);

var rootEl3 = document.querySelector('#app3');
var render3 = function render3() {
    window.requestAnimationFrame(function () {
        console.time('render3');
        rootEl3.innerHTML = TotalVanila(store);
        console.timeEnd('render3');
    });
};
render3();
store.subscribe(render3);
// 간편하다. 빠르거나 보통이거나

var rootEl4 = document.querySelector('#app4');
var render4 = function render4() {
    window.requestAnimationFrame(function () {
        console.time('render4');
        rootEl4.querySelector('[data-text="price"]').innerHTML = TotalVanila2(store);
        console.timeEnd('render4');
    });
};
render4();
store.subscribe(render4);
// 가장 빠름


var rootEl5 = document.querySelector('#app5');
var render5 = function render5() {
    window.requestAnimationFrame(function () {
        console.time('render5');
        var virtualApp = TotalVanila3(store, rootEl5);
        applyDiff(rootEl5, rootEl5, virtualApp);
        console.timeEnd('render5');
    });
};
render5();
store.subscribe(render5);
// 가장 느림


var rootEl6 = document.querySelector('#app6');
var render6 = function render6() {
    window.requestAnimationFrame(function () {
        console.time('render6');
        rootEl6.querySelector('div').replaceWith(TotalVanila4(store));
        console.timeEnd('render6');
    });
    // render3(all)와 비슷
};
render6();
store.subscribe(render6);