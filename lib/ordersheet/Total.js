
var Total = function Total(store) {
    var total = store.getState().total;
    return React.createElement(
        "div",
        { className: "total" },
        React.createElement(
            "h4",
            null,
            "\uD569\uACC4"
        ),
        React.createElement(
            "p",
            { className: "price" },
            total,
            "\uC6D0"
        )
    );
};

export default Total;