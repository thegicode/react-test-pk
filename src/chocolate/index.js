import {A, B, C, D, E} from './components.js'

const {useState, useEffect} = React

function Chocolate() {

    const [isTypeDefault, chaneType] = useState(true)

    useEffect( () => {
        hanleType()
    })

    function hanleType() {
        const hash = location.hash
        const isDefault = (hash === '#a' || hash === '') ? true : false
        chaneType(isDefault)
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
        </div>
    )
}

const el = React.createElement
const domContainer = document.querySelector('#chocolate')
ReactDOM.render(el(Chocolate), domContainer)