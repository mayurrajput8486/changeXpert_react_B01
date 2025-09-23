import ChildC from "./ChildC"

const ChildB = ({greetA}) => {
  return (
    <div style={{backgroundColor : 'orange', padding : '20px', textAlign : 'center'}}>
        <h3>ChildB Comp - {greetA}</h3>
        <ChildC greetB = {greetA}/>
    </div>
  )
}

export default ChildB