/* const ChildE = ({greetD}) => {
  return (
    <div style={{backgroundColor : 'grey', padding : '20px', textAlign : 'center'}}>
        <h3>ChildE Comp - {greetD}</h3>
    </div>
  )
}

export default ChildE */
import { AppName, DevName, Appmsg } from "../context/mycontext"
import { useContext } from "react"

const ChildE = () => {
  const a = useContext(AppName)
  const b = useContext(DevName)
  const c = useContext(Appmsg)
  return (
    <div style={{backgroundColor : 'grey', padding : '20px', textAlign : 'center'}}>
        <h3>ChildE Comp</h3>
        <h3>{a}</h3>
        <h3>{b}</h3>
        <h3>{c}</h3>
        {/* <AppName.Consumer>
           {
            (a)=>{
              return(
                <div>{a}</div>
              )
            }
           }
        </AppName.Consumer>
        <DevName.Consumer>
          {
            (d)=>{
              return(
                <div>{d}</div>
              )
            }
          }
        </DevName.Consumer>
        <Appmsg.Consumer>
          {
            (m)=>{
              return(
                <div>{m}</div>
              )
            }
          }
        </Appmsg.Consumer> */}
    </div>
  )
}

export default ChildE