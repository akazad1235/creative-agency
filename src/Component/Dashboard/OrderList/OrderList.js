import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './OrderList.css';
import logo from '../../../images/logos/logo.png';

const OrderList = () => {
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
 dfkjgldfkjgldfkjglkj
                    </div>
                    <div className="col-md-4">sdfsdf</div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default OrderList;