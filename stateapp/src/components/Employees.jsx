import React, { useState } from 'react'

const Employees = () => {
    const [name,setName] = useState('')    //manage the full name
    const [email,setEmail] = useState('') // manage the email
    const [age, setAge] = useState('')    // manage the age
    const [profile, setProfile] = useState(null) //manage the profile image of emp
    const [emp, setEmp] = useState([])  // to store employee data


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

                <button type='submit' className='btn btn-outline-primary' >Add Employee</button>
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
                        emp.map((e)=>{
                            return(
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>
                                        <img
                                            src={e.profile}
                                            alt={e.name}
                                            width={100}
                                            height={100}
                                            style={{borderRadius : '50%'}}
                                        />
                                    </td>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.age}</td>
                                    <td>
                                        <button className='btn btn-danger' onClick={()=>deleteEmployee(e.id)}>Delete</button>
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