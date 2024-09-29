import React, { useEffect, useState } from 'react'
import { MyButton } from '../common/MyButton'

export const UseEffectDemo = () => {
    //()=>{} is called as callback function
    //[] is called as dependency array
    const [count, setcount] = useState(0)
    useEffect(()=>{
        console.log("UseEffectDemo")
    },[count])
    
   
    const myFunction = () => {
      alert("Hello")
    }
    
  return (
    <div>
      <MyButton name="DEMO 1" class="btn btn-info" clickHandler={myFunction}></MyButton>
      <MyButton name="DEMO 1"></MyButton>
        <h1>UseEffectDemo</h1>
        <button onClick={()=>{setcount(count+1)}}>Count {count}</button>
    </div>
  )
}
