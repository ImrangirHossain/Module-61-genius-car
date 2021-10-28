import React, {useEffect, useState} from 'react';

const ManageServices = () => {
    const [services, setServices] = useState();
    useEffect(()=>{
        fetch('https://warm-ocean-09186.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);
    console.log(services)
    const handleDelete=(id)=>{
        const url = `https://warm-ocean-09186.herokuapp.com/services/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deleteCount){
                alert("deleted")
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            }
        })
    }
    return (
        <div>
            {
              services.map(service=> <div key={service._id}>
                    <h3>{service?.name}</h3>
                        <button onClick={()=>handleDelete(service._id)}>Delete</button>
                   </div>)    
            }   
     </div>
    );
};

export default ManageServices;