
import React, { useState } from 'react';
import styles from './ContactPage.module.css';




function  ContactPage(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({ message: ''});
  const handleChange = (e) => {
    console.log(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (formData.message.length < 10) {
      setErrors({message: 'Message should be at least 10 characters long'});
      console.log(errors);
    } else {
      const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
      const mailtoUrl = `mailto:mlatysheva@gmail.com?subject=Contact Form Submission&body=${emailBody}`;
      window.open(mailtoUrl);
      setFormData({ name: '', email: '', message: '' });
    }
  };
  return (
    <div className='main'>
      <h1>Write us a message and we will get back to you ASAP</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.contactForm}>
          <label className={styles.label} htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            required
            minLength={3}
            className={styles.inputField}
            placeholder='James Smith'
            value={formData.name}
            onChange={handleChange}
          />
          <label className={styles.label} htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            required
            className={styles.inputField}
            placeholder='james.smith@gmail.com'
            value={formData.email}
            onChange={handleChange}
          />
          <label className={styles.label} htmlFor='message'>Message:</label>
          <textarea
            type='text'
            id='message'
            name='message'
            rows='4'
            required
            className={styles.inputField}
            placeholder='Your message here'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button className='actionBtn' type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ContactPage
