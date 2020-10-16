import React from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import service4 from '../../../images/icons/service4.png';
import service5 from '../../../images/icons/service5.png';
import Service from './Service';


const Services = () => {
    const service = [
        {
            id:1,
            title:'Web & Mobile Design',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, velit.',
             img:service1
        },
        {
            id:2,
            title:' Graphics Design',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, velit.',
             img:service2
        },
        {
            id:3,
            title:'Web Development',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, velit.',
             img:service3
        },
        {
            id:4,
            title:'Web & Mobile Design',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, velit.',
             img:service4
        },
        {
            id:5,
            title:'Artifitial Intelligence',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, velit.',
             img:service5
        }
    ]

    return (
        <section className="container my-2">
            <h3 className="text-center">Provide Awosome <spna className="text-success">Service</spna></h3>
            <div className="row ">
                {
                    service.map(service =>  <Service service={service}></Service>)
                }
            </div>
        </section>
    );
};

export default Services;