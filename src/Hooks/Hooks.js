import { useEffect, useState } from "react";

 const Hooks =()=>{

    const[services,setservices]=useState([]);
    useEffect(()=>{
     fetch('http://localhost:5000/service')
     .then(res=>res.json())
     .then(data=>setservices(data))

    },[])
    return [services ,setservices]
 }
 export default Hooks;