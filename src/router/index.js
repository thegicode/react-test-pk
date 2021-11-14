
import Chocolate from "./Chocolate.js"
import Chocolate2 from "./Chocolate2.js"

const { BrowserRouter, Route, Switch } = ReactRouterDOM

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/html/router/page1/" component={Chocolate} />
            <Route path="/html/router/page2/" component={Chocolate2} />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(<App />, document.querySelector('#chocolate'));