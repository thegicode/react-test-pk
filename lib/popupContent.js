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