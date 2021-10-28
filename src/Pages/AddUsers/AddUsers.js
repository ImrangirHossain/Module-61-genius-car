import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import './AddUsers.css';
 const AddUsers = () => {
  const { register,reset, handleSubmit } = useForm();
  const onSubmit = data =>{
    console.log(data)

    axios.post('https://warm-ocean-09186.herokuapp.com/services',data)
      .then(res=>{
        if(res.data.insertedId){
          alert('Service added successfully');
          reset();
        }
      })
  };
   
  return (
    <div className="add-service">
      <h1>Add Services</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register("name", { required: true, maxLength: 20 } )} placeholder="Name"/>
    <textarea {...register("description")} placeholder="Description"/>
    <input type="number" {...register("price") } placeholder="Price" />
    <input {...register("img")} placeholder="Img Url" />

    <input type="submit" value="Add Service" />
  </form>
  </div>
  );
}
export default AddUsers;