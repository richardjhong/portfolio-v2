import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { GrInbox, GrSend } from "react-icons/gr";

export default function Contact() {
  const [email, setEmail] = useState('')  
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = (e) => {
    setIsHovering(true);
  };

  const handleMouseLeave = (e) => {
    setIsHovering(false);
    if (e.target.name === 'name' && name === '') {
      setErrorMessage('Name field cannot be empty.')
    }

    if (e.target.name === 'email' && email === '') {
      setErrorMessage('Email field cannot be empty.')
    }

    if (e.target.name === 'message' && message === '') {
      setErrorMessage('Message field cannot be empty.')
    }
  };

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

    setEmail('');
    setName('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div className="background-alt" id="contact" style={{height: '100vh'}}>
      <h2 className="heading"><GrInbox /> Contact</h2>
      <form id="contact-form">
        <div className="form-group" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              value={name}
              name="name"
              onChange={handleInputChange}
              type="name"
              placeholder="Name"
            />
        </div>
        <div className="form-group" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <label htmlFor="email">Email address</label>
            <input
              className="form-control"
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Email"
            />
        </div>
        <div className="form-group" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <label htmlFor="message">Message</label>
            <textarea 
              className="form-control"
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              placeholder="Enter message here."
            />
        </div>
        <button type="button" onClick={handleFormSubmit}><GrSend /></button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
