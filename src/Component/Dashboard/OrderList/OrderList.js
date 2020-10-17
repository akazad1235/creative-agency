import React, { useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './OrderList.css';
import logo from '../../../images/logos/logo.png';
import service1 from '../../../images/icons/service1.png';
import { useState } from 'react';
import { UserContext } from '../../../App';
import { useEffect } from 'react';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext) 
    const [servieOrder, setServiceOrder] = useState([]);

          useEffect(() => {
            fetch('https://creative-agency-cc80c.web.app/orderList?email='+loggedInUser.email)
            .then( res => res.json())
            .then( data =>setServiceOrder(data))
          }, [])

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
                        <div className="col-md-2 my-2 ">{loggedInUser.name}</div>
                    </div>
                    <div className="row bg">
                     { 
                    servieOrder.map( orderlist => {
                       return<>
                        <div className="col-md-5 m-2">
                            <div className="card">
                            <div className="card-body">
                            <div  className="card-title d-flex ">
                                    <img className="mr-5" style={{width:'75px'}} src={service1} alt="img"/>
                                    <div>
                                    <p className="ml-5 bg-primary p-2 mt-3  rounded">Done</p>
                                    </div>
                                </div>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            </div>
                        </div>
                        </>
                    })
                }
                   
                </div>
               
            </div>
        </div>
        </div>
    );
};

export default OrderList;