import React from "react";
import { useState } from "react";
import "./Modal.css";


function Signup({ setOpenModal }) {
  const [formdata,setFormdata]=useState({

  })

  const handeleChange=(e)=>{
    const {id,value}=e.target

    setFormdata({...formdata,
      [id]:value
    })

  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="form">
          <div className="heading">
             <h1>Sign Up<br/><span>Please fill in This form to create an account!</span></h1>

          </div>
          <hr className="hr"/>
          <div className="formdata">
            <input type="text" placeholder="User Name" onInput={handeleChange} id="username"/>
            <input type="text" placeholder="Email" onInput={handeleChange} id="email"/>
            <input type="text" placeholder="Password" onInput={handeleChange} id="password" />
            <input type="text" placeholder="Confirm Password" onInput={handeleChange} id="confirm" />

          </div>
          
         
        </div>
        
        <div className="body">
        
        </div>
        <div id="terms">
          
          <p>I accept the <a href="https://soundcloud.com/terms-of-use" target={"_blank"}>Terms of Use</a> and  <a href="https://soundcloud.com/pages/privacy" target={"_blank"}>Privacy Policy</a></p>
        </div>
        <div className="title">
          <button onClick={()=>{
            localStorage.setItem("formdata",JSON.stringify(formdata))
          }}>Sign Up</button>
         
          
          
        </div>
      </div>
    </div>
  );
}

export default Signup;
