import React from "react";

export const Content = () => {
  var username = "Ram";
  var age = 25;
  var isActive = true;
  var user = {
    name: "Seeta",
    city: "Mithila",
  };
  var marks = [10, 20, 30, 40, 50];
  const contentStyle = {
    backgroundColor: "yellow",
  }

  return (
    <div style={contentStyle}>
      <h1>Content</h1>
      <h1 style={{color:"red"}}>Hello all !!</h1>
      <h3>
        At a time you can return only 1 tag and 1 tag should return compulary
      </h3>
      <h4>Whatever written in return statment can be display to browser..</h4>
      {username}
      <h1>UserName = {username}</h1>
      <h2>Age = {age}</h2>
      <h3>Active = {isActive == true ? "Active" : "Not Active"}</h3>
      <h1>{user.name}</h1>
      <h2>{user.city}</h2>
    </div>
  );
};
