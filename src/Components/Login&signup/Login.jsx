import React from "react";
import "./Modal.css";
import { useNavigate } from "react-router-dom";
import { useState, useContext,useEffect } from "react";
import axios from "axios"
import { ChangeSong } from "../../Contexts/Status";
// https://soundcloud-serverside.herokuapp.com/
const Login = ()=> {
  const navigate = useNavigate();
  const {handleStatus2,handleLogin} = useContext(ChangeSong)
  const [formdata, setFormdata] = useState({})
  useEffect(()=>{
    let localPlayer = ['value'];
    localStorage.setItem('playerAble', JSON.stringify(localPlayer));
    handleStatus2();
  },[])
  let loginStatusData = JSON.parse(localStorage.getItem('userName')) || [];
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('https://soundcloud-serverside.herokuapp.com/user/login/singleuser',  {email : formdata.email, password : formdata.password})
    .then((response) =>{
      if(response.data.userName !== null){
        loginStatusData[0]= (response.data.userName)
        localStorage.setItem('userName', JSON.stringify(loginStatusData))
        handleLogin(true);
        // handleStatus2();
        navigate('/')
      }
    }).catch((err) =>{
      handleLogin(false)
      navigate('/signup')
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
          <input className='Signup_input' onChange={(e)=>{handeleChange(e)}} id="password" type="text" placeholder="Password" />
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
