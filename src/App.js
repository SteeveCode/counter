import './App.css';
import Counter from './counter/Counter';


function App() {
  return (
    <div className="App">
      <PlayingWithProp property1="value1" property2="value2"/>
      <Counter by={1}/>
      <Counter by={2}/>
      <Counter by={5}/>
    </div>
  );
}
// function PlayingWithProp(properties){

//   console.log(properties)
//   console.log(properties.property1)
//   console.log(properties.property2)

//   return(
//     <div>Props</div>
//   )
// }

function PlayingWithProp({property1, property2}){

  console.log(property1)
  console.log(property2)

  return(
    <div>Props</div>
  )
}

export default App;
