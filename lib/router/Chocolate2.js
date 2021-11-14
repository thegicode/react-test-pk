import Navs from './Navs.js';

function Chocolate() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'h3',
            null,
            'Chocolate2'
        ),
        React.createElement(Navs, { name: 'abc' }),
        React.createElement(
            'div',
            { className: 'items' },
            React.createElement(
                'div',
                null,
                'Chocolate2 contents'
            )
        )
    );
}

export default Chocolate;