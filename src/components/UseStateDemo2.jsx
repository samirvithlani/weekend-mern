import React, { useState } from 'react'

export const UseStateDemo2 = () => {
    const [users, setusers] = useState([
        {
            id:101,
            name:"ram",
            age:23
        },
        {
            id:102,
            name:"shyam",
            age:24
        }
    ])
    const addUser = ()=>{

        // var x = users.push({
        //     id:103,
        //     name:"mohan",
        //     age:25
        // })
        // setusers(x)
        var obj = {
            id:Math.random(),
            name:"mohan",
            age:25
        }
        // var x = [...users,obj]
        // console.log("x...",x)
        // setusers(x)

        setusers([...users,obj])
    }
  return (
    <div>
        <button onClick={()=>{addUser()}}>Add User</button>
            <ul>
                {
                    users.map((user)=>{
                        return (
                            <li>{user.id} -- {user.name}--{user.age}</li>
                        )
                    })
                }
            </ul>
    </div>
  )
}
