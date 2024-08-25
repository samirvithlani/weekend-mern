import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo1 = () => {
  const { register, handleSubmit } = useForm();
  const [output, setoutput] = useState()
  //register is used to register the input fields
  //handleSubmit is used to handle the form submission

  const submitHandler = (data) => {
    console.log("data...", data);
    setoutput(data)
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Form Demo 1</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("name")}></input>
        </div>
        <div>
          <label>AGE</label>
          <input type="number" {...register("age")}></input>
        </div>
        <div>
          <label>GENDER</label>
          <br></br>
          <input
            type="radio"
            value="male"
            name="gender"
            {...register("gender")}
          ></input>
          MALE :
          <input
            type="radio"
            value="female"
            name="gender"
            {...register("gender")}
          ></input>
          FEALE :
        </div>
        <div>
          <label>SKILLS</label>
          <br></br>
          <input
            type="checkbox"
            value="HTML"
            name="skills"
            {...register("skills")}
          ></input>
          HTML
          <input
            type="checkbox"
            value="CSS"
            name="skills"
            {...register("skills")}
          ></input>
          CSS
          <input
            type="checkbox"
            value="JS"
            name="skills"
            {...register("skills")}
          ></input>
          JS
        </div>
        <div>
          <select {...register("city")}>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Surat">Surat</option>
            <option value="Rajkot">Rajkot</option>
          </select>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
      {
        output &&
      
      <div>
        <h1>OUTPUT</h1>
        <h2>NAME = {output.name}</h2>
        <h2>AGE = {output.age}</h2>
        <h2>GENDER = {output.gender}</h2>
      </div>
    }
    </div>
  );
};
