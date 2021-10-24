
const TotalVanila = (store) => {
    const total = store.getState().total
    return(
        `<div class="total">
            <h4>합계(Vanila JS)</h4>
            <p class="price">${total}원</p>
        </div>`
    )
}

export default TotalVanila