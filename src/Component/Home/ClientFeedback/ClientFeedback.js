import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import client1 from '../../../images/customer-1.png'
import client2 from '../../../images/customer-2.png'
import client3 from '../../../images/customer-3.png'

const ClientFeedback = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/clientReview')
      .then( res => res.json())
      .then( data =>setReview(data))
    }, []);
    console.log(review);
    useEffect(() => {
        fetch('http://localhost:5000/clientReview')
        .then( res => res.json())
        .then( data =>setReview(data))
      }, []);
      console.log(review);

    return (
        <section className="my-5">
            <h3 className="text-center">Clients <span className="text-success">Feedback</span></h3>

        <div className="container my-5">
        <div class="card-deck">
                
                { 
                    review.map( getReview => {
                        return<>
                            <div className="card">
                            <div className="card-body">
                                <div className="d-flex">
                                <img className="mx-3 img-fluid" style={{width:'20%', height:'20%'}} src={client1} alt="img"/>
                                <div>
                    <h5 className="card-title py-2">{getReview.name}</h5>
                                    <p>{getReview.desination}</p>
                                </div>
                                </div>
                            <p className="card-text">{getReview.desc.substring(0,100)}</p>
                            </div>
                        </div>
                        </>
                    })
                }



         </div>
        </div>
        </section>
    );
};

export default ClientFeedback;