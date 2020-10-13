import React from 'react';

const Service = (props) => {
    const {title, desc, img} =props.service;
    return (
            <div className="col-md-4 p-3">
                <img className="mx-auto d-block my-3" style={{width:'75px'}} src={img} alt=""/>
                <h4 className="my-3 text-center">{title}</h4>
                <p className="my-3 text-center">{desc}</p>
            </div>
    );
};

export default Service;