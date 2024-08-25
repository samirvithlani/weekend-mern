import React from 'react'
import { useForm } from 'react-hook-form';

export const FormDemo2 = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    console.log("errors...",errors);
    const submitHandler = (data) => {
        console.log("data...",data);
    }

    const validationSchema = {
        age:{
            required:{
                value:true,
                message:"Age is required*"
            },
            min:{
                value:18,
                message:"Age should be greater than 18"
            },
            max:{
                value:60,
                message:"Age should be less than 60"
            }

        },
        email:{
            required:{
                value:true,
                message:"Email is required*"
            },
            minLength:{
                value:5,
                message:"Email should be greater than 5"
            },
            maxLength:{
                value:20,
                message:"Email should be less than 20"
            },
        }
       
    }

  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Form Demo 2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text'
                    {...register("name",{required:{value:true,message:"Name is required*"}})}
                ></input>
                {/* {errors.name.message} */}
                {
                    errors.name && <span>{errors.name.message}</span>
                }
            </div>
            <div>
                <label>AGE</label>
                <input type='number' {...register("age",validationSchema.age)}></input>
                {
                    errors.age && <span>{errors.age.message}</span>
                }
            </div>
            <div>
                <label>EMAIL</label>
                <input type='text' {...register("email",validationSchema.email)}></input>
                {
                    errors.email && <span>{errors.email.message}</span>
                }
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
