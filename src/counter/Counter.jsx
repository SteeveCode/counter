import { useState } from 'react'
import './Counter.css'

export default function Counter() {

    // [0, f]
    const [count, setCount] = useState(0);
    
    
    function incrementCounterParentFunction() {

       setCount(count + 1)
    }
    
    return (
        <div className="Counter">
            <span className="count">{count}</span>
            <div>            
                <button className="counterButton" onClick={incrementCounterParentFunction} >+1</button></div>
            </div>
    )
}