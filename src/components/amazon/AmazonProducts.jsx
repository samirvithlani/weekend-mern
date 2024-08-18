import React from "react";
import { Link } from "react-router-dom";

export const AmazonProducts = () => {
  var products = [
    {
      id: 104,
      name: "iphone15",
      price: 100000,
    },
    {
      id: 105,
      name: "iphone16",
      price: 200000,
    },
    {
      id: 106,
      name: "iphone17",
      price: 300000,
    },
  ];
  return (
    <div
      style={{
        marginTop: "10px",
        backgroundColor: "greenyellow",
        height: "600px",
        width: "100%",
        padding: "10px",
        margin: "20px",
      }}
    >
      <div style={{ justifyContent: "center", display: "flex" }}>
        <div
          style={{
            marginRight: "10px",
            height: "200px",
            width: "200px",
            backgroundColor: "blue",
          }}
        >
          <h1>PRODUCT 1</h1>
          <Link style={{ color: "black" }} to="productdetail/101">
            DETAIL product 1
          </Link>
        </div>
        <div
          style={{
            marginRight: "10px",
            height: "200px",
            width: "200px",
            backgroundColor: "red",
          }}
        >
          <h1>PRODUCT 2</h1>
          <Link style={{ color: "black" }} to="/amazonproduct/productdetail/102">
            DETAIL product 1
          </Link>
        </div>
        <div
          style={{
            marginRight: "10px",
            height: "200px",
            width: "200px",
            backgroundColor: "yellow",
          }}
        >
          <h1>PRODUCT 3</h1>
          <Link style={{ color: "black" }} to="/productdetail/103">
            DETAIL product 1
          </Link>
        </div>
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        {products?.map((prod) => {
          return (
            <div
              style={{
                marginRight: "10px",
                height: "200px",
                width: "200px",
                backgroundColor: "blue",
              }}
            >
              <h1>{prod.name}</h1>
              <p>Rs {prod.price}</p>
              {/* <Link style={{ color: "black" }} to="/productdetail/101">
                DETAIL product 1
              </Link> */}
              <Link style={{ color: "black" }} to ={`productdetail/${prod.id}`}>DETAIL product {prod.id}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
