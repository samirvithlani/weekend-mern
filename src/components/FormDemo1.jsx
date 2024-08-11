import React, { useState } from "react";

export const FormDemo1 = () => {

    const [name, setname] = useState("")
    const [age, setage] = useState(0)
  const submitHandler = () => {
    alert(`name is ${name} age = ${age}`);
  };
  const namehandler = (event) => {
    //console.log(event)
    console.log(event.target.value)
    setname(event.target.value)
  }
  return (
    <div>
      <h1>FORM DEMO 1</h1>
      <div>
        <div>
          <label>NAME</label>
          <input onChange={(event)=>{namehandler(event)}} type="text" placeholder="Enter Name" />
          {name}
        </div>
        <div>
            <label>AGE</label>
            <input type="number" placeholder="Enter Age" onChange={(event)=>{setage(event.target.value)}}/>
            {age}
            </div>
        <div>
          <button
            onClick={() => {
              submitHandler();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
