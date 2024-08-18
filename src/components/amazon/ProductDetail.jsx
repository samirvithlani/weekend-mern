import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
    const id = useParams().id;
  return (
    <div
      style={{
        marginTop: "10px",
        backgroundColor: "pink",
        height: "300px",
        width: "100%",
      }}
    >
        <h1>PRODUCT DETAIL of  - {id}</h1>
    </div>
  )
}
