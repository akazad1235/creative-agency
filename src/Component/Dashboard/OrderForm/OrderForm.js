import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../../images/logos/logo.png';
import './OrderForm.css'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import {useForm} from 'react-hook-form';

const OrderForm = () => {
    let {id} = useParams();
    console.log(id);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    
       const {register, handleSubmit, errors} =useForm();

       const onSubmit = (data) => {
       // data.email = `${loggedInUser.email}` ;
        console.log(data);
        const newOrder = {...loggedInUser, ...data};

       // data.Design = {title};
       fetch('http://localhost:5000/newOrder', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newOrder)
    })
    .then(res => res.json())
    .then( success => {
        if(success) {
                       alert('your order place successful');
                    }
    })
    };
    // const handleRegister = (e) => {
    //     const newVolunteer = {...loggedInUser};
    //     fetch('http://localhost:5000/newOrder', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(newVolunteer)
    //     })
    //     .then(res => res.json())
    //     .then( success => {
    //         if(success) {
    //                        alert('your order place successful');
    //                     }
    //     })
    //     e.preventDefault();
   
    // }

    return (
        <div className="container">
            <div className='row'>
            <div className="col-md-2 col-sm-6 col-12">
                    <img src={logo} className="img-fluid" alt=""/>
                    <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-6 col-12 ">
                    <div className="row">
                        <div className="col-md-8 my-2">Order</div>
                        <div className="col-md-2 my-2 ">Ak Azad</div>
                    </div>
                    <div className="row bg">
                    <div className="col-md-6 m-5">
                        
                      <form onSubmit={handleSubmit(onSubmit)}>
                         <input type="text" className="form-control my-2"  value={loggedInUser.name}/>
                         <input type="text" className="form-control my-2"  value={loggedInUser.email}/>
                            <input type="text" className="form-control my-2" name="title" placeholder="Your Email" ref={register}/>
                            <input type="text" className="form-control my-2" name="desc" placeholder="Project Details"  ref={register}/>
                            {/* <textarea className="form-control  my-2" placeholder="descriptsion"></textarea> */}
                            <div className="d-flex">
                            <input type="text" className="form-control my-2 mr-1" name="price"  placeholder="price"  ref={register}/>
                            <input type="file" className="form-control my-2"  />
                            </div>
                            <button>Add Service</button>
                      </form>
                    </div>
                    <div className="col-md-4">sdfsdf</div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default OrderForm;