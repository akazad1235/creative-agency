import React from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import service4 from '../../../images/icons/service4.png';
import service5 from '../../../images/icons/service5.png';


const Service = () => {
    const service = [
        {
            title:'Web & Mobile Design',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, velit.',
             img:service1
        },
        {
            title:' Graphics Design',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, velit.',
             img:service2
        },
        {
            title:'Web Development',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, velit.',
             img:service3
        },
        {
            title:'Web & Mobile Design',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, velit.',
             img:service4
        },
        {
            title:'Artifitial Intelligence',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, velit.',
             img:service5
        }
    ]

    return (
        <section className="container">
            <h3 className="text-center">Provide Awosome <spna className="text-success">Service</spna></h3>
            <div className="row ">
                <div className="col-md-4 p-3">
                <img className="mx-auto d-block my-3" style={{width:'75px'}} src={service1} alt=""/>
                    <h4 className="my-3 text-center">Web Adn mobile desing</h4>
                    <p className="my-3 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ipsa, tempora sint totam aperiam laudantium accusamus quasi! Esse, nesciunt dolor.</p>
                </div>
                <div className="col-md-4 p-3">
                <img className="mx-auto d-block my-3" style={{width:'75px'}} src={service2} alt=""/>
                    <h4 className="my-3 text-center">Web Adn mobile desing</h4>
                    <p className="my-3 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ipsa, tempora sint totam aperiam laudantium accusamus quasi! Esse, nesciunt dolor.</p>
                </div>
                <div className="col-md-4 p-3">
                    <img className="mx-auto d-block my-3" style={{width:'75px'}} src={service3} alt=""/>
                    <h4 className="my-3 text-center">Web Adn mobile desing</h4>
                    <p className="my-3 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ipsa, tempora sint totam aperiam laudantium accusamus quasi! Esse, nesciunt dolor.</p>
                </div>

            </div>
            

        </section>
    );
};

export default Service;