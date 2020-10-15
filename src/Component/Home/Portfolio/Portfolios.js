import React from 'react';
import './Portfolios.css';
import Slider from "react-slick";
import project1 from '../../../images/carousel-1.png';
import project2 from '../../../images/carousel-2.png';
import project3 from '../../../images/carousel-3.png';
import project4 from '../../../images/carousel-4.png';
import project5 from '../../../images/carousel-5.png';

const Portfolios = () => {
    let settings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div>
            <section className="poftfolio-container py-5">
                <div className="container  ">
                    <h1 className="text-center text-white ">Here are some of <span className="text-success">our works</span></h1>
        <Slider {...settings}>
          <div className="p-1">
            <img className="img-fluid" src={project1} alt=""/>
          </div>
          <div className="p-1">
          <img className="img-fluid" src={project2} alt=""/>
          </div>
          <div className="p-1">
          <img className="img-fluid" src={project3} alt=""/>
          </div>
          <div className="p-1">
          <img className="img-fluid" src={project4} alt=""/>
          </div>
          <div className="p-1">
          <img className="img-fluid" src={project5} alt=""/>
          </div>
         
        </Slider>
                </div>


            </section>

        </div>
    );
};

export default Portfolios;