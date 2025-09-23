import ChildB from './ChildB'

const ChildA = ({greet}) => {
  return (
    <div style={{backgroundColor : 'greenyellow', padding : '20px', textAlign : 'center'}}>
        <h3>ChildA Comp - <span style={{textDecoration : 'underline'}}>{greet}</span></h3>
        <ChildB greetA={greet}/>
    </div>
  )
}

export default ChildA