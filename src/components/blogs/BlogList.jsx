import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'
import { SubBlogList } from './SubBlogList'

export const BlogList = () => {
    const  {blogs} = useContext(AppContext)
    console.log("inside blog list...",blogs)
  return (
    <div>BlogList
        <SubBlogList/>
    </div>
  )
}
