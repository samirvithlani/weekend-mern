import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'

export const AddBloag = () => {
    const {blogDispather} = useContext(AppContext)
  return (
    <div>
        <button onClick={()=>blogDispather("ADD_BLOG",{name:"lkanlksna"})}></button>
    </div>
  )
}
