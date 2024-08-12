import { useState } from "react"
import "./Counter.css"

function Counter()
{
 
 var[count,setCount] = useState(0)

function increment()
{
   setCount(count+1)
}

function decrement()
{
   setCount(count-1)
}


 
 return (<div class="body">
 <div class="container">
   <h1>COUNTER</h1>
    <h1>{count}</h1>
    <div>
    <button className="button" onClick={increment}>INC</button>
    <button className="button2" onClick={decrement}>DEC</button>
    </div>
    
</div>
</div>)
}

export default Counter