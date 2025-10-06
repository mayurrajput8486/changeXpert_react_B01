import { useState } from "react"

const Formdata = () => {
    const [myname, setMyName] = useState("")

    const callName = () =>{
        setMyName(event.target.value)
    }
  return (
    <div>
        <h2>Handle State with Text Input</h2>
        <div>
            <h4>Enter Your name : </h4>
            <input
                type="text"
                placeholder="Enter Full Name"
                className="form-control w-50 mx-auto"
                value={myname}
                onChange={(e)=>setMyName(e.target.value)}
            />
            <h2>Hello, {myname} !!! </h2>
        </div>
    </div>
  )
}

export default Formdata