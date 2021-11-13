var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { A, B, C, D, E } from './components.js';

var _React = React,
    useState = _React.useState,
    useEffect = _React.useEffect;


function Chocolate() {
    var _useState = useState(true),
        _useState2 = _slicedToArray(_useState, 2),
        isTypeA = _useState2[0],
        chaneType = _useState2[1];

    useEffect(function () {
        hanleType();
    });

    function hanleType() {
        var hash = location.hash;
        var isA = hash === '#a' || hash === '' ? true : false;
        chaneType(isA);
    }

    window.addEventListener('hashchange', function () {
        hanleType();
    });

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Chocolate'
        ),
        React.createElement(A, null),
        isTypeA === true ? React.createElement(
            React.Fragment,
            null,
            React.createElement(B, null),
            React.createElement(C, null)
        ) : React.createElement(
            React.Fragment,
            null,
            React.createElement(D, null),
            React.createElement(E, null)
        )
    );
}

var el = React.createElement;
var domContainer = document.querySelector('#chocolate');
ReactDOM.render(el(Chocolate), domContainer);