'use strict';

import store from './reducer.js'

const { useState } = React

const Multi1 = () => {
    const [isShow, setIsShow] = useState(store.getState().isShow)
    const handleClick = () => {
        store.dispatch({ type: 'SET_ISSHOW' })
        setIsShow(store.getState().isShow)
    }

    return(
        <React.Fragment>

            <h2>Multi1</h2>

            <button onClick={handleClick}>Click</button>

            { isShow && 
                <div>Multi component test</div>
            }

        </React.Fragment>
    )
}

export default Multi1