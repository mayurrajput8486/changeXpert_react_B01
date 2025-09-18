const AlertFun = (props) => {
  return (
    <div>
        <h2>How to call function as a props</h2>
        <button onClick={props.callmyFun}>Click</button>
        <img src={props.reactImage} alt="reactlogo"/>
    </div>
  )
}

export default AlertFun