import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'

export const SubBlogList = () => {
    const {blogs} = useContext(AppContext)
    console.log("inside sub blog list...",blogs)
  return (
    <div>SubBlogList</div>
  )
}
