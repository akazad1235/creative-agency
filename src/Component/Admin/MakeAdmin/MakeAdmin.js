import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../../images/logos/logo.png';
import './MakeAdmin.css';

const MakeAdmin = () => {
    return (
        <div className="container">
        <div className='row'>
        <div className="col-md-2 col-sm-6 col-12">
                <img src={logo} className="img-fluid" alt=""/>
                <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-6 col-12 container-bg">
                <div className="row header-bg">
                    <div className="col-md-8 my-2">Order</div>
                    <div className="col-md-2 my-2 ">Ak Azad</div>
                </div>
                
              <section className="">
              <form>
                    <div className="row box ">
                 
                        <div className="col-md-6 m-5 ">
                            <label>Email</label>   
                            <input type="text" className="form-control mb-2" name="name" placeholder="Admin email address" />
                            <button className="float-right mr-5 mb-5 mt-2 btn btn-success">Send Review</button>
                            
                        
                        </div>
                       
                   
                    </div>
                        
                </form>
              </section>
            
        </div>
    </div>
    </div>
    );
};

export default MakeAdmin;