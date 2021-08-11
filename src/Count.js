
const useState = React.useState
const useEffect = React.useEffect

const css = {
    width: '80%',
    margin: '2rem auto'
}
const buttonCss = {
    margin: '5px'
}

let data = 0;

function Count(props) {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('-------------------')
        console.log('[useEffect] let', data)
        console.log('[useEffect] state', count)
    });

    const handleClick = () => {
        data += 1
        setCount(count+1)

        console.log('-------------------')
        console.log('[click] let', data)
        console.log('[click] state', count)
    }

    const others = () => {
        console.log('-------------------')
        console.log('[others] let', data)
        console.log('[others] state', count)
    }

    return(
        <div style={css}>

            <p>[변수] : {data}</p>
            <p>[State] : {count}</p>

            <button style={buttonCss} onClick={handleClick}>click</button> 
            <button style={buttonCss} onClick={others}>others(only log)</button>
        </div>
    )
}

const el = React.createElement;
const domContainer = document.querySelector('#root');
ReactDOM.render(el(Count), domContainer);

