import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    // const handleOrderService = (id) => {
    //     console.log('service order click', id);
    // }
    const {id, title, desc, img} =props.service;
    return (
           
                <div className="col-md-4 p-3 myhover">
                    <Link to={`/customer/order/${id}`} className="text-decoration-none">
                    <div>
                    <img className="mx-auto d-block my-3" style={{width:'75px'}} src={img} alt=""/>
                    <h4 className="my-3 text-center">{title}</h4>
                    <p className="my-3 text-center">{desc}</p>
                    </div>
                    </Link>
                </div>
          
    );
};

export default Service;