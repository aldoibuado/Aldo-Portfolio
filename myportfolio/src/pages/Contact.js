import React, { useState } from 'react'
import '../styles/Contact.css';

// importing the helper function that will help check if the email is valid
import { validateEmail } from '../utils/helpers';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');
 const [errorMessage, setErrorMessage] = useState('');

 const handleInputChange = (e) => {
  const { target } = e;
  const inputType = target.name;
  const inputValue = target.value;

  if (inputType === 'name') {
    setName(inputValue);
  } else if (inputType === 'email') {
    setEmail(inputValue);
  } else {
    setMessage(inputValue)
  }
 };

 const handleFormSubmit = (e) => {
  e.preventDefault();

  if (!validateEmail(email)) {
    setErrorMessage('Email is invalid');
    return;
  }

  setName('');
  setEmail('');
  setMessage('');
 }

  return (
    <div>
      {/* <p>Contact {name}</p> */}
      <form className='form'>
        <input
         value={name}
         name='name'
         onChange={handleInputChange}
         type='name'
         placeholder='name'
         />
         <input 
         value={email}
         name='email'
         onChange={handleInputChange}
         type='email'
         placeholder='email'
         />
         <input className='inputbox'
         value={message}
         name='message'
         onChange={handleInputChange}
         type='text'
         placeholder='message'
         />

         <button type='button' onClick={handleFormSubmit}>
          Submit
         </button>
      </form>
      {errorMessage && (
        <div>
          <p className='error-text'>{errorMessage}</p>
        </div>
      )}
    </div>
  )
}

export default Contact;