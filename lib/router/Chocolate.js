import Navs from './Navs.js';

function Chocolate() {

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'h3',
            null,
            'Chocolate1'
        ),
        React.createElement(Navs, null)
    );
}

export default Chocolate;