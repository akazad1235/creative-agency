import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {

    const {_id, title, desc, fileName} =props.service;
    return (
           
                <div className="col-md-4 my-5 p-3 myhover">
                    <Link to={`/customer/order/${_id}`} className="text-decoration-none">
                    <div>
                    <img className="mx-auto d-block my-3" style={{width:'75px'}} src={`https://radiant-falls-65936.herokuapp.com/${fileName}`} alt=""/>
                    <h4 className="my-3 text-center  text-dark">{title}</h4>
                    <p className="my-3 text-center  text-secondary">{desc.substring(0, 100)}</p>
                    </div>
                    </Link>
                </div>    
    );
};

export default Service;