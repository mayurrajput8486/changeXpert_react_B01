import { useState } from "react"
const counter = () => {
    const [count, setCount] = useState(0)
    //const [state,setState] = useState(intitalValue)

    const increment = () =>{
        setCount(count + 1)
    }

    const decrement = () =>{
        if(count > 0){
            setCount(count - 1)
        }
        
    }
  return (
    <div className="bg-dark w-50 p-3 rounded-5 mx-auto mt-5">
        <h2>Counter Application</h2>
        <div className="btn-group">
            <button className="btn btn-danger fw-bold fs-3" onClick={increment}>+</button>
            <button className="btn btn-success fw-bold fs-3">{count}</button>
            <button className="btn btn-danger fw-bold fs-3" onClick={decrement}>-</button>
        </div>
    </div>
  )
}
export default counter