import ChildE from "./ChildE"

const ChildD = ({greetC}) => {
  return (
    <div style={{backgroundColor : 'darkblue', padding : '20px', textAlign : 'center', color : 'white'}}>
        <h3>ChildD Comp - {greetC}</h3>
        <ChildE greetD={greetC}/>
    </div>
  )
}

export default ChildD