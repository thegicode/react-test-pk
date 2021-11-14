var _ReactRouterDOM = ReactRouterDOM,
    Link = _ReactRouterDOM.Link;


function Chocolate() {

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            "h3",
            null,
            "Chocolate2 JS"
        ),
        React.createElement(
            "ul",
            { className: "navs" },
            React.createElement(
                "li",
                null,
                React.createElement(
                    Link,
                    { to: "/html/chocolate/page1/" },
                    "Page1"
                )
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    Link,
                    { to: "/html/chocolate/page2/" },
                    "Page2"
                )
            )
        ),
        React.createElement(
            "div",
            { className: "items" },
            React.createElement(
                "div",
                null,
                "In Chocolate js : Only Show Page2"
            )
        )
    );
}

export default Chocolate;