import React from 'react';
import fram from '../../../../images/logos/Frame.png'

const MainHeader = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-5 ">
                    <h1 className="mb-3">Les's Grow Our Brand to the next lavel</h1>
                    <p className="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nesciunt obcaecati corrupti ab asperiores mollitia. Architecto fugiat, cupiditate assumenda expedita laborum iure consectetur reprehenderit quasi cum sapiente sit fuga facere.</p>
                    <button className="btn btn-secondary">Hire Us</button>
                </div>
                <div className="col-md-7">
                    <img className="img-fluid mb-5" src={fram} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;