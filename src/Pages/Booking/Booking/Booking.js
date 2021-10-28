import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState();
    useEffect(()=>{
        fetch(`https://warm-ocean-09186.herokuapp.com/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[]);
    console.log(service)
    return (
        <div>
            <div className="service pb-3 col-md-4 mx-auto mt-3">
                <img src={service?.img} alt="" />
                <h3>{service?.name}</h3>
                <h5>Price: {service?.price}</h5>
                <p className="px-3">{service?.description}</p>
            </div>
        </div>
    );
};

export default Booking;