import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../../images/logos/logo.png';
import './AddService.css';

const AddService = () => {
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
                
              <form>
                    <div className="row box ">
                 
                        <div className="col-md-5 m-5 ">
                            <label>Service Title</label>   
                            <input type="text" className="form-control mb-2" name="name" />
                            <label>Sescription</label>   
                            <textarea className="form-control  mb-2"  name="desc" placeholder="descriptsion"></textarea>
                        
                        </div>
                        <div className="col-md-4 m-5">
                            <label>Icon</label>      
                            <input type="file" className="form-control my-2" name="name" />
                        </div>
                   
                    </div>
                        <button className="float-right mr-5 mb-5 mt-2 btn btn-success">Send Review</button>
                </form>
             
            
        </div>
    </div>
    </div>
    );
};

export default AddService;