import React from 'react';
import client1 from '../../../images/customer-1.png'
import client2 from '../../../images/customer-2.png'
import client3 from '../../../images/customer-3.png'

const ClientFeedback = () => {
    return (
        <section className="my-5">
            <h3 className="text-center">Clients <span className="text-success">Feedback</span></h3>

        <div className="container my-5">
        <div class="card-deck">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex">
                        <img className="mx-3 img-fluid" style={{width:'20%', height:'20%'}} src={client1} alt="img"/>
                        <div>
                             <h5 className="card-title py-2">Nash Patrik</h5>
                             <p>CEO Monpul</p>
                        </div>
                        </div>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                    <div className="d-flex">
                    <img className="mx-3 img-fluid" style={{width:'20%', height:'20%'}} src={client2} alt="img"/>
                        <div>
                             <h5 className="card-title py-2">Nash Patrik</h5>
                             <p>CEO Monpul</p>
                    </div>
                    </div>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                    <div className="d-flex">
                    <img className="mx-3 img-fluid" style={{width:'20%', height:'20%'}} src={client3} alt="img"/>
                        <div>
                             <h5 className="card-title py-2">Nash Patrik</h5>
                             <p>CEO Monpul</p>
                        </div>
                        </div>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>

         </div>
        </div>
        </section>
    );
};

export default ClientFeedback;