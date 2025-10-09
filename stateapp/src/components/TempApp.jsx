import React, { useState } from 'react'
import './TempApp.css'
const TempApp = () => {
  const [temp,setTemp] = useState(20)
  const [color,setColor] = useState('normal')


  const increment = () =>{
    setTemp(temp + 1)
    if( temp >= 10 && temp < 30){
      setColor('normal')
    }else if(temp >= 30){
      setColor('hot')
    }else{
      setColor('cold')
    }
  }

  const decrement = () =>{
    setTemp(temp - 1)
    if(temp <= 10){
      setColor('cold')
    }else if(temp < 30){
      setColor('normal')
    }else{
      setColor('hot')
    }
  }

  return (
    <div className='container'>

      <div className='tempapp'>
        <h4>Temp Control App</h4>
        <div className={`display ${color}`}>
          {temp} &#8451; <br/>
          {
            temp >= 30 ? "😡" : temp <= 10 ? "😨" : "😊"
          }
        </div>
        <div className='msg'>
          {
            temp >= 30 ? "Its's too Hot" : temp <= 10 ? "Its's too Cold" : "It's Normal Temp"
          }
        </div>
        <div className='btngroups'>
          <button className='b' onClick={increment}>+</button>
          <button className='b' onClick={decrement}>-</button>
        </div>
      </div>
    </div>
  )
}

export default TempApp