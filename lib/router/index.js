
import Chocolate from "./Chocolate.js";
import Chocolate2 from "./Chocolate2.js";

var _ReactRouterDOM = ReactRouterDOM,
    BrowserRouter = _ReactRouterDOM.BrowserRouter,
    Route = _ReactRouterDOM.Route,
    Switch = _ReactRouterDOM.Switch;


var App = function App() {
    return React.createElement(
        BrowserRouter,
        null,
        React.createElement(
            Switch,
            null,
            React.createElement(Route, { path: "/html/router/page1/", component: Chocolate }),
            React.createElement(Route, { path: "/html/router/page2/", component: Chocolate2 })
        )
    );
};

ReactDOM.render(React.createElement(App, null), document.querySelector('#chocolate'));