
var TotalVanila = function TotalVanila(store) {
    var total = store.getState().total;
    return "<div class=\"total\">\n            <h4>\uD569\uACC4(Vanila JS)</h4>\n            <p class=\"price\">" + total + "\uC6D0</p>\n        </div>";
};

export default TotalVanila;