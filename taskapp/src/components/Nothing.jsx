
const Nothing = ({item4}) => {
  return (
    <div className="nothing">
         <div className='img'>
                <img src='nothing3.webp' alt='s24'/>
            </div>
            <div className='details'>
                <h3>{item4.model}</h3>
                <ul>
                    <li style={{listStyleType:'none',backgroundColor:'green',padding:'5px', borderRadius : '10px', width : '30px',margin : '10px'}}>{item4.rating}</li>
                    <li style={{listStyleType:'none',backgroundColor:'green',padding:'5px', borderRadius : '10px', width : '200px',margin : '10px'}}>{item4.storagedetails}</li>
                    <li style={{listStyleType:'none',backgroundColor:'green',padding:'5px', borderRadius : '10px', width : '200px',margin : '10px'}}>{item4.screen}</li>
                    <li style={{listStyleType:'none',backgroundColor:'green',padding:'5px', borderRadius : '10px', width : '200px',margin : '10px'}}>{item4.camera}</li>
                    <li style={{listStyleType:'none',backgroundColor:'green',padding:'5px', borderRadius : '10px', width : '200px',margin : '10px'}}>{item4.battery}</li>
                    <li style={{listStyleType:'none',backgroundColor:'green',padding:'5px', borderRadius : '10px', width : '200px',margin : '10px'}}>{item4.processor}</li>
                    
                </ul>
        </div>
    </div>
  )
}

export default Nothing