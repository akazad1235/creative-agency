import React, { useState } from 'react';
import { useEffect } from 'react';
import Service from './Service';

const Services = () => {
    const [serviceList, setServiceList] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/serviceList')
      .then( res => res.json())
      .then( data =>setServiceList(data))
    }, [])


    return (
        <section className="container my-2">
            <h3 className="text-center">Provide Awosome <spna className="text-success">Service</spna></h3>
            <div className="row ">
                {
                  serviceList.map(service =>  <Service service={service}></Service>)
                }
            </div>
        </section>
    );
};

export default Services;