
const Total = (store) => {
    const total = store.getState().total
    return(
        <div className="total">
            <h4>합계</h4>
            <p className="price">{total}</p>
        </div>
    )
}

export default Total