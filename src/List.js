'use strict';

const useState = React.useState;

function List(){

    const [data, setData] = useState([1, 2, 3, 4, 5]);

    const handleClick = () => {
        setData([...data, 6, 7, 8, 9, 10])
    }

    return(
        <React.Fragment>
            <ul>
                { data.map( (text, index) => {
                    return <li key={index}>{text}</li>
                })}
            </ul>
            <button type="button" onClick={handleClick}>Clcik</button>
        </React.Fragment>
    )

}

const el = React.createElement;
const domContainer = document.querySelector('#list');
ReactDOM.render(el(List), domContainer);


