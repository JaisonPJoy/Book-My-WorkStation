import React from 'react';
import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle"> Office Updates </h1>
        <span className="mailDesc">Subscribe to the office newsletter</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
        </div>
  </div>
  )
}

export default MailList
