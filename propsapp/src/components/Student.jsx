
const Student = ({stuName, rollNo, city}) => {
  return (
    <div>
        <h2>Student Details</h2>
        <mark>We are using <b>props destructuring</b> in this comp that means instead of using props name we can access the property value</mark>
        <h3>Hello, {stuName}</h3>
        <h3>{stuName} rollno. is {rollNo}</h3>
        <h3>He is from {city}</h3>
    </div>
  )
}

export default Student