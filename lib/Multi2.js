'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import store from './reducer.js';

var _React = React,
    useState = _React.useState;


var Multi2 = function Multi2() {
    var _useState = useState(store.getState().isShow),
        _useState2 = _slicedToArray(_useState, 2),
        isShow = _useState2[0],
        setIsShow = _useState2[1];

    var handleClick = function handleClick() {
        store.dispatch({ type: 'SET_ISSHOW' });
        setIsShow(store.getState().isShow);
    };

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'h2',
            null,
            'Multi2'
        ),
        React.createElement(
            'button',
            { onClick: handleClick },
            'Click'
        ),
        isShow && React.createElement(
            'div',
            null,
            'Multi component test'
        )
    );
};

export default Multi2;