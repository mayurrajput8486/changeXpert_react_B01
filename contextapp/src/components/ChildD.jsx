/* import ChildE from "./ChildE"

const ChildD = ({greetC}) => {
  return (
    <div style={{backgroundColor : 'darkblue', padding : '20px', textAlign : 'center', color : 'white'}}>
        <h3>ChildD Comp - {greetC}</h3>
        <ChildE greetD={greetC}/>
    </div>
  )
}

export default ChildD */

import ChildE from "./ChildE"
import { Product1 } from "../context/mycontext"
import { useContext } from "react"
const ChildD = () => {
  const p = useContext(Product1)
  return (
    <div style={{backgroundColor : 'darkblue', padding : '20px', textAlign : 'center', color : 'white'}}>
        <h3>ChildD Comp</h3>
        <h2>
            {p.pName} - {p.brand} - {p.model} - {p.price}
        </h2>
        <ChildE/>
    </div>
  )
}

export default ChildD