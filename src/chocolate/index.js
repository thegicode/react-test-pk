import {A, B, C, D, E} from './components.js'

const {useState, useEffect} = React

function Chocolate() {

    const [isTypeA, chaneType] = useState(true)

    useEffect( () => {
        console.log(location.hash)
        if (location.hash !== '#a') {
            chaneType(false)
        }
    })

    return (
        <div>
            <h1>Chocolate</h1>
            <A />
            { isTypeA === true ?
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