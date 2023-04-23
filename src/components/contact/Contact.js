import React, { useState } from "react";
import "./Contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    setIsSent(true);
    e.target.value=""
  };

  return (
    <section id="contact">
      <div className="container">
        <h1 className="section-title">CONTACT</h1>
     <div className="contact-form">
     <form onSubmit={handleSubmit} className="contact-form">
     <h2 className="contact-touch">GET IN TOUCH</h2>

          {isSent && (
            <p className="success-message">
              Thank you for your message. We will be in touch shortly.
            </p>
          )}
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button  type="submit" className="btn">Send</button>
        </form>

     </div>
       
        <div className="contact-info">
          <div className="icon">
            <a href="https://www.linkedin.com/in/manish-tomar-09b75523b/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/manishtomarr1" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="icon">
            <a href="mailto:tomarrmanish@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
