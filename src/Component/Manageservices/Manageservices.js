import React from 'react';
import Hooks from '../../Hooks/Hooks';

const Manageservices = () => {
    const [services]= Hooks();
    const handleDelete = id =>{
       const proceed =  window.confirm('Are you sure?')
       if(proceed){
           console.log('halde')
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