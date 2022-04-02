import React from "react";
import { useState, useContext,useEffect } from "react";
import "./Modal.css";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { ChangeSong } from "../../Contexts/Status";
const Signup = () => {
  const navigate = useNavigate();
  const {handleStatus2} = useContext(ChangeSong)
  const [formdata, setFormdata] = useState({});
  const handeleChange = (e) => {
    const { id, value } = e.target;
    
    setFormdata({ ...formdata, [id]: value });
  };
  useEffect(()=>{
    let localPlayer = ['value'];
    localStorage.setItem('playerAble', JSON.stringify(localPlayer));
    handleStatus2();
  },[])
  const Goback = () =>{
    navigate('/')
  }
  const handleSubmit = () =>{
    console.log(formdata)
    axios.post('https://soundcloud-serverside.herokuapp.com/user/post',{email : formdata.email, password : formdata.password, name : formdata.name}).then((response) =>{
      navigate('/login')
    }).catch((err) =>{
      console.log(err);
    })
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={()=>{Goback()}}>
            X
          </button>
        </div>
        <div className="form">
          <div className="heading">
            <h1>
              Sign Up
              <br />
              <span>Please fill in This form to create an account!</span>
            </h1>
          </div>
          <hr className="hr" />
          <div className="formdata">
            <input
              className="Signup_input"
              type="text"
              placeholder="User Name"
              onInput={handeleChange}
              id="name"
            />
            <input
              className="Signup_input"
              type="text"
              placeholder="Email"
              onInput={handeleChange}
              id="email"
            />
            <input
              className="Signup_input"
              type="text"
              placeholder="Password"
              onInput={handeleChange}
              id="password"
            />
            <input
              className="Signup_input"
              type="text"
              placeholder="Confirm Password"
              onInput={handeleChange}
              id="confirm"
            />
          </div>
        </div>

        <div className="body"></div>
        <div id="terms">
          <p>
            I accept the{" "}
            <p>
              Terms of Use
            </p>{" "}
            and{" "}
            <p>
              Privacy Policy
            </p>
          </p>
        </div>
        <div className="title">
          <button
            onClick={() => {
              handleSubmit()
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
