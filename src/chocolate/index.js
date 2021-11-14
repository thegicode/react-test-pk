
import Chocolate from "./chocolate.js"

const { BrowserRouter, Route } = ReactRouterDOM

const App = () => (
    <BrowserRouter>
        <Route path="/html/chocolate/page1/" component={Chocolate} />
        <Route path="/html/chocolate/page2/" component={Chocolate} />
    </BrowserRouter>
)

ReactDOM.render(<App />, document.querySelector('#chocolate'));