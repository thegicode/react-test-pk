
const TotalVanila = (store) => {
    const getTempalte = 
        document
        .querySelector('[data-template="total"]')
        .content
        .firstElementChild
        .cloneNode(true)
    const newApp = document.createDocumentFragment()
    newApp.appendChild(getTempalte)
    const total = store.getState().total
    newApp.querySelector('[data-text="price"]').textContent = total;
    return newApp
}

export default TotalVanila