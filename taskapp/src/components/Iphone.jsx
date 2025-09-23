import React from 'react'

const Iphone = ({item2}) => {
  return (
    <div className='iphone'>
         <div className='img'>
                <img src='iphone17.webp' alt='s24'/>
            </div>
            <div className='details'>
                <h3>{item2.model}</h3>
                <ul>
                    <li style={{listStyleType:'none',backgroundColor:'green',padding:'5px', borderRadius : '10px', width : '30px',margin : '10px'}}>{item2.rating}</li>
                    <li style={{listStyleType:'none',backgroundColor:'green',padding:'5px', borderRadius : '10px', width : '200px',margin : '10px'}}>{item2.storagedetails}</li>
                    <li style={{listStyleType:'none',backgroundColor:'green',padding:'5px', borderRadius : '10px', width : '200px',margin : '10px'}}>{item2.screen}</li>
                    <li style={{listStyleType:'none',backgroundColor:'green',padding:'5px', borderRadius : '10px', width : '200px',margin : '10px'}}>{item2.camera}</li>
                    <li style={{listStyleType:'none',backgroundColor:'green',padding:'5px', borderRadius : '10px', width : '200px',margin : '10px'}}>{item2.battery}</li>
                    <li style={{listStyleType:'none',backgroundColor:'green',padding:'5px', borderRadius : '10px', width : '200px',margin : '10px'}}>{item2.processor}</li>
                </ul>
        </div>
    </div>
  )
}

export default Iphone