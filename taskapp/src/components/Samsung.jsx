import React from 'react'

const Samsung = ({ item1 }) => {
    return (
        <div className='samsung'>
            <div className='img'>
                <img src='s24.webp' alt='s24' />
            </div>
            <div className='details'>
                <h3>{item1.model}</h3>
                <ul>
                    <li style={{ listStyleType: 'none', backgroundColor: 'green', padding: '5px', borderRadius: '10px', width: '30px', margin: '10px' }}>{item1.rating}</li>
                    <li style={{ listStyleType: 'none', backgroundColor: 'green', padding: '5px', borderRadius: '10px', width: '200px', margin: '10px' }}>{item1.storagedetails}</li>
                    <li style={{ listStyleType: 'none', backgroundColor: 'green', padding: '5px', borderRadius: '10px', width: '200px', margin: '10px' }}>{item1.screen}</li>
                    <li style={{ listStyleType: 'none', backgroundColor: 'green', padding: '5px', borderRadius: '10px', width: '200px', margin: '10px' }}>{item1.camera}</li>
                    <li style={{ listStyleType: 'none', backgroundColor: 'green', padding: '5px', borderRadius: '10px', width: '200px', margin: '10px' }}>{item1.battery}</li>
                    <li style={{ listStyleType: 'none', backgroundColor: 'green', padding: '5px', borderRadius: '10px', width: '200px', margin: '10px' }}>{item1.processor}</li>
                </ul>
                <div>
                    <button>Add to Cart</button>
                    <button>Add to Wishlist</button>
                </div>
            </div>
        </div>
    )
}

export default Samsung