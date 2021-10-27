'use strict';

const Multi2 = (props) => {

    const handleShow = props.handleShow
    const isShow = props.isShow()

    return(
        <React.Fragment>

            <h2>Multi2</h2>

            <button onClick={handleShow}>Click</button>

            { isShow && 
                <div>Multi component test</div>
            }

        </React.Fragment>
    )

}

export default Multi2




