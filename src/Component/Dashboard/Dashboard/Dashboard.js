import React from 'react';
import logo from '../../../images/logos/logo.png';
import OrderForm from '../OrderForm/OrderForm';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <img src={logo} className="img-fluid" alt=""/>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-6 col-12 ">
                    <div className="row">
                        <div className="col-md-8 my-2">Order</div>
                        <div className="col-md-2 my-2 ">Ak Azad</div>
                    </div>
                    <section className="bg p-5">
                        <OrderForm></OrderForm>
                    </section>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;