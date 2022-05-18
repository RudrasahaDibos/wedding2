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
              <input className='mb-2' placeholder='name'  {...register("name", { required: true, maxLength: 20 })} />
              <textarea className='mb-2' placeholder='review' {...register("review", )} />
              
              <input className='mb-2' placeholder='price' type="number" {...register("prize")} />
              <input className='mb-2' placeholder='Photo URL' type="text" {...register("image")} />
                 <input type="submit" />
    </form>
        </div>
    );
};

export default Addservice;