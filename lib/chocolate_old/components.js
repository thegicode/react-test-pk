
var A = function A() {
    return React.createElement(
        "div",
        { className: "cpnt cpnt-a" },
        "A Component - \uACE0\uC815"
    );
};

var B = function B() {
    return React.createElement(
        "div",
        { className: "cpnt" },
        "B Component"
    );
};

var C = function C() {
    return React.createElement(
        "div",
        { className: "cpnt" },
        "C Component"
    );
};

var D = function D() {
    return React.createElement(
        "div",
        { className: "cpnt type-b" },
        "D Component"
    );
};

var E = function E() {
    return React.createElement(
        "div",
        { className: "cpnt type-b" },
        "E Component"
    );
};

export { A, B, C, D, E };