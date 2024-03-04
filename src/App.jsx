import { useState } from "react";
import '/ReactJs/counter/src/App.css'
function App(){
  const [c,setCount,d]=useState(0)
  
  function add()
  {
    setCount(c+1)//it will change c value to c+1 value and re-render the component
  }
  return(
    <div className="counter">
      <h3>Count :{c}</h3>
      <div>
      <button onClick={add}>+</button>
      <button onClick={()=>setCount(c-1)}>-</button>
      <button onClick={()=>setCount(c==0)}>Reset</button>
      </div>
    </div>
  )
}
export default App;