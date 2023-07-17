import { useState } from 'react'
import './Counter.css'
import {PropTypes } from 'prop-types';

export default function Counter({by}) {

    // [0, f]
    const [count, setCount] = useState(0);
    console.log(by)
    
    
    function incrementCounterParentFunction() {

       setCount(count + by)
    }

    function decrementCounterParentFunction() {

        setCount(count - by)
     }

    
    return (
        <div className="Counter">
            <span className="count">{count}</span>
            <div>            
                <button className="counterButton" onClick={incrementCounterParentFunction} >+{by}</button>
                    
                <button className="counterButton" onClick={decrementCounterParentFunction} >-{by}</button></div>
            </div>
    )
}

Counter.propTypes = {by: PropTypes.number}

Counter.defaultProps = {by: 5}