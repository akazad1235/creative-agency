import React, { useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../../images/logos/logo.png';
import './AddService.css';
import { useState } from 'react';
import { UserContext } from '../../../App';

const AddService = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('desc', info.desc);
      
        fetch('https://radiant-falls-65936.herokuapp.com/addService',{
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
        e.preventDefault()
        }
    return (
        <div className="container">
        <div className='row'>
        <div className="col-md-2 col-sm-6 col-12">
                <img src={logo} className="img-fluid" alt=""/>
                <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-6 col-12 container-bg">
                <div className="row header-bg">
                    <div className="col-md-8 my-2">Order</div>
                    <div className="col-md-2 my-2 ">{loggedInUser.name}</div>
                </div>
                
              <form onSubmit={handleSubmit}>
                    <div className="row box ">
                 
                        <div className="col-md-5 m-5 ">
                            <label>Service Title</label>   
                            <input type="text" onBlur={handleBlur} className="form-control mb-2" placeholder="Your Service Title" name="title" />
                            <label>Sescription</label>   
                            <textarea  onBlur={handleBlur}  className="form-control  mb-2"  name="desc" placeholder="descriptsion"></textarea>
                        </div>
                        <div className="col-md-4 m-5">
                            <label>Icon</label>      
                            <input onChange={handleFileChange} type="file" className="form-control my-2"  />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success float-right mr-5 mb-5">Add Service</button> 
                </form>
             
            
        </div>
    </div>
    </div>
    );
};

export default AddService;