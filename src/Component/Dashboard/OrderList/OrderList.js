import React from 'react';

const OrderList = () => {
    return (
        <div>
            <div className='row'>
            <div className="col-md-5">
            <form>
                <input className="form-control my-2" placeholder="Your email address" type="text" name="name" />
                <input className="form-control my-2" placeholder="Your name/ company's name" type="text" name="name" />
                <textarea className="form-control my-2" style={{height:'150px'}} placeholder="Send Message"></textarea>
                <button type="submit" className="btn btn-secondary p-2">Send</button>
            </form>
            </div>
            <div className="col-md-5"></div>
        </div>
        </div>
    );
};

export default OrderList;