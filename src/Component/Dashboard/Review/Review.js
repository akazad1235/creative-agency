import React from 'react';
import logo from '../../../images/logos/logo.png';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
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
                    <form>
                        <input type="text" className="form-control my-2"  placeholder="Your Name/ Company Name"/>
                        <input type="text" className="form-control my-2"  placeholder="Your Email"/>
                        <input type="text" className="form-control my-2"  placeholder="Graphic Design"/>
                        <input type="text" className="form-control my-2"  placeholder="Project Details"/>
                        <textarea className="form-control  my-2" placeholder="descriptsion"></textarea>
                        <div className="d-flex">
                        <input type="text" className="form-control my-2 mr-1"  placeholder="price"/>
                        <input type="file" className="form-control my-2"  />
                        </div>
                        <input type="button" value="submit"/>
                    </form>
                </div>
                <div className="col-md-4">sdfsdf</div>
            </div>
        </div>
    </div>
    </div>
    );
};

export default Review;