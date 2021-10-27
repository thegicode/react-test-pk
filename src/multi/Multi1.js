'use strict';

const Multi1 = (props) => {
    
    const handleShow = props.handleShow
    const isShow = props.isShow()

    return(
        <React.Fragment>

            <h2>Multi1</h2>

            <button onClick={handleShow}>Click</button>

            { isShow && 
                <div>Multi component test</div>
            } 

        </React.Fragment>
    )
}

export default Multi1