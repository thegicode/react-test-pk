'use strict';

import store from './reducer.js'

const { useState } = React

const Multi2 = () => {

    const [isShow, setIsShow] = useState(store.getState().isShow)
    const handleClick = () => {
        store.dispatch({ type: 'SET_ISSHOW' })
        setIsShow(store.getState().isShow)
    }

    return(
        <React.Fragment>

            <h2>Multi2</h2>

            <button onClick={handleClick}>Click</button>

            { isShow && 
                <div>Multi component test</div>
            }

        </React.Fragment>
    )

}

export default Multi2




