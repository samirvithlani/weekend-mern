import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateUser = () => {
    //const {id} = useParams()
    const id = useParams().id;
    const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    // defaultValues:{
    //     name:"Rahul",
    //     age:30
    // }
    defaultValues:async()=>{
        const res = await axios.get("https://node5.onrender.com/user/user/"+id);
        console.log(res.data.data);
        return res.data.data
    }
  });
  const submitHandler = async(data) => {
    console.log(data);
    //put..
    try{
    delete data._id;
    const res = await axios.put("https://node5.onrender.com/user/user/"+id,data);
    console.log(res);
    navigate("/apidemo1");
    }catch(err){
        console.log(err);
    }
  };
  return (
    <div>
      <h1>UPDATE USER</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
            <label htmlFor="email">AGe</label>
            <input type="text" {...register("age")} />
        </div>
        <div>
            <input type="submit" value="UPDATE USER"/>
        </div>
      </form>
    </div>
  );
};
