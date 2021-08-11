var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var useState = React.useState;
var useEffect = React.useEffect;

var css = {
    width: '80%',
    margin: '2rem auto'
};
var buttonCss = {
    margin: '5px'
};

var data = 0;

function Count(props) {
    var _useState = useState(0),
        _useState2 = _slicedToArray(_useState, 2),
        count = _useState2[0],
        setCount = _useState2[1];

    useEffect(function () {
        console.log('-------------------');
        console.log('[useEffect] let', data);
        console.log('[useEffect] state', count);
    });

    var handleClick = function handleClick() {
        data += 1;
        setCount(count + 1);

        console.log('-------------------');
        console.log('[click] let', data);
        console.log('[click] state', count);
    };

    var others = function others() {
        console.log('-------------------');
        console.log('[others] let', data);
        console.log('[others] state', count);
    };

    return React.createElement(
        'div',
        { style: css },
        React.createElement(
            'p',
            null,
            '[\uBCC0\uC218] : ',
            data
        ),
        React.createElement(
            'p',
            null,
            '[State] : ',
            count
        ),
        React.createElement(
            'button',
            { style: buttonCss, onClick: handleClick },
            'click'
        ),
        React.createElement(
            'button',
            { style: buttonCss, onClick: others },
            'others(only log)'
        )
    );
}

var el = React.createElement;
var domContainer = document.querySelector('#root');
ReactDOM.render(el(Count), domContainer);