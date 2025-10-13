import React, { useState } from 'react'
import './Employees.css'
const Employees = () => {
    const [name,setName] = useState('')    //manage the full name
    const [email,setEmail] = useState('') // manage the email
    const [age, setAge] = useState('')    // manage the age
    const [profile, setProfile] = useState(null) //manage the profile image of emp
    const [emp, setEmp] = useState([])  // to store employee data
    const [editempid, seteditempId] = useState(null) //this hook track which employee being edited


    const imageHandler = (e) =>{
        const file = e.target.files[0] //for retrives the first file in file input
        if(file){
            //FileReader () is used to convert image to string for stoarge
            const reader = new FileReader()
            reader.onloadend = () =>{
                setProfile(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }


    const handleSubmit = (e)=>{
        e.preventDefault()

        if(name && email && age && profile){
            if(editempid){
                const updateEmployee = emp.map((employee)=>{
                    return employee.id === editempid ? {...employee,name,email,age,profile} : employee
                })
            setEmp(updateEmployee)
            seteditempId(null) //this used to clear the previous id
            }else{
           
                //I want to stored data in array in the Object format
                    const newEmp = {
                        id : Date.now(),
                        name, 
                        email, 
                        age,
                        profile
                }
                //...spread operator is used to hold the past or existing data 
                //Date Object is used to manage the date related operation
                //now() method is used call the time in milliseconds
                setEmp([...emp, newEmp]) //this method add object in the array [{},{},{}]
        }
        //if you want to clear form filed automatically
        setName('')
        setEmail('')
        setAge('')
        setProfile(null)
        document.getElementById('profileInput').value = ''
        
        }else{
            alert('Please Enter All Details along with profile')
        }
    }

    const editEmployee = (emp) =>{
        setName(emp.name)
        setEmail(emp.email)
        setAge(emp.age)
        setProfile(emp.profile)
        seteditempId(emp.id)
    }

    const deleteEmployee = (id) =>{
        setEmp(emp.filter((employee)=>{
            return employee.id !== id
        }))
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

                <input
                    type="file"
                    id="profileInput"
                    className='form-control mb-3'
                    onChange={imageHandler}
                    multiple
                />

                <button type='submit' className='btn btn-outline-primary' >
                    {editempid ? "Update Employee" : "Add Employee"}
                </button>
            </form>
        </div>
        <div>
            <table className='table w-75 mx-auto mt-5 table-dark'>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Avatar</th>
                        <th>Emp Name</th>
                        <th>Emp email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        emp.map((e,index)=>{
                            return(
                                <tr key={e.id}>
                                    <td className='data'>{index + 1}</td>
                                    <td>
                                        <img
                                            src={e.profile}
                                            alt={e.name}
                                            width={100}
                                            height={100}
                                            style={{borderRadius : '50%'}}
                                        />
                                    </td>
                                    <td className='data'>{e.name}</td>
                                    <td className='data'>{e.email}</td>
                                    <td className='data'>{e.age}</td>
                                    <td className='data'>
                                        <button className='btn btn-danger' onClick={()=>deleteEmployee(e.id)}>Delete</button>
                                        <button className='btn btn-warning ms-3' onClick={()=>editEmployee(e)}>Edit</button>
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

export default Employees;


//Home Work -
//regId,Student Full Name, course (select tag), date of addmission,contact