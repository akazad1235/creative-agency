import React from 'react';

const Clients = (props) => {

    const {logo} = props.client;

    return (
        <div className="col">
             <img className="img-fluid"  style={{width:'100px'}} src={logo} alt=""/>
        </div>
    );
};

export default Clients;