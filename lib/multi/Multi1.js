'use strict';

var Multi1 = function Multi1(props) {

    var handleShow = props.handleShow;
    var isShow = props.isShow();

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'h2',
            null,
            'Multi1'
        ),
        React.createElement(
            'button',
            { onClick: handleShow },
            'Click'
        ),
        isShow && React.createElement(
            'div',
            null,
            'Multi component test'
        )
    );
};

export default Multi1;