import React, { useState, useRef } from 'react';
import { validateEmail } from '../../utils/helpers';
import { GrInbox, GrSend } from "react-icons/gr";
import { RiMailSendLine, RiErrorWarningLine } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import avatar from '../../assets/images/contact_avatar.png'
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {
  const [email, setEmail] = useState('')  
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const form = useRef()

  const [errorMessage, setErrorMessage] = useState('');

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = (e) => {
    setIsHovering(true);
  };

  const handleMouseLeave = (e) => {
    setIsHovering(false);
    if (e.target.name === 'from_name' && name === '') {
      setErrorMessage('Name field cannot be empty.')
    } 

    if (e.target.name === 'from_email' && email === '') {
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

    if (inputType === 'from_email') {
      setEmail(inputValue);
      email !== '' && setErrorMessage('Email field cannot be empty.')
    } else if (inputType === 'from_name') {
      setName(inputValue);
      name !== '' && setErrorMessage('Name field cannot be empty.')
    } else {
      setMessage(inputValue);
      message !== '' && setErrorMessage('Message field cannot be empty.') 
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    !validateEmail(email) && setErrorMessage('Email is invalid.')

    if (!validateEmail(email) || email === '' || name === '' || message === '') {
      showToastMessage('fail')
      return;
    }

    const service_id = "service_u8bt4c3"
    const template_id = "template_tqobshn"
    const PUBLIC_KEY = "wgE9EyYzAViNKfBeb"

    // public key used
    emailjs.sendForm(service_id, template_id, form.current, PUBLIC_KEY)
    .then((result) => {
      console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

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
        toast.error(
          <div>
            Uh oh! Please check that your inquiry meets the following conditions:
            <br />
            <br />
            {/* Toastify rendering for checkmark or X mark on name */}
            { name !== '' ? <p>{'\u2705'} A non-empty name field.</p> : <p>{'\u274C'} A non-empty name field.</p>}
            {/* Toastify rendering for checkmark or X mark on email and valid email */}
            { email !== '' && validateEmail(email) ? <p>{'\u2705'} A non-empty email address AND a valid email address.</p> : <p>{'\u274C'} 
            A non-empty email address AND a valid email address.</p>}
            {/* Toastify rendering for checkmark or X mark on message */}
            { message !== '' ? <p>{'\u2705'} A non-empty message field.</p> : <p>{'\u274C'} A non-empty message field.</p>}
          </div>, {
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
          <form id="contact-form" ref={form} onSubmit={handleFormSubmit}>
            <div className="form-group" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                <label className="contact-label" htmlFor="name">
                  { name !== '' ? <p>Name {'\u2705'}</p> : <p>Name</p>}
                </label>
                <input
                  className="form-control"
                  value={name}
                  name="from_name"
                  onChange={handleInputChange}
                  type="name"
                  placeholder="Name"
                />
            </div>
            <div className="form-group" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                <label className="contact-label" htmlFor="email">
                  { (email !== '' && validateEmail(email) )? <p>Email address {'\u2705'}</p> : <p>Email address</p>}
                </label>
                <input
                  className="form-control"
                  value={email}
                  name="from_email"
                  onChange={handleInputChange}
                  type="email"
                  placeholder="Email"
                />
            </div>
            <div className="form-group" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                <label className="contact-label" htmlFor="message">
                  { message !== '' ? <p>Message {'\u2705'}</p> : <p>Message</p>}
                </label>
                <textarea 
                  className="form-control"
                  value={message}
                  name="message"
                  onChange={handleInputChange}
                  type="message"
                  placeholder="Enter message here."
                />
            </div>
            <div style={{ marginTop: "10px" }}>
              <button 
                type="button" 
                onClick={handleFormSubmit} 
                style={{width: "100px"}}
              >
                <GrSend />
              </button>
            </div>
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
