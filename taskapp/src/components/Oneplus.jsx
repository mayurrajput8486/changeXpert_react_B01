import React from 'react'

const Oneplus = ({item3}) => {
  return (
    <div className='oneplus'>
         <div className='img'>
                <img src='oneplus13.webp' alt='s24'/>
            </div>
            <div className='details'>
                <h3>{item3.model}</h3>
                <ul>
                    <li style={{listStyleType:'none',backgroundColor:'green',padding:'5px', borderRadius : '10px', width : '30px',margin : '10px'}}>{item3.rating}</li>
                    <li style={{listStyleType:'none',backgroundColor:'green',padding:'5px', borderRadius : '10px', width : '200px',margin : '10px'}}>{item3.storagedetails}</li>
                    <li style={{listStyleType:'none',backgroundColor:'green',padding:'5px', borderRadius : '10px', width : '200px',margin : '10px'}}>{item3.screen}</li>
                    <li style={{listStyleType:'none',backgroundColor:'green',padding:'5px', borderRadius : '10px', width : '200px',margin : '10px'}}>{item3.camera}</li>
                    <li style={{listStyleType:'none',backgroundColor:'green',padding:'5px', borderRadius : '10px', width : '200px',margin : '10px'}}>{item3.battery}</li>
                    <li style={{listStyleType:'none',backgroundColor:'green',padding:'5px', borderRadius : '10px', width : '200px',margin : '10px'}}>{item3.processor}</li>
                    
                </ul>
        </div>
    </div>
  )
}

export default Oneplus