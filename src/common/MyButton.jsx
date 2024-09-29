import React from 'react'

export const MyButton = (props) => {
  return (
    <button className={props.class ? props.class :"btn btn-primary"}
    onClick={props.clickHandler}
    style={{height:props.height ? props.height : "50px"}}
    >{props.name}</button>
  )
}
