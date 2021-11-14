
import Chocolate from "./chocolate.js";

var _ReactRouterDOM = ReactRouterDOM,
    BrowserRouter = _ReactRouterDOM.BrowserRouter,
    Route = _ReactRouterDOM.Route;


var App = function App() {
    return React.createElement(
        BrowserRouter,
        null,
        React.createElement(Route, { path: "/html/chocolate/page1/", component: Chocolate }),
        React.createElement(Route, { path: "/html/chocolate/page2/", component: Chocolate })
    );
};

ReactDOM.render(React.createElement(App, null), document.querySelector('#chocolate'));