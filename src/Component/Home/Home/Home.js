import React from 'react';
import Client from '../Client/Client';
import Header from '../Header/Header';
import Service from '../Service/Service';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Client></Client>
            <Service></Service>
        </div>
    );
};

export default Home;