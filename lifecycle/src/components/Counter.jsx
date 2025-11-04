import { useEffect, useState } from "react"

const Counter = () => {
    const [count,setCount] = useState(0)

    const increment = () =>{
        setCount(count + 1)
    }

    const decrement = () =>{
        setCount(count - 1)
    }

    //Mounting and unmounting (clean up fun)
    useEffect(()=>{
        console.log('Comp Mounting');

        //cleanup function
        return ()=>{
            console.log('Comp Unmount')
        }
    },[])


    //updating
    useEffect(()=>{
        console.log('Comp Updated -  (re-render)')
        //alert('Count is 5')
    }, [count ])

  return (
    <div>
        <h2 className="text-center">Counter</h2>
        <div className="w-25 bg-dark mx-auto p-5 text-center">
            <div className="btn-group">
                <button className="btn btn-danger" onClick={increment}>+</button>
                <button className="btn btn-light">{count}</button>
                <button className="btn btn-danger" onClick={decrement}>-</button>
            </div>
           
        </div>
    </div>
  )
}

export default Counter