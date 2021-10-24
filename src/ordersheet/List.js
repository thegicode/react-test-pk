import { updateAmount, getTotal } from './actions.js'

const { useState } = React

const Book = ({ book, dispatch, index }) => {
    const [amount, setAmount] = useState(book.amount)
    const handleChange = (e) => {
        const value = e.target.value
        setAmount(value)
        dispatch(updateAmount(index, value))
        dispatch(getTotal())
    }

    return( 
        <li className="order-item">
            <p className="name">{book.name}</p>
            <p>{book.price}원</p>
            <label className="amount">
                <span className="__text">수량</span>
                <input type="number" 
                    className="__input" 
                    value={amount}
                    onChange={handleChange} />
            </label>
        </li>
    )
}

const List = (store) => {
    const {getState, dispatch} = store
    const books = getState().books

    return(
        <ul className="orders">
            { books && books.length > 0 &&
                books.map( (book, index) => 
                    <Book 
                        key={index}
                        book={book} 
                        dispatch={dispatch} 
                        index={index}  />
                )
            }
        </ul>
    )
}

export default List
