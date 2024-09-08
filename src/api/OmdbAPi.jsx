import axios from 'axios'
import React, { useState } from 'react'

export const OmdbAPi = () => {

    const [movies, setmovies] = useState([])

    const getApiCall = async () => {

        const url = "http://www.omdbapi.com/"

        const res = await axios.get(url,{
            params:{
                "apikey":"add your api key",
                "s":"avengers"
            }
        })
        //console.log(res.data)

        setmovies(res.data.Search)

    }
    const getImdbData = async (id) => {
        const url = "http://www.omdbapi.com/"

        const res = await axios.get(url,{
            params:{
                "apikey":"9d57be0b",
                "i":id
            }
        })
        console.log(res.data)

        
    }
  return (
    <div>
        <button onClick={()=>{getApiCall()}}>Get Data</button>
        <img src={movies[0]?.Poster} alt="" onClick={()=>{getImdbData(movies[0]?.imdbID)}}/>
        {
            movies[0]?.Title
        }
        {
            movies[0]?.imdbID
        }
    </div>
  )
}
