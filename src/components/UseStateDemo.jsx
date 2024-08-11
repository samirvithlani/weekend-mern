import React, { useState } from 'react'

export const UseStateDemo = () => {
    //var count = 0;
    var [count,setCount] = useState(0);
    //const [user, setuser] = useState({})
    //const [users, setusers] = useState([])
    //count -->variable --> state variable
    //setCount --> function --> state function -> to update the state variable
    //useState(0) --> initial value..
    const increseCount = ()=>{
       // count++;
       setCount(count+1);
        console.log("count...",count);
    }
  return (
    <div>
        <h1>USE STATES</h1>
        <h2>Count : {count}</h2>
        <button onClick={()=>{increseCount()}}>Increase Count</button>
    </div>
  )
}
