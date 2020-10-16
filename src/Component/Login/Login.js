import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle} from '@fortawesome/free-solid-svg-icons';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
             const signedInUser = {name: displayName, email} 
             console.log(signedInUser);
            setLoggedInUser(signedInUser);
             history.replace(from);
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    return (
        <div className="container my-5 ">
            <div className="d-flex justify-content-center my-5">
                <img src={logo} alt="" style={{width:'100px'}}/>
            </div>
            <div className="row justify-content-center">
                 <div className="row justify-content-center border p-5" >
               
                  <div className="box text-center">
                      <h4 className="my-3">Login With</h4>
                      <button className="btn btn-secondary my-3" onClick={handleGoogleSignIn}>Loin in with google</button>
                      <p>Don’t have an account? <Link to='/login'>Create an account</Link> </p>
                  </div>
                
            </div>
            </div>
            
        </div>
    );
};

export default Login;