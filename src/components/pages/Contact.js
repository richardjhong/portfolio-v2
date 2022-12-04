import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { GrInbox, GrSend } from "react-icons/gr";
import { RiMailSendLine, RiErrorWarningLine } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import avatar from '../../assets/images/contact_avatar.png'
import 'react-toastify/dist/ReactToastify.css';

const ContactContainer = styled.div`
  display: flex;
  
`

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
      setErrorMessage('Email is invalid.');
      showToastMessage('fail')
      return;
    }

    showToastMessage('success')
    setEmail('');
    setName('');
    setMessage('');
    setErrorMessage('');
    
  };

  const showToastMessage = (outcome) => {
    switch(outcome) {
      case 'success':
        toast.success(<div>Sent! Thanks for dropping by!<br /><span style={{ color: "#AC3B61" }}>고맙습니다!</span></div>, {
          icon: <RiMailSendLine />,
          position: toast.POSITION.TOP_CENTER
        });
        return;
      case 'fail':
        toast.error(`Uh oh! ${errorMessage}`, {
          icon: <RiErrorWarningLine />,
          position: toast.POSITION.TOP_CENTER
        });
        return;
      default:
        return;
    }
};

  return (
    <div className="background-alt" id="contact" style={{height: '100vh'}}>
      <h2 className="heading"><GrInbox /> Contact</h2>
      <section className="col-md-8 col-lg-12 d-flex justify-content-center align-items-center">
        <div className="col-6 d-flex justify-content-center m-2" style={{ backgroundColor: "#BAB2B5 "}} >
          <img src={avatar} alt={"contact_avatar"}height={500}/>
        </div>
        <div className="col-6" >
          <form id="contact-form">
            <div className="form-group" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                <label className="contact-label" htmlFor="name">Name</label>
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
                <label className="contact-label" htmlFor="email">Email address</label>
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
                <label className="contact-label" htmlFor="message">Message</label>
                <textarea 
                  className="form-control"
                  value={message}
                  name="message"
                  onChange={handleInputChange}
                  type="message"
                  placeholder="Enter message here."
                />
            </div>
            <button type="button" onClick={handleFormSubmit} style={{width: "100px"}}><GrSend /></button>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
          </form>
          
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}
