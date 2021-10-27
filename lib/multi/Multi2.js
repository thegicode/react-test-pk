'use strict';

var Multi2 = function Multi2(props) {

    var handleShow = props.handleShow;
    var isShow = props.isShow();

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

export default Multi2;