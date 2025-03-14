import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Linkedin, Github } from 'lucide-react';
import '../styles.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_wlgysea',  // Replace with EmailJS Service ID
      'template_x41y95c', // Replace with EmailJS Template ID
      formData,
      'p0HMRB0UrOJxVg21k'   // Replace with EmailJS Public Key
    )
    .then(() => {
      setSubmitted(true);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-icons">
        <a href="mailto:janumega@gmail.com" target="_blank" rel="noopener noreferrer">
          <Mail className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/gajaanuja" target="_blank" rel="noopener noreferrer">
          <Linkedin className="icon" />
        </a>
        <a href="https://github.com/Gajaanuja" target="_blank" rel="noopener noreferrer">
          <Github className="icon" />
        </a>
      </div>

      <h2>Contact Me</h2>
      <p>Feel free to reach out via email or by filling out the form below.</p>

      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      ) : (
        <p className="success-message">Thank you for reaching out! I will get back to you soon.</p>
      )}
    </div>
  );
};

export default Contact;
