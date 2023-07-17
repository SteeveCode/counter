import { useState } from 'react'
import './Counter.css'


export default function CounterButton({by, incrementMethod, decrementMethod}) {

    // [0, f]
    const [count, setCount] = useState(0);
    console.log(by)
    
    function incrementCounterFunction() {

       setCount(count + by)
       incrementMethod(by)
    }

    function decrementCounterFunction() {

        setCount(count - by)
        decrementMethod(by)
     }

    return (
        <div className="Counter">
            <div>            
                <button className="counterButton" onClick={incrementCounterFunction} >+{by}</button>
                    
                <button className="counterButton" onClick={decrementCounterFunction} >-{by}</button></div>
            </div>
    )
}
