import React from 'react'
//link
import '../assets/css/header.css'
import { SubHeader } from './SubHeader'

export default function Header(props) {
  console.log("header...",props)
  return (
    <div className="header">
        <h1>HEADER - {props.d.country} - {props.title}</h1>
        <button onClick={props.test}>Test</button>
        <button onClick={()=>{props.test()}}>test 1</button>
        <SubHeader title = {props.title}></SubHeader>
    </div>
  )
}
