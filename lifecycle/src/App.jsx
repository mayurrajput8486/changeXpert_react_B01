import Counter from "./components/Counter"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react"
const App = () => {
  const [show, setShow] = useState(true)

  const displayEle = () =>{
    setShow(!show)
  }
  return (
    <div>
      <h1 className="text-center">React Component Lifecycle</h1>
      
      <div className="text-center mt-4">
        <button className="btn btn-warning" onClick={displayEle}>Toggle Comp</button>
        {
          show ? <Counter/> : <div>Comp Unmount</div>
        //condition ?   true :   false
        }
      </div>
      
    </div>
  )
}

export default App