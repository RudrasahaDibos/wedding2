import React from 'react';
import Hooks from '../../Hooks/Hooks';

const Manageservices = () => {
    const [services,setservices]= Hooks();
    const handleDelete = id =>{
       const proceed =  window.confirm('Are you sure?')
       if(proceed){
           const url =`http://localhost:5000/service/${id}`;
           fetch(url,{

              method:'DELETE'
           })
           .then(res => res.json())
           .then(data =>{
               console.log(data);
               const remaining = services.filter(service =>service._id !==id)
             setservices(remaining);
           })
       }
    }

    return (
        <div>
            <h1>manageservice</h1>
            {
                services.map(service=><div key={service._Id}>

            <h4>{service.name}<button onClick={() => handleDelete(service._id)}>X</button></h4>
                </div>)
            }
        </div>
    );
};

export default Manageservices;