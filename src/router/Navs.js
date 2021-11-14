const { Link } = ReactRouterDOM

function Navs( { name } ) {
    return(
        <React.Fragment>
            <ul className="navs">
                <li><Link to="/html/router/page1/">Page1</Link></li>
                <li><Link to="/html/router/page2/">Page2</Link></li>
                { name && 
                    <li>Props Name : {name}</li>
                }
            </ul>
        </React.Fragment>
    )
}

export default Navs