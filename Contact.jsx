import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='cont'>
    <h1>Contact Us</h1>
    

    <div className="containerConctact" >
      <div className="contactForm">
        <form className='formInput' action="https://formspree.io/f/moqgdgop" method="POSt">
          <input className='name' type="text" name="username" placeholder='Name' autoComplete='off' required />
          <input className='phone' type="text" name="phone" placeholder='Mobile No' autoComplete='off' required />
          <input  className='email' type="email" name="email" placeholder='Email' autoComplete='off' />
          <input className='location' type="text" name="location" placeholder='Your City' autoComplete='off' required />
          <textarea className='message'  name="message" placeholder='Message' cols="30" rows="10" autoComplete='off' required></textarea>
          <input className='sub' type="submit" value="send" />
        </form>
      </div>
    </div>
    <iframe src="**********" 
    width="100%" 
    height="450" 
    style={{border:0}} 
    allowFullScreen="" 
    loading="lazy"
     referrerPolicy="no-referrer-when-downgrade">
    </iframe>
    </div>
  
  )
}

export default Contact
