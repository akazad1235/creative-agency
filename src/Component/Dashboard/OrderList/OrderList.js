import React, { useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './OrderList.css';
import logo from '../../../images/logos/logo.png';
import { useState } from 'react';
import { UserContext } from '../../../App';
import { useEffect } from 'react';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext) 
    const [eventTask, setEventTaks] = useState([]);

          useEffect(() => {
            fetch('http://localhost:5000/orderList')
            .then( res => res.json())
            .then( data =>setEventTaks(data))
          }, [])

        //   console.log(eventTask);
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
                    <div className="col-md-5 ">
                    <div className="card">
                    <div className="card-body">
                    <div  className="card-title d-flex ">
                            <img className="mr-5" src="" alt="img"/>
                            <div>
                              <p className="ml-5">done</p>
                            </div>
                        </div>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-5">
                    <div className="card">
                    <div className="card-body">
                        <div  className="card-title d-flex ">
                            <img className="mr-5" src="" alt="img"/>
                            <div>
                              <p className="ml-5">done</p>
                            </div>
                        </div>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                    </div>
                </div>
                { 
                    eventTask.map( orderlist => {
                       return<>
                        <li>{orderlist.name}</li>
                        <li>{orderlist.email}</li>
                        </>
                    })
                }
            </div>
        </div>
        </div>
    );
};

export default OrderList;