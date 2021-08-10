'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var useState = React.useState;

function List() {
    var _useState = useState([1, 2, 3, 4, 5]),
        _useState2 = _slicedToArray(_useState, 2),
        data = _useState2[0],
        setData = _useState2[1];

    var handleClick = function handleClick() {
        setData([].concat(_toConsumableArray(data), [6, 7, 8, 9, 10]));
    };

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'ul',
            null,
            data.map(function (text, index) {
                return React.createElement(
                    'li',
                    { key: index },
                    text
                );
            })
        ),
        React.createElement(
            'button',
            { type: 'button', onClick: handleClick },
            'Clcik'
        )
    );
}

var el = React.createElement;
var domContainer = document.querySelector('#list');
ReactDOM.render(el(List), domContainer);