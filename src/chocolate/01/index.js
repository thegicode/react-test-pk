import {A, B, C, D, E} from './components.js'

const {useState, useEffect} = React

function Chocolate() {

    const [isTypeDefault, chaneType] = useState(true)

    useEffect( () => {
        hanleType()
    })

    const hanleType = () => {
        const hash = location.hash
        const isDefault = (hash === '#a' || hash === '') ? true : false
        chaneType(isDefault)
    }

    const handleClick = (e) => {
        const hash = location.hash
        const newHash = (hash === '#a' || hash === '') ? 'b' : 'a'
       location.hash = newHash
    }
 
    window.addEventListener('hashchange', () => {
        hanleType()
    })

    return (
        <div>
            <h1>Chocolate</h1>
            <A />
            { isTypeDefault === true ?
                <React.Fragment>
                    <B />
                    <C />
                </React.Fragment>
                :
                <React.Fragment>
                    <D />
                    <E />
                </React.Fragment>
            } 
            <button onClick={handleClick}>Hash Change</button>
        </div>
    )
}

const el = React.createElement
const domContainer = document.querySelector('#chocolate')
ReactDOM.render(el(Chocolate), domContainer)