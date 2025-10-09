import React, { useState } from 'react'

const Employees = () => {
    const [name,setName] = useState()    //manage the full name
    const [email,setEmail] = useState() // manage the email
    const [age, setAge] = useState()    // manage the age
    const [emp, setEmp] = useState([])  // to store employee data

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(name && email && age){
        //I want to stored data in array in the Object format
        const newEmp = {id : Date.now(),name, email, age}
        //...spread operator is used to hold the past or existing data 
        //Date Object is used to manage the date related operation
        //now() method is used call the time in milliseconds
        setEmp([...emp,newEmp]) //this method add object in the array [{},{},{}]
        //if you want to clear form filed automatically
        
        setName('')
        setEmail('')
        setAge('')

        }else{
            alert('Please Enter All Details')
        }
    }
  return (
    <div>
        <h2>Employee Management App</h2>
        <div className='w-50 bg-dark p-3 mx-auto rounded-3 mt-4'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter Full Name'
                    className='form-control mb-3'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />

                <input
                    type='email'
                    placeholder='Enter email'
                    className='form-control mb-3'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <input
                    type='number'
                    placeholder='Enter Age'
                    className='form-control mb-3'
                    value={age}
                    onChange={(e)=>setAge(e.target.value)}
                />

                <button type='submit' className='btn btn-outline-primary' >Add Employee</button>
            </form>
        </div>
        <div>
            <table className='table w-75 mx-auto mt-5 table-dark'>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Emp Name</th>
                        <th>Emp email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        emp.map((e, index)=>{
                            return(
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.age}</td>
                                    <td>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Employees