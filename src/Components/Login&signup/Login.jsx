import React from "react";
import "./Modal.css";
import { useNavigate } from "react-router-dom";
import { useState, useContext,useEffect } from "react";
import { ChangeSong } from "../../Contexts/Status";
import { useDispatch}  from 'react-redux'
import { apiCallLogin } from "../../Redux/Login/Action";
const Login = ()=> {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {handleStatus2} = useContext(ChangeSong)
  const [formdata, setFormdata] = useState({})
  useEffect(()=>{
    let localPlayer = ['value'];
    localStorage.setItem('playerAble', JSON.stringify(localPlayer));
    handleStatus2();
  },[])
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(apiCallLogin(formdata)).then((res)=> {
      res === 'success' ?  navigate('/') : navigate('/login');
      if(res === 'err'){
        document.getElementById('email').value = null;
        document.getElementById('password').value = null;
        alert('Enter right email or password')
      }
    }).catch((err)=> {
      navigate('/login')
    })
  }
  const handeleChange = (e) => {
    const { id, value } = e.target;
    setFormdata({ ...formdata, [id]: value });
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            
          >
            X
          </button>
        </div>
        <form onSubmit={(e)=>{handleSubmit(e)}} className="title">
          <button>Continue with Facebook</button>
          <button>Continue with Google</button>
          <button>Continue with Apple</button>
          <span>or</span>
          <hr className="hr"/>
          <input className='Signup_input' onChange={(e)=>{handeleChange(e)}} type="text" id="email" placeholder="Your email address" />
          <input className='Signup_input' onChange={(e)=>{handeleChange(e)}} id="password" type="password" placeholder="Password" />
          <button >Continue</button>
        </form>
        
        <div className="body">
        
        </div>
        <div id="terms">
        <p>When registering, you agree that we may use your provided data for the registration and to send you notifications on our products and services. You can unsubscribe from notifications at any time in your settings. For additional info please refer to our <a href="https://soundcloud.com/pages/privacy" target={"_blank"}>Privacy Policy</a>.</p>
      
        </div>
        <div className="footer">
          
          
        </div>
      </div>
    </div>
  );
}

export default Login;
