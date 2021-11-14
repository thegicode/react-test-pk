const { Link } = ReactRouterDOM

function Chocolate(props) {
    const isPage2 = props.location.pathname.includes('page2')
    return (
        <React.Fragment>
            <h3>Chocolate JS</h3>

            <ul className="navs">
                <li><Link to="/html/chocolate/page1/">Page1</Link></li>
                <li><Link to="/html/chocolate/page2/">Page2</Link></li>
            </ul>

            { isPage2 && 
                <div className="items">
                    <div>In Chocolate js : Only Show Page2</div>
                </div>
            }

        </React.Fragment>
    )
}

export default Chocolate
