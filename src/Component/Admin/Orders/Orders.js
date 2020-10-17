import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../../images/logos/logo.png';
import './Orders.css';
const Orders = () => {
    const [ordersList, setOrdersList] = useState([]);

    useEffect(() => {
      fetch('https://radiant-falls-65936.herokuapp.com/adminOrderList')
      .then( res => res.json())
      .then( data =>setOrdersList(data))
    }, [])

    console.log(ordersList);

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
                <div className="row bg ">
                    <div className="">
                        <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Service</th>
                            <th scope="col">Prject Details</th>
                            <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                ordersList.map( orders => {
                                 return<>
                                     <tr>
                                         <td>{orders.name}</td>
                                         <td>{orders.email}</td>
                                         <td>{orders.title}</td>
                                         <td>{orders.desc}</td>
                                        <td>
                                            <select>
                                                <option>Panding</option>
                                                <option>Done</option>
                                                <option>Panding</option>
                                            </select>
                                        </td>
                                     </tr>
                                 </>
                                })
                            }
                           
                           
                           
                        
                        </tbody>
                     </table>
                    </div>
            </div>
        </div>
    </div>
    </div>
        
    );
};

export default Orders;