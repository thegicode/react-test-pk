
export const updateAmount = (index, amount) => ({
    type: 'UPDATE_AMOUNT',
    index,
    amount
})

export const getTotal = () => ({
    type: 'GET_TOTAL'
})