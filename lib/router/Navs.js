var _ReactRouterDOM = ReactRouterDOM,
    Link = _ReactRouterDOM.Link;


function Navs(_ref) {
    var name = _ref.name;

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            "ul",
            { className: "navs" },
            React.createElement(
                "li",
                null,
                React.createElement(
                    Link,
                    { to: "/html/router/page1/" },
                    "Page1"
                )
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    Link,
                    { to: "/html/router/page2/" },
                    "Page2"
                )
            ),
            name && React.createElement(
                "li",
                null,
                "Props Name : ",
                name
            )
        )
    );
}

export default Navs;