import { useState } from 'react'
import './Counter.css'
import {PropTypes } from 'prop-types';


export default function Counter(){

    const [count, setCount] = useState(0);

    function incrementCounterParentFunction({by}) {

        setCount(count + by)
     }

    return(
        <>
        <span className="totalCount">{count}</span>
        <CounterButton by={1}/>
        <CounterButton by={2}/>
        <CounterButton by={5}/>
        </>
    )
}



function CounterButton({by}) {

    // [0, f]
    const [count, setCount] = useState(0);
    console.log(by)
    
    
    function incrementCounterFunction() {

       setCount(count + by)
    }

    function decrementCounterFunction() {

        setCount(count - by)
     }

    
    return (
        <div className="Counter">
            <span className="count">{count}</span>
            <div>            
                <button className="counterButton" onClick={incrementCounterFunction} >+{by}</button>
                    
                <button className="counterButton" onClick={decrementCounterFunction} >-{by}</button></div>
            </div>
    )
}

Counter.propTypes = {by: PropTypes.number}

Counter.defaultProps = {by: 5}