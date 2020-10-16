import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {register, handleSubmit, errors} =useForm();
    
    const onSubmit = (data) => {
        // data.email = `${loggedInUser.email}` ;
         console.log(data);
         const addReview = {...loggedInUser, ...data};
 
        // data.Design = {title};
        fetch('http://localhost:5000/addReview', {
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(addReview)
     })
     .then(res => res.json())
     .then( success => {
         if(success) {
                        alert('your order place successful');
                     }
     })
     };
    return (
        <div className="container">
        <div className='row'>
        <div className="col-md-2 col-sm-6 col-12">
                <img src={logo} className="img-fluid" alt=""/>
                <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-6 col-12 ">
                <div className="row">
                    <div className="col-md-8 my-2">Order</div>
                    <div className="col-md-2 my-2 ">Ak Azad</div>
                </div>
                <div className="row bg">
                <div className="col-md-6 m-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" className="form-control my-2" name="name" value={loggedInUser.name}/>
                        <input type="text" className="form-control my-2" name="desination" placeholder="Desination" ref={register}/>
                        <textarea className="form-control  my-2"  name="desc" placeholder="descriptsion" ref={register}></textarea>
                        <button>Send Review</button>
                    </form>
                </div>
                <div className="col-md-4">sdfsdf</div>
            </div>
        </div>
    </div>
    </div>
    );
};

export default Review;