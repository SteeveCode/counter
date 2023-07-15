import './Counter.css'

export default function Counter() {
    
    
    function incrementCounterParentFunction(by) {
       console.log('increment clicked')
    }
    
    return (
        <div className="Counter">
            <span className="count">0</span>
            <div>            
                <button className="counterButton" onClick={incrementCounterParentFunction} >+1</button></div>
            </div>
    )
}