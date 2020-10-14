import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <section className="footer-container mt-5 py-5">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-md-5 p-2">
                            <h3>Let's us handle your project, proffsionaly</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae earum est soluta natus amet ratione animi libero ea accusamus autem?</p>
                        </div>
                        <div className="col-md-7 p-2">
                        <form>
                        <input className="form-control my-2" placeholder="Your email address" type="text" name="name" />
                        <input className="form-control my-2" placeholder="Your name/ company's name" type="text" name="name" />
                        <textarea className="form-control my-2" style={{height:'150px'}} placeholder="Send Message"></textarea>
                        <button type="submit" className="btn btn-secondary p-2">Send</button>
                        </form>
                        </div>
                    </div>
                </div>
                <p className="text-center my-5">Copyright Orange Labes 2020</p>
        </section>
    );
};

export default Footer;