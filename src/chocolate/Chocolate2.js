const { Link } = ReactRouterDOM

function Chocolate() {
    
    return (
        <React.Fragment>
            <h3>Chocolate2 JS</h3>

            <ul className="navs">
                <li><Link to="/html/chocolate/page1/">Page1</Link></li>
                <li><Link to="/html/chocolate/page2/">Page2</Link></li>
            </ul>

            <div className="items">
                <div>In Chocolate js : Only Show Page2</div>
            </div>

        </React.Fragment>
    )
}

export default Chocolate
