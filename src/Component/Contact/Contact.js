import React,{useRef} from 'react';
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { Button } from 'react-bootstrap';


 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7axrxlh', 'template_lteqiii', form.current, 'dinqEkV68MZcoqoIH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
    return (
        <div className='main-contact'>
        <h1 style={{color:"white"}}>Contact Information</h1>
        <div className='contact'>            
                
                <div className='info'>
                <h4> Contact me</h4>
                    <div className='contact-form'>
                        <p>Name: Mahfuz Ahmed</p>
                        <p>Phone: <a href="tel: +8801742162172">+8801742162172</a></p>
                        <p>Email: <a href="mailto: mahfuz9432@gmail.com">mahfuz9432@gmail.com</a></p>
                        <p>Linkdin: <a href="https://www.linkedin.com/in/the-mahfuz-ahmed/">Mahfuz Ahmed</a></p>
                    </div>
                   
                </div>
                <div className='info'>
                <form ref={form} onSubmit={sendEmail}>
                <h4>Send me Your Message</h4>
                    <p>Name</p>
                    <input type="text" name="user_name" />
                    <p>Email</p>
                    <input type="email" name="user_email" />
                    <p>Message</p> 
                    <textarea className='input-text' name="message" /> <br />
                    <input className='inputSubmit' type="submit" value="Submit" />
                    </form>                   
                    
                </div>

                
            
        </div>
        </div>

    );
};

export default Contact;