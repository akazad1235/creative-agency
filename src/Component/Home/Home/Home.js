import React from 'react';
import Client from '../Client/Client';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Portfolios from '../Portfolio/Portfolios';
import Services from '../Service/Services';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Client></Client>
            <Services></Services>
            <Portfolios></Portfolios>
            <ClientFeedback></ClientFeedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;