
const TotalVanila2 = (store) => {
    const total = store.getState().total
    return(
        `${total}원`
    )
}

export default TotalVanila2