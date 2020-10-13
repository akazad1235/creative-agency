import React from 'react';
import Client from '../Client/Client';
import Header from '../Header/Header';
import Services from '../Service/Services';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Client></Client>
            <Services></Services>
        </div>
    );
};

export default Home;