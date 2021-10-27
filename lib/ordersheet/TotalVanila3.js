
var TotalVanila = function TotalVanila(store, app) {
    var getTempalte = document.querySelector('[data-template="total"]').content.firstElementChild.cloneNode(true);
    var newApp = app.cloneNode(true);
    newApp.innerHTML = '';
    newApp.appendChild(getTempalte);
    var total = store.getState().total;
    newApp.querySelector('[data-text="price"]').textContent = total;
    return newApp;
};

export default TotalVanila;