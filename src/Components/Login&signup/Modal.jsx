import React from "react";
import "./Modal.css";


function Modal({ setOpenModal }) {
  
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
        <div className="title">
          <button>Continue with Facebook</button>
          <button>Continue with Google</button>
          <button>Continue with Apple</button>
          <span>or</span>
          <hr/>
          <input type="text" placeholder="Your email address" />
          <input id="password" type="text" placeholder="Password" />
          <button>Continue</button>
        </div>
        
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

export default Modal;
