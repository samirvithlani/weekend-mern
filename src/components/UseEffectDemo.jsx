import React, { useEffect, useState } from 'react'

export const UseEffectDemo = () => {
    //()=>{} is called as callback function
    //[] is called as dependency array
    const [count, setcount] = useState(0)
    useEffect(()=>{
        console.log("UseEffectDemo")
    },[count])
    
   
    
  return (
    <div>
        <h1>UseEffectDemo</h1>
        <button onClick={()=>{setcount(count+1)}}>Count {count}</button>
    </div>
  )
}
