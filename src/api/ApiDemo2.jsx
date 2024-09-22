import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ApiDemo2 = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  // const addUser = async () => {

  //     const userObj = {
  //         name:"Ram",
  //         age:25,
  //         email:"ram@gmail.com",
  //         isActive:true

  //     }

  //     //req.body
  //     const res = await axios.post("https://node5.onrender.com/user/user",userObj)
  //     console.log(res.data)

  // }

  const submitHandler = async (data) => {
    console.log(data);
    data.isActive = data.isActive === "true" ? true : false;
    try {
      const res = await axios.post(
        "https://node5.onrender.com/user/user",
        data
      );
      console.log(res.data);
      toast.warn("Network Error", {
        autoClose: 200,
        onClose: () => navigate("/apidemo1"),
      });
    } catch (e) {
      console.log(e);
      //alert // toast
    }
  };
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <h1>ApiDemo2</h1>
      {/* <button onClick={()=>{addUser()}}>Add User</button> */}
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" {...register("name")}></input>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="text" {...register("age")}></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" {...register("email")}></input>
        </div>
        <div>
          <label htmlFor="isActive">isActive</label>
          <br></br> Active
          <input
            type="radio"
            name="status"
            value="true"
            {...register("isActive")}
          />
          <br></br> NOt Active{" "}
          <input
            type="radio"
            name="status"
            value="false"
            {...register("isActive")}
          />
        </div>
        <div>
          <input type="submit" value="Add User"></input>
        </div>
      </form>
    </div>
  );
};
