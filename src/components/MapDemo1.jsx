import React from 'react'

export const MapDemo1 = ({title}) => {
    var students = [
        {
            id:1,
            name:"raj",
            age:23
        },
        {
            id:2,
            name:"parth",
            age:25
        },
        {
            id:3,
            name:"amit",
            age:26
        }
    ]
  return (
    <div>
        {title}
        <h1 style={{textAlign: 'center'}}>Map Demo 1</h1>
        <ul>
            {
                students.map((stu)=>{
                    return(
                        <li style={{color:stu.age>=25?"green":"red"}}>{stu.id} - {stu.name} - {stu.age}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}
