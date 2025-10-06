import React, { useState } from 'react'

const Loginform = () => {
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(`${email} - ${password}`)
    }
    return (
        <div>
            <h3>Please Login</h3>
            <form onSubmit={handleSubmit}>
                <div className='bg-dark w-50 mx-auto p-3 rounded-3'>
                    <div className='mb-2'>
                        <input
                            type='email'
                            placeholder='Enter Email'
                            className='form-control w-100'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='form-control w-100'
                            value={password}
                            onChange={(e)=>setpassword(e.target.value)}
                        />
                    </div>
                    <div className=''>
                        <button type='submit' className='bg-warning w-100 p-0 m-0'>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            {/* <div>
                <h3>Email - {email}</h3>
                <h3>Password - {password}</h3>
            </div> */}
        </div>
    )
}

export default Loginform