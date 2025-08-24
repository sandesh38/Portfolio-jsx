import React from "react";
import './Contact.css'

const Contact = () =>
{
    return(
        <section className="contact">
           <form >
            <h2>Contact Form</h2>
            <div className="input-box">
                <label>Full name</label>
                <input type="text" className="field" placeholder="Enter your name" required/>
            </div>

            <div className="input-box">
                <label>Your Email address</label>
                <input type="email" className="field" placeholder="Enter your email" required/>
            </div>

            <div className="input-box">
                <label>Your message</label>
                <textarea name="" id="" className="field-message"placeholder="Enter your message"></textarea>
            </div>
            <button type="submit">Send message</button>
       
            </form>
        </section>    
    ) 
}
    
export default Contact