import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = (props) => {
    const {serviceId}=useParams();
     const [service ,setservice] =useState({})

     useEffect(()=>{
       const url =`http://localhost:5000/service/${serviceId}`;

       fetch(url)
       .then(res=>res.json())
       .then(data=>setservice(data))
     },[]);
    return (
        <div>
             <h1>Service deatails: {service.name}</h1>
             <img src={service.image} alt="" />
             <div className='text-center'>
                 
                <Link to='/checkout'>
                  <button className='btn btn-primary'>Proceed checkout</button>
                </Link>

             </div>
        </div>
    );
};

export default ServiceDetails;