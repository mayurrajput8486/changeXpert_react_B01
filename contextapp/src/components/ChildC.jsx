import ChildD from "./ChildD"
const ChildC = ({greetB}) => {
  return (
    <div style={{backgroundColor : 'lightblue', padding : '20px', textAlign : 'center'}}>
        <h3>ChildC Comp - {greetB}</h3>
        <ChildD greetC = {greetB}/>
    </div>
  )
}

export default ChildC