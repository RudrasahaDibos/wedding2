import React from 'react';
import { useForm } from "react-hook-form";

const Addservice = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {console.log(data)
  
      const url =`http://localhost:5000/service`;
      fetch(url,{

      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(result=>{
        console.log(result)
      });
  
  
  
  
  
  
  };
    return (
    <div className='w-50 mx-auto'>
              <h1>add service</h1>
              <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
              <input className='mb-2' placeholder='Name' {...register("Name", { pattern: /^[A-Za-z]+$/i })} />
              <input className='mb-2' placeholder='description'  {...register("discription", { required: true, maxLength: 20 })} />
              <input className='mb-2' placeholder='price' type="number" {...register("price", { min: 18, max: 99 })} />
              <input className='mb-2' placeholder='Photo URL' type="text" {...register("image", { min: 18, max: 99 })} />
                 <input type="submit" />
    </form>
        </div>
    );
};

export default Addservice;