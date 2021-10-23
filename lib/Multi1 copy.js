'use strict';

var _React = React,
    createElement = _React.createElement;

// const useState = React.useState;

function Multi() {

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'h2',
            null,
            'Multi'
        )
    );
}

var domContainer = document.querySelector('#app1');
ReactDOM.render(createElement(Multi), domContainer);