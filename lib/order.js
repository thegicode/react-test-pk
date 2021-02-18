'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var useState = React.useState;
var el = React.createElement;

function Order() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isShowPopup = _useState2[0],
      setIsShowPopup = _useState2[1];

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  function openPopup() {
    history.pushState({ popup: 'order' }, "", "?popup=order");
    setIsShowPopup(true);
  }

  var closePopup = function closePopup(data) {
    window.history.back();
    setIsShowPopup(false);
    setData(data);
  };

  window.onpopstate = function (event) {
    if (location.search === '?popup=order') {
      setIsShowPopup(true);
      return;
    }
    setIsShowPopup(false);
  };

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'h2',
      null,
      'Order'
    ),
    Object.keys(data).length > 0 && React.createElement(
      'div',
      { className: 'order-data' },
      React.createElement(
        'p',
        null,
        data.addr
      ),
      React.createElement(
        'p',
        null,
        data.mobile
      )
    ),
    React.createElement(
      'button',
      { onClick: openPopup },
      'Show Popup'
    ),
    isShowPopup && React.createElement(PopupContent, { onCloseButtonClick: closePopup })
  );
}

function PopupContent(props) {

  var data = {
    addr: '서울시 강동구 고덕동',
    mobile: '010-124-6790'
  };

  function handleClick() {
    props.onCloseButtonClick(data);
  }

  return React.createElement(
    'div',
    { className: 'popupContent' },
    React.createElement(
      'button',
      { type: 'button', onClick: handleClick },
      'Popup Close & Pass data'
    )
  );
}

var domContainer = document.querySelector('#order');
ReactDOM.render(el(Order), domContainer);