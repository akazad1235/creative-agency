import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faList, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    // const id =[
    //     {id:1}
    // ]
    let id = [1, 2, 3];
    return (
        <div className="sidebar py-5 px-4">
        <ul className="list-unstyled text-secondary">
            <li>
                <Link to={`/customer/order/${id[0]}`} className="text-secondary">
                    <FontAwesomeIcon icon={faShoppingCart} /><span>Order</span>
                </Link>
            </li>
            <li>
                <Link to="/customer/orderlist" className="text-secondary">
                    <FontAwesomeIcon icon={faList} /><span>Service List</span>
                </Link>
            </li>
            <div>
                <li>
                    <Link to={`/customer/review/${id[2]}` }className="text-secondary">
                        <FontAwesomeIcon icon={faEnvelope} /><span>Review</span>
                    </Link>
                </li>

            </div>
        </ul>

    </div>
    );
};

export default Sidebar;