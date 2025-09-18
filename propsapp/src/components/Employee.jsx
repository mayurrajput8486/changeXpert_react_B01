const Employee = (props) => {
  return (
    <div>
        <h2>Employee Details</h2>
        <div style={{width : "300px", height : "150px", backgroundColor : 'orchid', margin : "auto"}}>
            Employee Name - {props.empdetails.empName} <br/>
            Employee Email - {props.empdetails.email} <br/>
            Employee City - {props.empdetails.city} <br/>
        </div>
    </div>
  )
}

export default Employee