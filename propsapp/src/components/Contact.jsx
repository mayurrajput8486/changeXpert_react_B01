const Contact = (props) => {
  return (
    <div>
        <h2>Contact</h2>
            <div>Contact Name - {props.contactPerson}</div>
            <div>Mobile Number - {props.mobile}</div>
            <div>Email - {props.email}</div>
    </div>
  )
}

export default Contact