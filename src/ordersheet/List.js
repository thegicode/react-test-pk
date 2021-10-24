const { useState } = React

const Book = ({book}) => {
    const [amount, setAmount] = useState(book.amount)
    const handleChange = (e) => {
        setAmount(e.target.value)
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

const List = (props) => {
    const books = props.getState().books
    return(
        <ul className="orders">
            { books && books.length > 0 &&
                books.map( (book, index) => 
                    <Book book={book} key={index} />
                )
            }
        </ul>
    )
}



export default List