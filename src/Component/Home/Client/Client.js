import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import Clients from './Clients';

const Client = () => {
    const ourClients = [
        { name:'Slack', logo:slack},
        { name:'Google', logo:google},
        { name:'Uber', logo:uber},
        { name:'Netflix', logo:netflix},
        { name:'Airbnb', logo:airbnb}
    ]
    return (
        <section className="container">
            <div className="row p-3 mx-auto my-5">
                { 
                   ourClients.map( clients => <Clients client={clients}></Clients>) 
                }
            </div>
           
        </section>
    );
};

export default Client;