
const Userinfo = () => {
    const users = [
        {empId : 101, name : 'Virat Kohli', age : 35, country : 'India', role : 'Frontend Dev', avatar : '/players/virat.jpg'},
        {empId : 102, name : 'Rohit Sharma', age : 36, country : 'India', role : 'Frontend Dev', avatar : '/players/rohit.jpg'},
        {empId : 103, name : 'Hardik Pandya', age : 30, country : 'India', role : 'Fullstack Dev', avatar : '/players/hardik.jpg'},
        {empId : 104, name : 'Ravindra Jadeja', age : 33, country : 'India', role : 'Fullstack Dev', avatar : '/players/ravindra.jpg'},
        {empId : 105, name : 'Jaspreet Bumraah', age : 30, country : 'India', role : 'Backend Dev', avatar : '/players/jaspreet.jpg'},
        {empId : 106, name : 'Surya', age : 38, country : 'India', role : 'Frontend Dev', avatar : '/players/surya.jpg'},
        {empId : 107, name : 'Abhishek Sharma', age : 26, country : 'India', role : 'Frontend Dev', avatar : '/players/abhishek.jpg'}
    ]
  return (
    <div>
        <table className="table mt-5">
            <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>Emp ID</th>
                    <th>Avatar</th>
                    <th>Full Name</th>
                    <th>Age</th>
                    <th>Country</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index)=>{
                        return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.empId}</td>
                                <td>
                                    <img src={user.avatar} width={100} className="rounded-3"/>
                                </td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.country}</td>
                                <td>{user.role}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Userinfo