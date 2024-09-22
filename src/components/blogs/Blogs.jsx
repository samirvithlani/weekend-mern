import React, { useState } from 'react'
import { AppContext } from '../../AppContext'
import { AddBloag } from './AddBloag'
import { BlogList } from './BlogList'

export const Blogs = () => {

   const blogDispather = (action,payload)=>{

    switch(action){

        case "ADD_BLOG":
            console.log("ADD_BLOG",payload)
            break;
        case "DELETE_BLOG":
            console.log("DELETE_BLOG",payload)
            break;    


    }



   }

    const [blogs, setblogs] = useState([
    {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
    {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
    {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}
    ])
  return (
    <div>
        <AppContext.Provider value={{blogs,blogDispather}}>
            <BlogList></BlogList>
            <AddBloag></AddBloag>
            
        </AppContext.Provider>
            
    </div>
  )
}
